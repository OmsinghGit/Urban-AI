# Project AERIS

# AI Model Selection

## Objective

AERIS follows a hybrid AI architecture where each component is optimized for a specific task. Instead of relying on a single AI model, forecasting, explainability, recommendations, and report generation are handled independently.

---

# AI Model Stack

| Task | Model / Technique |
|------|-------------------|
| AQI Forecasting | XGBoost / LightGBM |
| Time-Series Analysis | LightGBM + Historical Trend Analysis |
| Pollution Source Attribution | XGBoost + SHAP |
| Hotspot Detection | Rule Engine + Geospatial Analysis |
| AI Recommendations | Rule-Based Decision Engine + Gemini API |
| Report Generation | Gemini API |
| Explainable AI | SHAP |
| Data Visualization | Plotly / Leaflet Maps |

---

# AI Pipeline

Environmental APIs & Datasets

↓

Data Cleaning & Preprocessing

↓

Feature Engineering

↓

AQI Forecasting

↓

Pollution Source Attribution

↓

Hotspot Detection

↓

Decision Recommendation Engine

↓

Explainable AI (SHAP)

↓

Government Decision Report

---

# Why Hybrid AI?

Different AI tasks require different techniques.

- XGBoost/LightGBM provide accurate AQI prediction on structured data.
- SHAP explains why a prediction was made.
- Rule-based logic ensures reliable recommendations.
- Gemini converts technical outputs into human-readable reports.
- Modular architecture allows future model upgrades.

---

# MVP AI Stack (Hackathon)

- XGBoost
- LightGBM
- SHAP
- Gemini API
- Rule-Based Decision Engine

This stack is lightweight, explainable, easy to implement, and suitable for a 10-day hackathon prototype.

---

# Future AI Roadmap

- Temporal Fusion Transformer (TFT)
- Chronos-2 / TimesFM
- Graph Neural Networks (GNN)
- Agent-Based Simulation
- Reinforcement Learning
- Multi-Agent AI Systems
- Digital Twin Integration

---

# Why This Stack?

- Fast to develop
- Easy to explain to judges
- Uses proven ML techniques
- Supports Explainable AI
- Easily scalable for future research
- Production-friendly architecture