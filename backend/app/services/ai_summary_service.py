class AISummaryService:

    @staticmethod
    def generate(
        aqi: int,
        pm25: float,
        temperature: int,
        humidity: int,
        condition: str,
        risk: str,
    ):

        return (
            f"The current AQI is {aqi}, which falls under the "
            f"'{risk}' category. "
            f"PM2.5 concentration is {pm25} µg/m³. "
            f"The current weather is {condition.lower()} with a "
            f"temperature of {temperature}°C and humidity of "
            f"{humidity}%. "
            f"People with respiratory conditions should limit "
            f"outdoor exposure when AQI remains high."
        )