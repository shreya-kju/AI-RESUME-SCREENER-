# 🤖 AI Resume Screening System

### Version 1.0

An AI-powered Applicant Tracking System (ATS) that intelligently analyzes resumes, compares them with job requirements, calculates compatibility scores, and ranks candidates using Artificial Intelligence and Natural Language Processing.

---

## 📌 Project Objective

The objective of this project is to automate the traditional resume screening process using AI. The system reduces manual effort for recruiters by analyzing candidate resumes, identifying relevant skills, comparing them with job descriptions, and providing an intelligent ranking based on suitability.

---

## 🚀 Features

### 📄 Resume Processing

* Upload and analyze multiple resumes simultaneously
* Extract text from PDF resumes
* Identify technical skills automatically

### 🧠 AI-Based Candidate Analysis

* Semantic resume-job description matching
* ATS score calculation
* Skill match analysis
* Missing skills identification
* Candidate ranking based on suitability

### 📊 Recruiter Dashboard

* Top candidate highlighting
* Candidate ranking table
* Detailed candidate profile popup
* AI-generated candidate summary
* Hiring recommendation system
* Score analytics visualization

### 📑 Report Generation

* Download detailed candidate evaluation reports as PDF

---

## 🛠️ Technology Stack

### Frontend

* React.js
* Vite
* JavaScript
* CSS

### Backend

* Python
* FastAPI
* Uvicorn

### Artificial Intelligence & NLP

* Sentence Transformers
* Hugging Face Transformers
* Natural Language Processing (NLP)

### Development Tools

* Git
* GitHub
* jsPDF

---

## 📂 Project Structure

```
AI-Resume-Screener
│
├── backend
│   ├── app.py
│   ├── resume_parser.py
│   ├── scorer.py
│   └── requirements.txt
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── App.jsx
│   │   └── App.css
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

---

### 2. Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the environment:

**Windows**

```bash
venv\Scripts\activate
```

Install required dependencies:

```bash
pip install -r requirements.txt
```

Run the FastAPI server:

```bash
uvicorn app:app --reload
```

The backend will run at:

```
http://localhost:8000
```

---

### 3. Frontend Setup

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm run dev
```

The frontend will run at:

```
http://localhost:5173
```

---

## 📊 System Workflow

1. Recruiter uploads one or multiple resume files.
2. Recruiter enters the job description.
3. The system extracts text and identifies candidate skills.
4. AI compares resume content with job requirements.
5. Skill matching and semantic similarity scores are calculated.
6. A final ATS score is generated.
7. Candidates are ranked from most suitable to least suitable.
8. Recruiters can view detailed analysis and download PDF reports.

---

## 📸 Application Screenshots

Screenshots of the application interface will be added here:

* Home Page
* Resume Upload Interface
* Candidate Ranking Dashboard
* Candidate Details Modal
* PDF Evaluation Report

---

## 🔮 Future Enhancements

The following improvements can be added in future versions:

### Version 2.0

* User authentication and login system
* Database integration using SQLite/PostgreSQL
* Resume analysis history
* Recruiter profile management

### Version 3.0

* AI-generated interview questions
* Candidate strengths and weakness analysis
* Resume improvement suggestions
* Advanced analytics dashboard
* Cloud deployment

---

## 🎓 Academic Relevance

This project demonstrates concepts of:

* Artificial Intelligence
* Natural Language Processing
* Full Stack Web Development
* REST API Development
* Database Integration (future scope)
* Software Engineering Principles

---

## 👩‍💻 Developed By

**Shreya Mahato**

BCA Student | AI & Full Stack Development Enthusiast

---

## ⭐ Acknowledgement

This project was developed as a learning and academic project to explore how Artificial Intelligence can improve modern recruitment and candidate evaluation systems.
