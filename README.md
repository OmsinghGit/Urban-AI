AERIS 🌍

AI-Powered Urban Air Quality Decision Intelligence Platform

AERIS transforms real-time air-quality and weather data into actionable environmental intelligence through monitoring, forecasting, policy simulation, city comparison, and automated reporting.

«From AQI data to actionable environmental decisions.»

---

✨ Features

- 📊 Live AQI Dashboard — AQI, PM2.5, weather, risk levels, trends & insights
- 🌦️ Forecast — Upcoming weather and environmental conditions
- 🧠 Policy Simulator — Model traffic, industrial, construction & green-cover interventions
- 🌍 Compare Cities — Compare environmental conditions across cities
- 📄 Environmental Reports — Generate structured reports with PDF export
- 🔎 City Search — Explore environmental conditions for different locations

---

🛠️ Tech Stack

Frontend
"React" · "TypeScript" · "Tailwind CSS" · "React Router" · "Axios"

Backend
"Python" · "FastAPI" · "Pydantic" · "HTTPX"

Data & APIs
"AQICN API" · "OpenWeather API"

Visualization & Maps
"Recharts" · "Leaflet"

Reporting
"ReportLab"

Architecture
"REST APIs" · "Service Layer" · "API Client Layer" · "React Hooks"

---

🏗️ Architecture

React + TypeScript
        │
        ▼
     FastAPI
        │
   ┌────┴─────┐
   │          │
 AQICN    OpenWeather
   │          │
   └────┬─────┘
        ▼
   Service Layer
        │
   ┌────┼──────────────┐
   │    │      │       │
Dashboard Forecast Policy Reports
        │
        ▼
  City Comparison

---

📁 Project Structure

AERIS/
│
├── backend/
│   └── app/
│       ├── api/
│       ├── clients/
│       ├── services/
│       ├── schemas/
│       ├── config/
│       ├── utils/
│       └── main.py
│
├── frontend/
│   └── src/
│       ├── components/
│       ├── hooks/
│       ├── layouts/
│       ├── pages/
│       ├── services/
│       └── AppRoutes.tsx
│
├── datasets/
├── docs/
└── README.md

---

🔄 How It Works

1. User selects a city.
2. React requests environmental data from the FastAPI backend.
3. Backend clients fetch AQI and weather data from external APIs.
4. Service layers transform and combine the data.
5. AERIS calculates risk levels and environmental insights.
6. Results are visualized through dashboards, forecasts, maps and reports.

---

🧠 Policy Simulation

AERIS allows users to experiment with environmental interventions:

Traffic Reduction
        +
Industrial Emission Control
        +
Construction Control
        +
Green Cover Increase
        ↓
Predicted AQI
        ↓
Improvement %
        ↓
Risk Level

The current simulator is designed for interpretable scenario analysis, not as a certified atmospheric prediction model.

---

🚀 Run Locally

Backend

cd backend
.\venv\Scripts\Activate.ps1
python -m uvicorn app.main:app --reload

API:

"http://127.0.0.1:8000"

Swagger:

"http://127.0.0.1:8000/docs"

Frontend

cd frontend
npm install
npm run dev

---

🔑 Environment Variables

Create:

"backend/.env"

AQICN_TOKEN=your_aqicn_token
OPENWEATHER_API_KEY=your_openweather_api_key

Never commit API keys or ".env" files.

---

🎯 Engineering Focus

AERIS demonstrates:

- Full-stack React + FastAPI architecture
- Real-time third-party API integration
- Strongly typed frontend-backend contracts
- Modular API, client and service layers
- Asynchronous data fetching with React Hooks
- Environmental data visualization
- Scenario-based policy simulation
- Automated PDF report generation

---

🔮 Roadmap

- [ ] LLM-powered environmental recommendations
- [ ] Historical AQI analytics
- [ ] Advanced pollution prediction
- [ ] Real-time pollution heatmaps
- [ ] Location-based alerts
- [ ] Persistent environmental data storage
- [ ] Production deployment & monitoring

---

🌱 Vision

AERIS aims to move urban air-quality analysis from:

“What is the AQI?”

to:

“What does it mean, what could happen next, and what can we do?”

---

Built with React, FastAPI & real-time environmental data.