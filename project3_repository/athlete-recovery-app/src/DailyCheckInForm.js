import React, { useState } from "react";
import {
  calculateReadinessScore,
  getReadinessStatus,
} from "./readinessCalculator";

function DailyCheckInForm({ onSubmitEntry }) {
  const [formData, setFormData] = useState({
    sleep: 3,
    soreness: 3,
    energy: 3,
    hydration: 3,
    mood: 3,
    intensity: 3,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const score = calculateReadinessScore(formData);
    const status = getReadinessStatus(score);

    const entry = {
      ...formData,
      score,
      status,
      date: new Date().toISOString(),
    };

    onSubmitEntry(entry);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formData).map((field) => (
        <div key={field} className="mb-3">
          <label className="form-label text-capitalize">{field}</label>
          <select
            className="form-select"
            name={field}
            value={formData[field]}
            onChange={handleChange}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
      ))}

      <button type="submit" className="btn btn-primary">
        Submit Check-In
      </button>
    </form>
  );
}

export default DailyCheckInForm;