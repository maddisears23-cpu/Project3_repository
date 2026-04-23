import React, { useState } from "react";
import DailyCheckInForm from "./DailyCheckInForm";
import ReadinessDisplay from "./ReadinessDisplay";

function App() {
  const [entry, setEntry] = useState(null);

  return (
    <div className="container mt-5">
      <h1>Athlete Recovery Tracker</h1>

      <DailyCheckInForm onSubmitEntry={setEntry} />
      <ReadinessDisplay entry={entry} />
    </div>
  );
}

export default App;