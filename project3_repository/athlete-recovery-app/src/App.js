import React, { useState } from "react";
import DailyCheckInForm from "./DailyCheckInForm";
import ReadinessDisplay from "./ReadinessDisplay";
import EntryHistory from "./EntryHistory";
import TrendChart from "./TrendChart";

function App() {
  const [entry, setEntry] = useState(null);
  const [entries, setEntries] = useState([]);

  const handleSubmitEntry = (newEntry) => {
    setEntry(newEntry);
    setEntries([newEntry, ...entries]);
  };

  return (
    <div
      className="App"
      style={{ minHeight: "100vh", backgroundColor: "#56A0D3", padding: "2rem 0" }}
    >
      <div className="container bg-white p-4 rounded shadow col-md-9 mx-auto">

        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="fw-bold">Athlete Recovery Tracker</h1>
          <p className="text-muted">
            Track recovery, readiness, and performance trends
          </p>
        </div>

        {/* Form + Readiness */}
        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <div className="card shadow-sm p-3">
              <DailyCheckInForm onSubmitEntry={handleSubmitEntry} />
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="card shadow-sm p-3 text-center">
              <ReadinessDisplay entry={entry} />
            </div>
          </div>
        </div>

        {/* History */}
        <div className="card shadow-sm p-3 mb-4">
          <div className="d-flex justify-content-center">
            <div style={{ width: "100%" }}>
              <EntryHistory entries={entries} />
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="card shadow-sm p-3">
          <TrendChart entries={[...entries].reverse()} />
        </div>

      </div>
    </div>
  );
}

export default App;