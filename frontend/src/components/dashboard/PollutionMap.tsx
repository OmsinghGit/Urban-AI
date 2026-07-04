import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";

export default function PollutionMap() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">
        Live Pollution Map
      </h2>

      <MapContainer
        center={[28.6139, 77.209]}
        zoom={11}
        scrollWheelZoom={true}
        style={{
          height: "320px",
          width: "100%",
          borderRadius: "12px",
        }}
      >
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <CircleMarker
          center={[28.6139, 77.209]}
          radius={18}
          pathOptions={{
            color: "red",
            fillColor: "red",
            fillOpacity: 0.6,
          }}
        >
          <Popup>
            Delhi <br />
            AQI : 168
          </Popup>
        </CircleMarker>
      </MapContainer>
    </div>
  );
}