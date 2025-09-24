import "dotenv/config";
import express from "express";
import cors from "cors";
import * as leaderboard from "./leaderboard.js";

const app = express();
const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(express.static("public/dist"));
app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/leaderboard", leaderboard.router);

app.get("/data", (_, res) => {
  res.json([
    {
      value: "OLY-2025-09-23T08:45:33.674Z",
      score: 3364,
    },
    {
      value: "LOP-2025-09-23T08:39:46.657Z",
      score: 2354,
    },
    {
      value: "CRK-2025-09-23T08:39:23.509Z",
      score: 1564,
    },
    {
      value: "JIL-2025-09-23T08:39:36.947Z",
      score: 1468,
    },
    {
      value: "TVR-2025-09-23T08:29:41.787Z",
      score: 14,
    },
    {
      value: "LRT-2025-09-26T08:29:41.787Z",
      score: 4152,
    },
  ]);
});

app.get("/health", (_, res) => {
  res.status(200).send("OK");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT || 3000}`);
});
