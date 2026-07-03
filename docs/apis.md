# Project AERIS

# API Selection

## Objective

AERIS integrates reliable, scalable, and developer-friendly APIs to collect real-time environmental data, perform AI-driven analysis, and support government decision-making.

---

# Core APIs (MVP)

| Category | API | Purpose |
|----------|-----|---------|
| Air Quality | AQICN API | Real-time AQI & Pollutant Data |
| Weather | OpenWeather API | Weather Forecast & Meteorological Data |
| Geocoding | OpenStreetMap (Nominatim) | Location Search & Reverse Geocoding |
| Maps | Leaflet + OpenStreetMap | Interactive Maps & Visualization |

---

# Optional APIs

| Category | API | Purpose |
|----------|-----|---------|
| Satellite | NASA FIRMS | Fire & Thermal Hotspots |
| Earth Observation | Google Earth Engine | Environmental Analytics |
| Government | CPCB API (if available) | Official Air Quality Data |
| Traffic | Google Maps Traffic API | Congestion Analysis |

---

# MVP API Stack

The hackathon prototype will use:

- AQICN API
- OpenWeather API
- OpenStreetMap (Nominatim)
- Leaflet Maps

Optional:

- NASA FIRMS
- Google Earth Engine

---

# API Integration Flow

AQICN API
        │
OpenWeather API
        │
OpenStreetMap
        │
NASA FIRMS (Optional)
        │
        ▼
Backend (FastAPI)

        ▼
Decision Intelligence Engine

        ▼
REST API

        ▼
Frontend Dashboard

---

# Selection Criteria

- Free Tier Available
- Easy Integration
- Reliable Documentation
- Real-Time Data
- Production Friendly
- Scalable Architecture

---

# Limitations

- AQICN coverage depends on monitoring stations.
- OpenWeather forecasts may vary by location.
- Google Maps Traffic API has usage costs.
- Government APIs are not consistently available.
- Satellite APIs require additional preprocessing.

---

# Future Integrations

- CPCB Live API
- Smart City IoT Sensors
- Live Traffic APIs
- Weather Radar APIs
- Drone & Satellite Data
- Industrial Emission APIs

---

# Why This API Stack?

- Lightweight and hackathon-friendly
- Mostly free APIs
- Easy to integrate
- Supports real-time monitoring
- Scalable for production deployment
- Can be extended without major architecture changes