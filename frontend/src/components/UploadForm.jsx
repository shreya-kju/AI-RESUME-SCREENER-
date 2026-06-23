 import { useState } from "react";
import axios from "axios";

function UploadForm({ setResult, setLoading }) {

    const [files, setFiles] = useState([]);
    const [jobDescription, setJobDescription] = useState("");

    const handleFileChange = (event) => {
        setFiles(Array.from(event.target.files));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (files.length === 0 || jobDescription.trim() === "") {
            alert("Please upload resumes and enter a job description.");
            return;
        }

        setLoading(true);
        setResult(null);

        try {

            const formData = new FormData();

            files.forEach((file) => {
                formData.append("files", file);
            });

            formData.append(
                "job_description",
                jobDescription
            );

            const response = await axios.post(
                "https://ai-resume-screener-backend-ph5x.onrender.com/rank",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            setResult(response.data);

        } catch (error) {

            console.error("Full Error:", error);

            if (error.response) {

                alert(
                    `Server Error:\n${JSON.stringify(
                        error.response.data,
                        null,
                        2
                    )}`
                );

            } else if (error.request) {

                alert(
                    "Request was sent but no response was received from the server."
                );

            } else {

                alert(
                    `Error: ${error.message}`
                );

            }

        } finally {

            setLoading(false);

        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="card"
        >

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
                onChange={(e) =>
                    setJobDescription(e.target.value)
                }
            />

            <button type="submit">
                 Analyze Candidates
            </button>

        </form>
    );
}

export default UploadForm;
