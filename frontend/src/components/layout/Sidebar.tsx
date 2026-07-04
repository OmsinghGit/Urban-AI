export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white p-6">
      <h1 className="text-2xl font-bold">AERIS</h1>

      <nav className="mt-10 space-y-4">
        <p>📊 Dashboard</p>
        <p>📈 Forecast</p>
        <p>🧠 Policy Simulator</p>
        <p>📄 Reports</p>
        <p>⚙️ Settings</p>
      </nav>
    </aside>
  );
}

