import React, { useState, useEffect } from "react";
import { db } from './firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

import {
  calculateReadinessScore,
  getReadinessStatus,
  getRecoveryMessage,
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

  const [entries, setEntries] = useState([]);

  const fieldDescriptions = {
    sleep: "How well did you sleep last night? (1 = very poor, 5 = excellent)",
    soreness: "How sore does your body feel today? (1 = none, 5 = extreme)",
    energy: "How energized do you feel right now? (1 = very low, 5 = excellent)",
    hydration: "How hydrated do you feel today? (1 = dehydrated, 5 = excellent)",
    mood: "How do you feel mentally today? (1 = poor, 5 = excellent)",
    intensity: "How demanding was your recent workload? (1 = light, 5 = very intense)",
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const score = calculateReadinessScore(formData);
    const status = getReadinessStatus(score);

    const entry = {
      ...formData,
      score,
      status,
      message: getRecoveryMessage(score),
      date: new Date().toLocaleString(),
    };
    onSubmitEntry(entry);
    try{
      const docRef = await addDoc(collection(db, 'checkIns'), entry)
      console.log("Document written with ID: ", docRef.id)
    } catch(e){
      console.error("Error with data: ", e)
    }
  };

  const fetchEntries = async () => {
    const querySnapshot = await getDocs(collection(db, 'checkIns'));
    const entriesArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data(),}))
    setEntries(entriesArray);
  }

  useEffect(() => {
    fetchEntries()
  }, [])

  return (
    <div className="card shadow p-4">
      <h3 className="text-center mb-4">Daily Check-In</h3>

      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((field) => (
          <div key={field} className="mb-4">
            <label className ="form-label fw-semibold">
              {fieldDescriptions[field]}: {formData[field]}
            </label>
  
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
    </div>
  );
}

export default DailyCheckInForm;