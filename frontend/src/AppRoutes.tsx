import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import Forecast from "./pages/Forecast";
import PolicySimulator from "./pages/PolicySimulator";
import Reports from "./pages/Reports";
import CompareCities from "./pages/CompareCities";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        <Route path="/" element={<Dashboard />} />

        <Route path="/forecast" element={<Forecast />} />

        <Route
          path="/policy"
          element={<PolicySimulator />}
        />

        <Route
          path="/reports"
          element={<Reports />}
        />

        <Route
          path="/compare"
          element={<CompareCities />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

      </Route>

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}