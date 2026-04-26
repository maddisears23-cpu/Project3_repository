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

        <p className="fs-4 mb-1">Score: {entry.score}/100</p>

        <span className={`badge bg-${color} fs-6 mb-3`}>
          {entry.status}
        </span>

        <p className="mt-3">{entry.message}</p>
      </div>
    </div>
  );
}

export default ReadinessDisplay;