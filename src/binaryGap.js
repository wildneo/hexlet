const binaryGap = (N) => {
  const bin = parseInt(N, 10).toString(2).split('1');
  const filteredSeq = bin.slice(1, -1);
  return Math.max(...filteredSeq.map(e => e.length), 0);
};

export default binaryGap;
