import React from "react";

function EntryHistory({ entries }) {
  if (entries.length === 0) return null;

  const getBadgeClass = (status) => {
    if (status === "Green") return "success";
    if (status === "Yellow") return "warning";
    return "danger";
  };

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h3>Entry History</h3>

        <table className="table table-bordered table-hover mt-3">
          <thead className="table-light">
            <tr>
              <th>Date</th>
              <th>Score</th>
              <th>Status</th>
              <th>Sleep</th>
              <th>Soreness</th>
              <th>Energy</th>
              <th>Hydration</th>
              <th>Mood</th>
              <th>Intensity</th>
            </tr>
          </thead>

          <tbody>
            {entries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>
                  <strong>{entry.score}/100</strong>
                </td>
                <td>
                  <span className={`badge bg-${getBadgeClass(entry.status)}`}>
                    {entry.status}
                  </span>
                </td>
                <td>{entry.sleep}</td>
                <td>{entry.soreness}</td>
                <td>{entry.energy}</td>
                <td>{entry.hydration}</td>
                <td>{entry.mood}</td>
                <td>{entry.intensity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EntryHistory;