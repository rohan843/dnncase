// const getCodeFrom = require("./code_generator");

function getCodeFrom(graphData) {
  return JSON.stringify(graphData);
}

module.exports = {
  getCodeFrom,
};
