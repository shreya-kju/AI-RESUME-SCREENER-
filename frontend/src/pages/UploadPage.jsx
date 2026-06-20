import { useState } from "react";
import api from "../services/api";

function UploadPage() {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();

    formData.append("file", resume);
    formData.append("job_description", jobDescription);

    try {
      const response = await api.post(
        "/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>AI Resume Screening System</h1>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) =>
          setResume(e.target.files[0])
        }
      />

      <br /><br />

      <textarea
        rows="10"
        cols="70"
        placeholder="Paste Job Description"
        value={jobDescription}
        onChange={(e) =>
          setJobDescription(e.target.value)
        }
      />

      <br /><br />

      <button onClick={handleUpload}>
        Upload & Analyze
      </button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h2>Results</h2>

          <p>
            <strong>Match Score:</strong>
            {" "}
            {result.match_score}%
          </p>

          <p>
            <strong>Candidate Skills:</strong>
            {" "}
            {result.candidate_skills.join(", ")}
          </p>
        </div>
      )}
    </div>
  );
}

export default UploadPage;