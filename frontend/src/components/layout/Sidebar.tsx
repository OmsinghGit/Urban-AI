import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block rounded-lg px-3 py-2 transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-slate-300 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <aside className="min-h-screen w-64 bg-slate-900 p-6 text-white">
      <h1 className="mb-10 text-3xl font-bold">AERIS</h1>

      <nav className="space-y-2">

        <NavLink to="/" className={linkClass}>
          📊 Dashboard
        </NavLink>

        <NavLink to="/forecast" className={linkClass}>
          📈 Forecast
        </NavLink>

        <NavLink to="/policy" className={linkClass}>
          🧠 Policy Simulator
        </NavLink>

        <NavLink to="/reports" className={linkClass}>
          📄 Reports
        </NavLink>

        <NavLink to="/compare" className={linkClass}>
          🌍 Compare Cities
        </NavLink>

        <NavLink to="/settings" className={linkClass}>
          ⚙️ Settings
        </NavLink>

      </nav>
    </aside>
  );
}