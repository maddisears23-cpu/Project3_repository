export const calculateReadinessScore = ({
  sleep,
  soreness,
  energy,
  hydration,
  mood,
  intensity,
}) => {
  const score =
    sleep * 20 +
    energy * 20 +
    hydration * 15 +
    mood * 15 +
    (6 - soreness) * 15 +
    (6 - intensity) * 15;

  return Math.round(score);
};

export const getReadinessStatus = (score) => {
  if (score >= 80) return "Green";
  if (score >= 60) return "Yellow";
  return "Red";
};