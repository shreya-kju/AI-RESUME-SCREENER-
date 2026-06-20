function CandidateTable({ candidates, openModal }) {

    if (!candidates || candidates.length === 0) {
        return null;
    }

    // Display medals for top candidates
    const getRankBadge = (index) => {
        if (index === 0) return "🥇";
        if (index === 1) return "🥈";
        if (index === 2) return "🥉";
        return index + 1;
    };


    return (
        <div className="card">

            <h2>📋 Candidate Ranking</h2>

            <table>

                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Resume</th>
                        <th>Match Score</th>
                        <th>Skills</th>
                        <th>Details</th>
                    </tr>
                </thead>


                <tbody>

                    {candidates.map((candidate, index) => (

                        <tr key={index}>

                            <td>
                                {getRankBadge(index)}
                            </td>


                            <td>
                                {candidate.filename}
                            </td>


                            <td>

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
                                    {candidate.match_score}%
                                </span>

                            </td>


                            <td>

                                <div className="skills-container">

                                    {
                                        candidate.candidate_skills &&
                                        candidate.candidate_skills.length > 0 ? (

                                            candidate.candidate_skills.map(
                                                (skill, i) => (
                                                    <span
                                                        key={i}
                                                        className="skill-tag"
                                                    >
                                                        {skill}
                                                    </span>
                                                )
                                            )

                                        ) : (

                                            "No skills found"

                                        )
                                    }

                                </div>

                            </td>


                            <td>

                                <button
                                    onClick={() => openModal(candidate)}
                                >
                                    View Details
                                </button>

                            </td>


                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}


export default CandidateTable;