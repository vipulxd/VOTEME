const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();
const path = require("path");
connectDB();
app.use(cors());
app.use(express.json({extended: false}));

app.use("/api/user", require("./routes/api/users"));
app.use("/api/candidate", require("./routes/api/candidate"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log("Online"));
