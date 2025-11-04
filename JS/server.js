const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

// Example API endpoint that returns your questions
app.get("/api/questions", (req, res) => {
  res.json([
    "Easy 1",
    "Easy 2",
    "Easy 3",
    "Easy 4"
  ]);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

