const colors = [
  "amber-600",
  "green-600",
  "emerald-600",
  "sky-600",
  "pink-600",
  "purple-600",
];

export const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
