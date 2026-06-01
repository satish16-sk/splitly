import dotenv from "dotenv";
dotenv.config();
import e from "express";

const app = e();

app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running on port ${PORT}");
});
