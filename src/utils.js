const getRandom = (minDiaposon = 0, maxDiaposon = 101) => Math
  .floor(Math.random() * (maxDiaposon - minDiaposon)) + minDiaposon;

export default getRandom;
