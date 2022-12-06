import express from "express";
import connect from "./db/db";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
connect();

app.use((req, res) => {
  return res.status(404).json({
    message: "Resource not found",
    status: false
  });
});
// app.use(errors())
app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`));

export default app;
