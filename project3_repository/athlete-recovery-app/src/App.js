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
    <div className="container mt-5">
      <h1>Athlete Recovery Tracker</h1>
      <p className="text-muted">
        Track daily recovery, monitor readiness, and spot fatigue trends.
      </p>

      <DailyCheckInForm onSubmitEntry={handleSubmitEntry} />

      <ReadinessDisplay entry={entry} />

      <EntryHistory entries={entries} />

      <TrendChart entries={[...entries].reverse()} />
    </div>
  );
}

export default App;