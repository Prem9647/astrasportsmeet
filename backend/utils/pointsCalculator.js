// Utility function to calculate team points
const calculatePoints = (team) =>
  team.gold * 3 + team.silver * 2 + team.bronze + team.bonus;

module.exports = calculatePoints;

