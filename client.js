const { host, port } = require("./constants");
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: host,
    port: port,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  // say when connection est
  conn.on("connect", () => {
    console.log(`ready to rock n roll - cxn est.`);
    conn.write(`Name: MEC`);
  });
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = { connect };
