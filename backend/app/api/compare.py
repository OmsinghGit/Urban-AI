from fastapi import APIRouter, Query

from app.services.compare_service import CompareService

router = APIRouter(
    prefix="/compare",
    tags=["Compare"],
)


@router.get("/")
async def compare(
    city1: str = Query(...),
    city2: str = Query(...),
):
    return await CompareService.compare(
        city1,
        city2,
    )