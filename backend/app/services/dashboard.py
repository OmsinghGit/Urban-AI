from pydantic import BaseModel


class DashboardStat(BaseModel):
    title: str
    value: str
    subtitle: str


class WeatherInfo(BaseModel):
    temperature: int
    humidity: int
    wind: float
    condition: str


class AQITrend(BaseModel):
    time: str
    aqi: int


class DashboardResponse(BaseModel):
    stats: list[DashboardStat]
    city: str
    weather: WeatherInfo
    aqiTrend: list[AQITrend]