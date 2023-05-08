function getMinMax(str) {
  const nums = str.split(" ").map(parseFloat).filter(isFinite);
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  return { min, max };
}
