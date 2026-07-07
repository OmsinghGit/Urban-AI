from app.services.dashboard_service import DashboardService


class CompareService:

    @staticmethod
    async def compare(city1: str, city2: str):

        first = await DashboardService.get_live_dashboard(city1)
        second = await DashboardService.get_live_dashboard(city2)

        return {
            "city1": first,
            "city2": second,
        }