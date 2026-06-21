import { useState } from "react";
import "./App.css";

import UploadForm from "./components/UploadForm";
import DashboardSummary from "./components/DashboardSummary";
import TopCandidate from "./components/TopCandidate";
import CandidateTable from "./components/CandidateTable";
import CandidateModal from "./components/CandidateModal";


function App() {

    // Stores API response data
    const [result, setResult] = useState(null);

    // Stores loading state
    const [loading, setLoading] = useState(false);

    // Stores selected candidate for modal
    const [selectedCandidate, setSelectedCandidate] = useState(null);


    return (
        <div className="app-container">

            {/* Navbar */}
            <header className="navbar">

                <div className="logo">
                     AI RESUME SCREENER
                </div>

                <div className="nav-text">
                    Smart Candidate Evaluation Platform
                </div>

            </header>


            {/* Upload Section */}
            <UploadForm
                setResult={setResult}
                setLoading={setLoading}
            />


            {/* Loading Message */}
            {loading && (
                <h2 className="loading">
                    Analyzing resumes... Please wait ⏳
                </h2>
            )}


            {/* Results Section */}
            {result && (
                <div>

                    {/* Dashboard Analytics */}
                    <DashboardSummary
                        candidates={result.ranking}
                    />


                    {/* Best Candidate */}
                    <TopCandidate
                        candidate={result.top_candidate}
                    />


                    {/* Candidate Ranking Table */}
                    <CandidateTable
                        candidates={result.ranking}
                        openModal={setSelectedCandidate}
                    />

                </div>
            )}


            {/* Candidate Details Modal */}
            {selectedCandidate && (
                <CandidateModal
                    candidate={selectedCandidate}
                    onClose={() => setSelectedCandidate(null)}
                />
            )}

        </div>
    );
}


export default App;