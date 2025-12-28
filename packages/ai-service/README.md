# SkillProof AI Service

Python/FastAPI service for AI-powered coding interviews and code evaluation.

## Setup

1. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Run development server**
   ```bash
   uvicorn main:app --reload
   ```

   Or use the monorepo script:
   ```bash
   npm run dev:ai
   ```

## Endpoints

- `GET /` - Service info
- `GET /health` - Health check
- `POST /api/interviews/generate-question` - Generate coding question
- `POST /api/interviews/evaluate` - Evaluate code submission
- `POST /api/interviews/execute` - Execute code in sandbox

## Requirements

- Python >= 3.10
- Docker (for code execution sandbox)
- Redis (optional, for caching)

