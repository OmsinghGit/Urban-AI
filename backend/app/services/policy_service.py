class PolicyService:

    @staticmethod
    def predict(
        current_aqi: int,
        traffic: int,
        industry: int,
        construction: int,
        greenery: int,
    ):

        reduction = (
            traffic * 0.35
            + industry * 0.40
            + construction * 0.30
            + greenery * 0.25
        )

        predicted = max(
            20,
            round(current_aqi - reduction),
        )

        improvement = round(
            ((current_aqi - predicted) / current_aqi) * 100,
            1,
        )

        if predicted <= 50:
            risk = "Good"
        elif predicted <= 100:
            risk = "Moderate"
        elif predicted <= 150:
            risk = "Unhealthy for Sensitive"
        elif predicted <= 200:
            risk = "Unhealthy"
        elif predicted <= 300:
            risk = "Very Unhealthy"
        else:
            risk = "Hazardous"

        return {
            "currentAQI": current_aqi,
            "predictedAQI": predicted,
            "improvement": improvement,
            "risk": risk,
        }