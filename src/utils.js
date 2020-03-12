const getRandom = (...argv) => {
  let [minDiaposon, maxDiaposon] = [0, 101];
  if (Number.isInteger(argv[0]) && Number.isInteger(argv[1])) {
    [minDiaposon, maxDiaposon] = argv;
  }
  return Math.floor(Math.random() * (maxDiaposon - minDiaposon)) + minDiaposon;
};

export default getRandom;
