require('dotenv').config();
import * as mysql from "mysql2";

let connection = mysql.default.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
  } else {
    console.log("Database connected");
  }
});

// Thêm hàm để kiểm tra và tái thiết lập kết nối nếu cần
const checkConnection = () => {
  if (connection.state === "disconnected") {
    connection.connect((err) => {
      if (err) {
        console.error("Error reconnecting to database:", err);
      } else {
        console.log("Database reconnected");
        console.log(process.env.DB_USERNAME);
      }
    });
  }
};

setInterval(checkConnection, 60000); // Kiểm tra và tái thiết lập kết nối mỗi 1 phút

module.exports = connection;