function DashboardSummary({ candidates }) {

    if (!candidates || candidates.length === 0) {
        return null;
    }

    const totalCandidates = candidates.length;

    const highestScore = Math.max(
        ...candidates.map(candidate => candidate.match_score)
    );

    const averageScore = (
        candidates.reduce(
            (sum, candidate) => sum + candidate.match_score,
            0
        ) / totalCandidates
    ).toFixed(1);


    return (
        <div className="summary-container">

            <div className="summary-card">
                <h3>👥 Total Candidates</h3>
                <p>{totalCandidates}</p>
            </div>


            <div className="summary-card">
                <h3>🏆 Highest Match</h3>
                <p>{highestScore}%</p>
            </div>


            <div className="summary-card">
                <h3>📈 Average Score</h3>
                <p>{averageScore}%</p>
            </div>

        </div>
    );
}

export default DashboardSummary;