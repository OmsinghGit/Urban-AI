from openai import AsyncOpenAI

from app.config.settings import NVIDIA_API_KEY


client = AsyncOpenAI(
    api_key=NVIDIA_API_KEY,
    base_url="https://integrate.api.nvidia.com/v1",
)


class AIService:

    @staticmethod
    async def generate_summary(
        city: str,
        aqi: int,
        temperature: int,
        risk: str,
    ):

        prompt = f"""
You are an environmental expert.

City : {city}

AQI : {aqi}

Temperature : {temperature}

Risk : {risk}

Write:

1. Air quality analysis
2. Health advice
3. Government recommendation
4. Citizen recommendation

Maximum 120 words.
"""

        response = await client.chat.completions.create(
            model="nvidia/llama-3.1-nemotron-nano-8b-v1",
            messages=[
                {
                    "role": "user",
                    "content": prompt,
                }
            ],
            temperature=0.3,
        )

        return response.choices[0].message.content