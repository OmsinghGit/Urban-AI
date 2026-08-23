AERIS 🌍

AI-Powered Urban Air Quality Decision Intelligence Platform

AERIS is a full-stack environmental intelligence platform that transforms real-time air-quality and weather data into actionable insights through monitoring, forecasting, policy simulation, city comparison, and environmental reporting.

«From AQI data to actionable environmental decisions.»

---

✨ Features

- 📊 Live AQI Dashboard — AQI, PM2.5, weather, risk levels, trends & insights
- 🌦️ Forecast — Weather and upcoming environmental conditions
- 🧠 Policy Simulator — Simulate traffic, industrial, construction & green-cover interventions
- 🌍 Compare Cities — Compare environmental conditions across cities
- 📄 Reports & PDF Export — Generate structured environmental reports
- 🔎 City Search — Explore conditions for different locations

---

🛠️ Tech Stack

Layer| Technologies
Frontend| React, TypeScript, Tailwind CSS, React Router, Axios
Backend| Python, FastAPI, Pydantic, HTTPX
Data & APIs| AQICN API, OpenWeather API
Visualization| Recharts, Leaflet
Reporting| ReportLab
Architecture| REST APIs, Service Layer, API Client Layer, React Hooks

---

🏗️ Architecture

React + TypeScript
       │
       ▼
   FastAPI API
       │
       ├── AQICN ───────► AQI / PM2.5
       │
       ├── OpenWeather ─► Weather / Forecast
       │
       ▼
 Service Layer
       │
       ├── Dashboard
       ├── Forecast
       ├── Policy Simulation
       ├── City Comparison
       └── Reporting / PDF

---

📁 Structure

AERIS/
├── backend/
│   └── app/
│       ├── api/
│       ├── clients/
│       ├── services/
│       ├── schemas/
│       └── main.py
│
├── frontend/
│   └── src/
│       ├── components/
│       ├── hooks/
│       ├── pages/
│       ├── services/
│       └── layouts/
│
├── datasets/
├── docs/
└── README.md

---

🚀 Run Locally

Backend

cd backend
.\venv\Scripts\Activate.ps1
python -m uvicorn app.main:app --reload

API:

http://127.0.0.1:8000

Swagger:

http://127.0.0.1:8000/docs

Frontend

cd frontend
npm install
npm run dev

---

🔑 Environment Variables

Create "backend/.env":

AQICN_TOKEN=your_aqicn_token
OPENWEATHER_API_KEY=your_openweather_api_key

Keep API credentials private and never commit ".env" files.

---

🧠 Policy Simulation

AERIS lets users model environmental interventions and observe their estimated impact:

Traffic Reduction
        +
Industrial Control
        +
Construction Control
        +
Green Cover
        ↓
Predicted AQI
        ↓
Improvement & Risk Level

The current simulator is designed for interpretable scenario analysis, not as a certified atmospheric prediction model.

---

🔮 Roadmap

- [ ] LLM-powered environmental recommendations
- [ ] Historical AQI analytics
- [ ] Advanced pollution prediction
- [ ] Real-time pollution heatmaps
- [ ] Location-based alerts
- [ ] Production deployment & monitoring

---

🎯 Vision

AERIS aims to move urban air-quality analysis from:

“What is the AQI?”

to

“What does it mean, what could happen next, and what can we do?”

---

Built with React, FastAPI & real-time environmental data.