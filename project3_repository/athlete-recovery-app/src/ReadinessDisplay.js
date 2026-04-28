import React from "react";

function ReadinessDisplay({ entry }) {
  if (!entry) return null;

  const bgColor =
    entry.status === "Green"
      ? "#4CAF50"
      : entry.status === "Yellow"
      ? "#FFC107"
      : "#DC3545";

  const textColor = entry.status === "Yellow" ? "#333" : "#fff";

  const emoji =
    entry.status === "Green"
      ? "✅"
      : entry.status === "Yellow"
      ? "⚠️"
      : "🚨";

  return (
    <div
      className="card mt-4"
      style={{ backgroundColor: bgColor, color: textColor, border: "none" }}
    >
      <div className="card-body">
        <h3>Today's Readiness</h3>

        <p className="fs-4 mb-1">Score: {entry.score}/100</p>

        <p style={{ fontSize: "2rem" }}>{emoji}</p>

        <p className="mt-3">{entry.message}</p>
      </div>
    </div>
  );
}

export default ReadinessDisplay;