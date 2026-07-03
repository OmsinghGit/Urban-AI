# Project AERIS

# Dataset Selection

## Objective

AERIS combines trusted public datasets to enable real-time monitoring, AI forecasting, hotspot detection, and decision support for urban air quality management.

---

# Core Datasets (MVP)

| Dataset | Purpose |
|---------|---------|
| OpenAQ | AQI & Pollutant Data (PM2.5, PM10, NO₂, SO₂, CO, O₃) |
| OpenWeather / Open-Meteo | Weather & Meteorological Data |
| OpenStreetMap (OSM) | Roads, Locations & Geospatial Mapping |
| WorldPop | Population Density & Exposure Analysis |

---

# Supporting Datasets (Optional)

| Dataset | Purpose |
|---------|---------|
| NASA FIRMS | Fire & Thermal Hotspot Detection |
| Copernicus GHSL | Urban Land Cover & Green Spaces |
| Global Power Plant Database | Industrial Emission Context |
| Municipal Open Data | Construction & Local Activities |

---

# Dataset Usage

| AI Feature | Required Dataset |
|------------|------------------|
| AQI Forecasting | OpenAQ + Weather |
| Hotspot Detection | OpenAQ + OSM |
| Root Cause Analysis | AQI + Weather + Satellite |
| Exposure Analysis | AQI + WorldPop |
| Decision Support | Combined Multi-Source Data |

---

# MVP Dataset Stack

For the hackathon prototype:

- OpenAQ
- OpenWeather API
- OpenStreetMap
- WorldPop

These datasets are sufficient to demonstrate the complete AI workflow.

---

# Selection Criteria

- Publicly Available
- Frequently Updated
- Easy API Integration
- Reliable Data Source
- Scalable for Production

---

# Limitations

- Live traffic and construction datasets are not consistently available.
- Industrial emissions are estimated using proxy datasets.
- Some geospatial datasets require preprocessing.

---

# Future Expansion

- CPCB Live Monitoring Stations
- Smart City IoT Sensors
- Live Traffic Data
- Satellite Air Quality Products
- Industrial Emission APIs