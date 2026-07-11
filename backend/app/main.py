from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.dashboard import router as dashboard_router
from app.api.forecast import router as forecast_router
from app.api.policy import router as policy_router
from app.api.report import router as report_router
from app.api.pdf import router as pdf_router
from app.api.compare import router as compare_router

app = FastAPI(
    title="AERIS API",
    version="1.0.0",
    description="AI-Powered Urban Air Quality Decision Intelligence Platform",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5175",
    "http://localhost:5176",
    "http://localhost:5177",
],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API Routers
app.include_router(dashboard_router)

app.include_router(forecast_router)

app.include_router(policy_router)

app.include_router(report_router)

app.include_router(compare_router)

app.include_router(pdf_router)

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