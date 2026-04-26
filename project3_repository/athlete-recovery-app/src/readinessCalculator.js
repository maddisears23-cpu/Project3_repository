export const calculateReadinessScore = ({
  sleep,
  soreness,
  energy,
  hydration,
  mood,
  intensity,
}) => {
  const weightedScore =
    sleep * 0.2 +
    energy * 0.2 +
    hydration * 0.15 +
    mood * 0.15 +
    (6 - soreness) * 0.15 +
    (6 - intensity) * 0.15;

  const normalizedScore = ((weightedScore - 1) / 4) * 100;

  return Math.round(normalizedScore);
};

export const getReadinessStatus = (score) => {
  if (score >= 80) return "Green";
  if (score >= 60) return "Yellow";
  return "Red";
};

export const getRecoveryMessage = (score) => {
  if (score >= 80) {
    return "You appear well recovered and ready for full activity today.";
  }

  if (score >= 60) {
    return "Moderate fatigue detected. Monitor your workload and pay attention to how your body feels.";
  }

  return "Recovery appears limited today. Consider lowering intensity and prioritizing rest, hydration, and sleep.";
};