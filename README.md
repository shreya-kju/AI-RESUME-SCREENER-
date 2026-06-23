# 🤖 AI Resume Screening System

### Version 1.0

An AI-powered Applicant Tracking System (ATS) that intelligently analyzes resumes, compares them with job requirements, calculates compatibility scores, and ranks candidates using automated resume processing and skill-based evaluation.

---

## 📌 Project Objective

The objective of this project is to automate the traditional resume screening process. The system reduces manual effort for recruiters by analyzing candidate resumes, identifying relevant skills, comparing them with job descriptions, and providing intelligent ranking based on candidate suitability.

---

## 🌐 Live Demo & Links

- 🚀 **Live Application:**  
  https://ai-resume-screener-rosy.vercel.app/

- ⚙️ **Backend API (Render):**  
  https://ai-resume-screener-backend-ph5x.onrender.com

- 📂 **GitHub Repository:**  
  https://github.com/shreya-kju/AI-RESUME-SCREENER-

---

## 🚀 Features

### 📄 Resume Processing

- Upload and analyze multiple PDF resumes simultaneously
- Extract text from candidate resumes
- Identify technical skills automatically
- Compare candidate skills with job requirements

### 📊 ATS Candidate Analysis

- Calculate ATS compatibility scores
- Identify missing skills
- Rank candidates based on suitability
- Highlight the best matching candidate

### 📋 Recruiter Dashboard

- Clean and responsive user interface
- Candidate ranking table
- Detailed candidate profile modal
- Candidate summary generation
- Hiring recommendation system
- Score analytics visualization

### 📑 Report Generation

- Download detailed candidate evaluation reports as PDF

---

## 🛠️ Technology Stack

### Frontend

- React.js
- Vite
- JavaScript
- CSS

### Backend

- Python
- FastAPI
- Uvicorn

### Resume Processing

- PyPDF
- Skill extraction algorithm
- ATS scoring algorithm

### Development & Deployment Tools

- Git
- GitHub
- Vercel (Frontend Deployment)
- Render (Backend Deployment)
- jsPDF

---

## 📂 Project Structure

```
AI-Resume-Screener
│
├── backend/
│   ├── app.py
│   ├── resume_parser.py
│   ├── scorer.py
│   ├── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── generateReport.js
│   │
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/shreya-kju/AI-RESUME-SCREENER-.git
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the environment (Windows):

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the FastAPI server:

```bash
uvicorn app:app --reload
```

Backend runs at:

```
http://localhost:8000
```

---

### 3. Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install required packages:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 📊 System Workflow

1. Recruiter uploads one or more resume PDFs.
2. Recruiter enters the job description.
3. The system extracts text from each resume.
4. Candidate skills are identified.
5. Skills are compared with the required job skills.
6. ATS compatibility scores are calculated.
7. Candidates are ranked from highest to lowest score.
8. Recruiters can view detailed analysis and download PDF reports.

---





## 🔮 Future Enhancements

### Version 2.0

- User authentication and login system
- Database integration using PostgreSQL or MongoDB
- Resume analysis history
- Recruiter profile management
- User dashboard with saved reports

### Version 3.0

- Advanced AI-based semantic matching
- AI-generated interview questions
- Candidate strength and weakness analysis
- Resume improvement suggestions
- Advanced analytics dashboard
- Cloud storage integration

---

## 🎓 Academic Relevance

This project demonstrates concepts of:

- Artificial Intelligence fundamentals
- Resume data processing
- Full Stack Web Development
- REST API Development
- API integration
- Software Engineering principles
- Cloud deployment using Vercel and Render

---

## 👩‍💻 Developed By

**Shreya Mahato**

BCA Student | AI & Full Stack Development Enthusiast

---

## ⭐ Acknowledgement

This project was developed as an academic and learning project to explore how technology can improve modern recruitment processes through intelligent resume analysis and automated candidate evaluation.
