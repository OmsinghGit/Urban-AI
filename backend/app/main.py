from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.dashboard import router as dashboard_router

app = FastAPI(
    title="AERIS API",
    version="1.0.0",
    description="AI-Powered Urban Air Quality Decision Intelligence Platform",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API Routers
app.include_router(dashboard_router)


@app.get("/")
def home():
    return {
        "message": "Welcome to AERIS API 🚀"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "AERIS Backend"
    }