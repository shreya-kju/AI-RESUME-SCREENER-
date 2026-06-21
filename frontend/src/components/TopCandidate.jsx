function TopCandidate({ candidate }) {

    if (!candidate) {
        return null;
    }

    return (
        <div className="card top-candidate">

            <h2>🏆 Top Candidate</h2>

            <div className="candidate-info">

                <h3>
                    📄 {candidate.filename}
                </h3>

                <div className="candidate-score">

                    <div className="progress-container">
                        <div
                            className="progress-bar"
                            style={{
                                width: `${candidate.match_score}%`
                            }}
                        >
                        </div>
                    </div>

                    <span className="score-text">
                        {candidate.match_score}% Match
                    </span>

                </div>

            </div>


            <h4> Matched Skills</h4>


            <div className="skills-container">

                {
                    candidate.candidate_skills &&
                    candidate.candidate_skills.length > 0 ? (

                        candidate.candidate_skills.map((skill, index) => (
                            <span key={index} className="skill-tag">
                                {skill}
                            </span>
                        ))

                    ) : (

                        <p>No skills identified</p>

                    )
                }

            </div>

        </div>
    );
}

export default TopCandidate;