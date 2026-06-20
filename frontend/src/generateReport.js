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
        "Resume Screening Report",
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
        `ATS Score: ${candidate.match_score}%`,
        20,
        55
    );

    doc.text(
        `Skill Match Score: ${candidate.skill_score}%`,
        20,
        65
    );


    // Candidate Skills
    doc.text(
        "Candidate Skills:",
        20,
        90
    );

    doc.text(
        candidate.candidate_skills.length > 0
            ? candidate.candidate_skills.join(", ")
            : "No skills found",
        25,
        100,
        {
            maxWidth: 160
        }
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
        {
            maxWidth: 160
        }
    );


    // Candidate Summary
    doc.text(
        "Candidate Summary:",
        20,
        160
    );

    doc.text(
        candidate.summary,
        25,
        170,
        {
            maxWidth: 160
        }
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


    // Download PDF
    doc.save(
        `${candidate.filename}_Report.pdf`
    );
}