import React from "react";

function ReadinessDisplay({ entry }) {
  if (!entry) return null;

  const color =
    entry.status === "Green"
      ? "success"
      : entry.status === "Yellow"
      ? "warning"
      : "danger";

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h3>Today's Readiness</h3>
        <p>Score: {entry.score}</p>
        <span className={`badge bg-${color}`}>
          {entry.status}
        </span>
      </div>
    </div>
  );
}

export default ReadinessDisplay;