from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware

from resume_parser import extract_text_from_pdf
from scorer import (
    extract_skills,
    calculate_match_score,
    rank_candidates
)
from semantic_matcher import calculate_semantic_score


app = FastAPI()


# Enable CORS so React frontend can communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Home route to check API status
@app.get("/")
def home():
    return {
        "message": "Hybrid AI Resume Screening API Running 🚀"
    }


# Function to generate AI-style summary
def generate_summary(score):
    if score >= 80:
        return (
            "Excellent candidate with a strong overall match. "
            "Highly recommended for the interview round."
        )

    elif score >= 50:
        return (
            "Good candidate with relevant skills but has some "
            "areas that need improvement."
        )

    else:
        return (
            "Candidate currently does not match most of the "
            "required job expectations."
        )


# Analyze a single resume
@app.post("/upload")
async def upload_resume(
    file: UploadFile = File(...),
    job_description: str = Form(...)
):

    # Extract resume text
    resume_text = extract_text_from_pdf(file.file)

    # Extract skills
    candidate_skills = extract_skills(resume_text)
    required_skills = extract_skills(job_description)

    # Calculate individual scores
    skill_score = calculate_match_score(
        candidate_skills,
        required_skills
    )

    semantic_score = calculate_semantic_score(
        resume_text,
        job_description
    )

    # Hybrid final score
    final_score = round(
        (0.7 * skill_score) +
        (0.3 * semantic_score),
        2
    )

    # Missing skills
    missing_skills = [
        skill for skill in required_skills
        if skill not in candidate_skills
    ]

    return {
        "filename": file.filename,
        "candidate_skills": candidate_skills,
        "required_skills": required_skills,
        "missing_skills": missing_skills,

        "skill_score": skill_score,
        "semantic_score": semantic_score,
        "match_score": final_score,

        "summary": generate_summary(final_score)
    }


# Analyze and rank multiple resumes
@app.post("/rank")
async def rank_resumes(
    files: list[UploadFile] = File(...),
    job_description: str = Form(...)
):

    candidates = []

    # Extract job skills once
    required_skills = extract_skills(
        job_description
    )

    for file in files:

        # Read resume
        resume_text = extract_text_from_pdf(
            file.file
        )

        # Extract candidate skills
        candidate_skills = extract_skills(
            resume_text
        )

        # Skill-based score
        skill_score = calculate_match_score(
            candidate_skills,
            required_skills
        )

        # AI semantic score
        semantic_score = calculate_semantic_score(
            resume_text,
            job_description
        )

        # Final hybrid score
        final_score = round(
            (0.7 * skill_score) +
            (0.3 * semantic_score),
            2
        )

        # Find missing skills
        missing_skills = [
            skill for skill in required_skills
            if skill not in candidate_skills
        ]

        # Store candidate details
        candidates.append({
            "filename": file.filename,
            "candidate_skills": candidate_skills,
            "missing_skills": missing_skills,

            "skill_score": skill_score,
            "semantic_score": semantic_score,
            "match_score": final_score,

            "summary": generate_summary(final_score)
        })

    # Rank candidates from highest score to lowest
    ranked_candidates = rank_candidates(
        candidates
    )

    return {
        "total_candidates": len(ranked_candidates),

        "top_candidate": (
            ranked_candidates[0]
            if ranked_candidates
            else None
        ),

        "ranking": ranked_candidates
    }