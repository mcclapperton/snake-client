const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input to exit
  if (key === "\u0003") {
    process.exit();
  }
};
// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();

  return stdin;
};

module.exports = { setupInput}