from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="SkillProof AI Service",
    description="AI-powered interview and code evaluation service",
    version="0.1.0",
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("CORS_ORIGINS", "http://localhost:3000,http://localhost:4000").split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {
        "service": "skillproof-ai-service",
        "status": "running",
        "version": "0.1.0"
    }


@app.get("/health")
async def health():
    return {
        "status": "ok",
        "service": "skillproof-ai-service"
    }


# Placeholder endpoints - will be implemented later
@app.post("/api/interviews/generate-question")
async def generate_question():
    """Generate coding question for interview"""
    return {"message": "Question generation endpoint - to be implemented"}


@app.post("/api/interviews/evaluate")
async def evaluate_code():
    """Evaluate submitted code"""
    return {"message": "Code evaluation endpoint - to be implemented"}


@app.post("/api/interviews/execute")
async def execute_code():
    """Execute code in sandbox"""
    return {"message": "Code execution endpoint - to be implemented"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

