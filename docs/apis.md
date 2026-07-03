# Project AERIS

# API Selection

## Objective

AERIS uses reliable, well-documented, and production-friendly APIs to provide real-time environmental intelligence for the hackathon MVP.

---

# Selected APIs

| Category | Selected API | Purpose |
|----------|--------------|---------|
| Air Quality | AQICN API | Real-time AQI & Pollution Data |
| Weather | OpenWeather API | Weather Forecast & Air Pollution |
| Maps | Google Maps Platform | Maps & Visualization |
| Traffic | Google Maps Platform | Traffic Density & Travel Time |
| Reverse Geocoding | Google Maps Platform | Location & Address Lookup |
| Satellite | Google Earth Engine / NASA | Environmental Analysis |
| Geospatial | OpenStreetMap / Geofabrik | Road Network & Spatial Data |

---

# MVP API Stack

The hackathon prototype will primarily use:

- AQICN API
- OpenWeather API
- Google Maps Platform
- OpenStreetMap

Optional integrations:

- Google Earth Engine
- NASA FIRMS
- AirNow API

---

# Why These APIs?

- Reliable documentation
- Easy integration
- Production-ready
- Large developer community
- Free tiers available
- Scalable for future deployment

---

# API Integration Flow

AQICN API
        │
OpenWeather API
        │
Google Maps API
        │
OpenStreetMap
        │
        ▼
Backend (FastAPI / Node.js)
        ▼
Decision Intelligence Engine
        ▼
Frontend Dashboard

---

# Limitations

- Google Maps usage becomes costly at scale.
- AQICN focuses mainly on AQI data.
- AirNow has stronger support for the US than global regions.
- Google Earth Engine is better suited for analytics than simple app integration.

---

# Future Integrations

- CPCB APIs
- Smart City IoT Sensors
- Live Traffic Feeds
- Municipal Open Data APIs
- Satellite-based Environmental APIs