from fastapi import APIRouter

from app.services.policy_service import PolicyService

router = APIRouter(
    prefix="/policy",
    tags=["Policy Simulator"],
)


@router.post("/predict")
async def predict(payload: dict):

    return PolicyService.predict(
        current_aqi=payload["currentAQI"],
        traffic=payload["traffic"],
        industry=payload["industry"],
        construction=payload["construction"],
        greenery=payload["greenery"],
    )