const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

connectDB();
app.use(cors());
app.use(express.json({extended: false}));
app.get("/", (req, res) => res.send("welcome to Voteme server "));
app.use("/api/user", require("./routes/api/users"));
app.use("/api/candidate", require("./routes/api/candidate"));

app.listen(9000, () => console.log("Online"));
