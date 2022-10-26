const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541",
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  // say when connection est
  conn.on("connect", () => {
    console.log(`ready to rock n roll - cxn est.`);
    conn.write(`Name: MEC`);
    //  ` setInterval(
    //     (funk = () => {
    //       conn.write("Move: up");
    //       conn.write("Move: right");
    //       conn.write("Move: down");
    //     }),
    //     500
    //   );`
  });
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = { connect };
