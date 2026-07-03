# Project AERIS

# AI Model Selection

## Objective

AERIS uses a hybrid AI architecture where each task is handled by the most suitable AI/ML model instead of relying on a single model.

---

# AI Model Stack

| Task | Recommended Model |
|------|-------------------|
| AQI Forecasting | Temporal Fusion Transformer (TFT) / LightGBM |
| Time Series Forecasting | Chronos-2 / TimesFM |
| Pollution Source Attribution | XGBoost + SHAP |
| Decision Recommendations | Rule Engine + LLM |
| Policy Simulation | Agent-Based Models (ABM) + Causal Modeling |
| Explainability | SHAP |
| Natural Language Reports | Gemini / OpenAI GPT |

---

# AI Pipeline

Environmental Data

↓

Data Processing

↓

AQI Forecasting

↓

Root Cause Analysis

↓

Policy Simulation

↓

Recommendation Engine

↓

Explainable AI

↓

Decision Report

---

# Why Hybrid AI?

Different AI tasks require different models.

- Tree-based models perform best on structured environmental data.
- Time-series models handle forecasting.
- Causal models support policy simulation.
- LLMs generate explanations and reports.
- SHAP explains AI predictions.

---

# MVP AI Stack

For the hackathon prototype:

- LightGBM / XGBoost
- SHAP
- Gemini API (Report Generation)
- Rule-based Recommendation Engine

Advanced models such as TFT, Chronos-2, and ABM are planned for future versions.

---

# Future Improvements

- Graph Neural Networks (GNN)
- Reinforcement Learning
- Digital Twin Simulation
- Multi-Agent AI Systems
- Time-Series Foundation Models