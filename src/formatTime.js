export default formatTime = (min) => {
  const formatedMin = min % (24 * 60);
  const hh = Math.floor(formatedMin / 60);
  const mm = hh === 0 ? formatedMin : formatedMin - hh * 60;
  const addZerro = num => (num < 10 ? '0' : '') + num;
  return `${addZerro(hh)}:${addZerro(mm)}`;
};