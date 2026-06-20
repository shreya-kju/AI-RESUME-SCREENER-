import { generatePDF } from "../generateReport";

function CandidateModal({ candidate, onClose }) {
    if (!candidate) return null;

    let recommendation = "";

    if (candidate.match_score >= 80) {
        recommendation = "🟢 Highly Recommended";
    } else if (candidate.match_score >= 50) {
        recommendation = "🟡 Recommended with Consideration";
    } else {
        recommendation = "🔴 Not Recommended";
    }

    return (
        <div className="modal-overlay">
            <div className="modal">

                <button
                    className="close-button"
                    onClick={() =>{
                        console.log("Close clicked");
                        onClose()
                    }}
                >
                    ✖
                </button>

                <h2>
                    👤 Candidate Details
                </h2>


                <h3>
                    📄 {candidate.filename}
                </h3>


                {/* Score Analytics */}
                <div className="score-section">

                    <div className="score-card">
                        <h4>🎯 Skill Match</h4>
                        <p>
                            {candidate.skill_score}%
                        </p>
                    </div>


                    


                    <div className="score-card final-score">
                        <h4>⭐  ATS Score</h4>
                        <p>
                            {candidate.match_score}%
                        </p>
                    </div>

                </div>


                {/* Candidate Skills */}
                <h3>
                    🛠 Candidate Skills
                </h3>

                <p>
                    {candidate.candidate_skills.length > 0
                        ? candidate.candidate_skills.join(", ")
                        : "No skills found"}
                </p>


                {/* Missing Skills */}
                <h3>
                    ⚠ Missing Skills
                </h3>

                <p>
                    {candidate.missing_skills &&
                    candidate.missing_skills.length > 0
                        ? candidate.missing_skills.join(", ")
                        : "No missing skills"}
                </p>


                {/* AI Summary */}
                <h3>
                    🤖 AI Candidate Summary
                </h3>

                <div className="summary-box">
                    {candidate.summary}
                </div>


                {/* Recommendation */}
                <h3>
                    🧠 Hiring Recommendation
                </h3>

                <p
                    className={
                        candidate.match_score >= 80
                        ? "recommend excellent"
                        : candidate.match_score >= 50
                        ? "recommend average"
                        : "recommend poor"
                    }
                >
                    {recommendation}
                </p>
                <button
                    className="download-btn"
                    onClick={() => generatePDF(candidate)}
                >
                    ⬇ Download PDF Report
                </button>

            </div>
        </div>
    );
}

export default CandidateModal;