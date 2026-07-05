from fastapi import APIRouter

from app.clients.aqicn_client import AQICNClient

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/live")
async def get_live_dashboard():

    data = await AQICNClient.get_city("Delhi")

    return data