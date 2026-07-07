from fastapi import APIRouter, Query
from fastapi.responses import StreamingResponse

from app.services.dashboard_service import DashboardService
from app.utils.pdf_generator import PDFGenerator

router = APIRouter(
    prefix="/pdf",
    tags=["PDF"],
)


@router.get("/")
async def download_pdf(
    city: str = Query(default="Delhi"),
):

    report = await DashboardService.get_live_dashboard(city)

    pdf = PDFGenerator.generate(report)

    return StreamingResponse(
        pdf,
        media_type="application/pdf",
        headers={
            "Content-Disposition":
            "attachment; filename=AERIS_Report.pdf"
        },
    )