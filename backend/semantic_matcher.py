from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity


# Load AI model once when the server starts
model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)


def calculate_semantic_score(
    resume_text,
    job_description
):
    """
    Calculate AI semantic similarity
    between resume and job description
    """

    # Convert text into embeddings
    resume_embedding = model.encode(
        resume_text
    )

    job_embedding = model.encode(
        job_description
    )

    # Calculate similarity
    similarity = cosine_similarity(
        [resume_embedding],
        [job_embedding]
    )[0][0]

    # Convert similarity into percentage
    score = float(similarity * 100)

    return round(score, 2)