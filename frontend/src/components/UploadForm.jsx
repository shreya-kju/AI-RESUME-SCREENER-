 import { useState } from "react";
import axios from "axios";

function UploadForm({ setResult, setLoading }) {

    // Store selected PDF files
    const [files, setFiles] = useState([]);

    // Store job description
    const [jobDescription, setJobDescription] = useState("");


    // Handle multiple file selection
    const handleFileChange = (event) => {
        setFiles(Array.from(event.target.files));
    };


    // Submit data to FastAPI
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validation
        if (files.length === 0 || jobDescription.trim() === "") {
            alert("Please upload resumes and enter a job description.");
            return;
        }

        setLoading(true);
        setResult(null);

        try {
            const formData = new FormData();

            // Add all resumes
            files.forEach((file) => {
                formData.append("files", file);
            });

            // Add job description
            formData.append("job_description", jobDescription);


            // Send request to FastAPI
            const response = await axios.post(
                "https://ai-resume-screener-backend-ph5x.onrender.com/rank",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );


            // Save API response
            setResult(response.data);

        } catch (error) {

            console.error("Error analyzing resumes:", error);

            alert("Failed to analyze resumes. Check backend server.");

        } finally {

            setLoading(false);
        }
    };


    return (
        <form onSubmit={handleSubmit} className="card">

            <h2>📁 Upload Resumes</h2>


            <input
                type="file"
                accept=".pdf"
                multiple
                onChange={handleFileChange}
            />


            <p>
                Selected files: {files.length}
            </p>


            <label>
                Job Description
            </label>


            <textarea
                placeholder="Enter job requirements, skills, qualifications, and responsibilities..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
            />


            <button type="submit">
                 Analyze Candidates
            </button>

        </form>
    );
}


export default UploadForm;