import React, { useState, useEffect } from "react";
import DailyCheckInForm from "./DailyCheckInForm";
import ReadinessDisplay from "./ReadinessDisplay";
import EntryHistory from "./EntryHistory";
import TrendChart from "./TrendChart";
import { db } from "./firebase";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

const getUserId = () => {
  let userId = localStorage.getItem("recoveryUserId");

  if (!userId) {
    userId = crypto.randomUUID();
    localStorage.setItem("recoveryUserId", userId);
  }

  return userId;
};

function App() {
  const [entry, setEntry] = useState(null);
  const [entries, setEntries] = useState([]);
  const userId = getUserId();

  useEffect(() => {
    const loadEntries = async () => {
      try {
        const q = query(
          collection(db, "checkIns"),
          where("userId", "==", userId)
        );

        const querySnapshot = await getDocs(q);

        const entriesArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setEntries(entriesArray);
        if (entriesArray.length > 0) {
        setEntry(entriesArray[0]);
        }

        console.log("Loaded entries:", entriesArray);
      } catch (error) {
        console.error("Error with entries:", error);
      }
    };

    loadEntries();
  }, [userId]);

  const handleSubmitEntry = async (newEntry) => {
    try {
      const entryWithUser = {
        ...newEntry,
        userId,
        createdAt: new Date(),
      };

      await addDoc(collection(db, "checkIns"), entryWithUser);

      setEntry(entryWithUser);
      setEntries((prev) => [entryWithUser, ...prev]);
    } catch (error) {
      console.error("Error saving entry:", error);
    }
  };

  return (
    <div
      className="App"
      style={{ minHeight: "100vh", backgroundColor: "#56A0D3", padding: "2rem 0" }}
    >
      <div className="container bg-white p-4 rounded shadow col-md-9 mx-auto">
        <div className="text-center mb-4">
          <h1 className="fw-bold">Recovery Tracker</h1>
          <p className="text-muted">
            Track recovery, readiness, and performance trends
          </p>
        </div>

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

        <div className="card shadow-sm p-3 mb-4">
          <div className="d-flex justify-content-center">
            <div style={{ width: "100%" }}>
              <EntryHistory entries={entries} />
            </div>
          </div>
        </div>

        <div className="card shadow-sm p-3">
          <TrendChart entries={[...entries].reverse()} />
        </div>
      </div>
    </div>
  );
}

export default App;