def normalize_skill(skill):
    """
    Converts different forms of a skill into a standard name
    """

    skill_map = {
        "javascript": ["javascript", "js", "ecmascript"],
        "python": ["python", "py"],
        "artificial intelligence": [
            "artificial intelligence",
            "ai"
        ],
        "machine learning": [
            "machine learning",
            "ml"
        ],
        "deep learning": [
            "deep learning",
            "neural networks"
        ],
        "react": [
            "react",
            "reactjs",
            "react.js"
        ],
        "node.js": [
            "node.js",
            "nodejs"
        ],
        "postgresql": [
            "postgresql",
            "postgres"
        ],
        "github": [
            "github",
            "git hub"
        ],
        "aws": [
            "aws",
            "amazon web services"
        ],
        "sql": [
            "sql",
            "structured query language"
        ],
        "c++": [
            "c++",
            "cpp"
        ]
    }

    skill = skill.lower()

    for standard, variants in skill_map.items():
        if skill in variants:
            return standard

    return skill


def extract_skills(text):
    """
    Extracts skills from resume or job description
    """

    skills_database = [
        "python",
        "java",
        "javascript",
        "js",
        "react",
        "reactjs",
        "node.js",
        "nodejs",
        "html",
        "css",
        "sql",
        "mysql",
        "postgresql",
        "postgres",
        "mongodb",
        "django",
        "flask",
        "fastapi",
        "machine learning",
        "ml",
        "deep learning",
        "artificial intelligence",
        "ai",
        "data analysis",
        "data science",
        "pandas",
        "numpy",
        "tensorflow",
        "pytorch",
        "git",
        "github",
        "docker",
        "kubernetes",
        "aws",
        "amazon web services",
        "azure",
        "cloud computing",
        "linux",
        "c++",
        "cpp",
        "c",
        "php",
        "spring boot"
    ]

    text = text.lower()

    found_skills = []

    for skill in skills_database:
        if skill in text:
            normalized = normalize_skill(skill)

            if normalized not in found_skills:
                found_skills.append(normalized)

    return found_skills


def calculate_match_score(candidate_skills, required_skills):
    """
    Calculates percentage match between candidate and job requirements
    """

    if len(required_skills) == 0:
        return 0

    candidate_set = set(
        normalize_skill(skill)
        for skill in candidate_skills
    )

    required_set = set(
        normalize_skill(skill)
        for skill in required_skills
    )

    matching_skills = candidate_set.intersection(required_set)

    score = (
        len(matching_skills) /
        len(required_set)
    ) * 100

    return round(score, 2)


def rank_candidates(candidates):
    """
    Sort candidates from highest score to lowest
    """

    return sorted(
        candidates,
        key=lambda candidate: candidate["match_score"],
        reverse=True
    )