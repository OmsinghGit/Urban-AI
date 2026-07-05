import requests

from app.config.settings import AQICN_API_KEY


class AQIService:

    BASE_URL = "https://api.waqi.info/feed"

    @staticmethod
    def get_city(city: str):

        pass