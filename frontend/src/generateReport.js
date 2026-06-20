import jsPDF from "jspdf";


function getRecommendation(score) {
    if (score >= 80) {
        return "Highly Recommended";
    } 
    else if (score >= 50) {
        return "Recommended with Consideration";
    } 
    else {
        return "Not Recommended";
    }
}


export function generatePDF(candidate) {

    const doc = new jsPDF();


    // Title
    doc.setFontSize(18);
    doc.text(
        "AI Resume Screening Report",
        20,
        20
    );


    // Candidate name
    doc.setFontSize(12);

    doc.text(
        `Candidate: ${candidate.filename}`,
        20,
        40
    );


    // Scores
    doc.text(
        `Final ATS Score: ${candidate.match_score}%`,
        20,
        55
    );

    doc.text(
        `Skill Match Score: ${candidate.skill_score}%`,
        20,
        65
    );

    doc.text(
        `AI Semantic Score: ${candidate.semantic_score}%`,
        20,
        75
    );


    // Skills
    doc.text(
        "Candidate Skills:",
        20,
        95
    );

    doc.text(
        candidate.candidate_skills.join(", "),
        25,
        105,
        { maxWidth: 160 }
    );


    // Missing Skills
    doc.text(
        "Missing Skills:",
        20,
        125
    );

    doc.text(
        candidate.missing_skills.length > 0
            ? candidate.missing_skills.join(", ")
            : "None",
        25,
        135,
        { maxWidth: 160 }
    );


    // AI Summary
    doc.text(
        "AI Summary:",
        20,
        155
    );

    doc.text(
        candidate.summary,
        25,
        165,
        { maxWidth: 160 }
    );


    // Recommendation
    doc.text(
        `Hiring Recommendation: ${getRecommendation(candidate.match_score)}`,
        20,
        200,
        {
            maxWidth: 160
        }
    );


    // Download file
    doc.save(
        `${candidate.filename}_Report.pdf`
    );
}