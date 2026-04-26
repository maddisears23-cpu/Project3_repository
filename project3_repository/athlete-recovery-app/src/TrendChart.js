import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function TrendChart({ entries }) {
  if (entries.length < 2) return null;

  const chartData = entries.map((entry, index) => ({
    name: `Entry ${index + 1}`,
    score: entry.score,
  }));

  return (
    <div className="card mt-4 mb-5">
      <div className="card-body">
        <h3>Readiness Trend</h3>

        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="score" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default TrendChart;