/* eslint-disable no-console */

const diff = (a, b) => {
  const angle = a < b ? b - a : a - b;
  return angle <= 180 ? angle : 360 - angle;
};

export default diff;

console.log(diff(0, 45)); // 45
console.log(diff(0, 180)); // 180
console.log(diff(0, 190)); // 170
console.log(diff(120, 280)); // 160
