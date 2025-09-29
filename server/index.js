import "dotenv/config";
import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import * as leaderboard from "./leaderboard.js";

const app = express();
const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:3000"],
};

app.use(express.static("public/dist"));
app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/leaderboard", leaderboard.router);

app.get("/health", (_, res) => {
  res.status(200).send("OK");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Server listening:  http://localhost:${process.env.PORT || 3000}`
  );
});

export const io = new Server(
  app.listen(4000, () => {
    console.log(`Socket.IO server listening on port 4000`);
  }),
  { cors: corsOptions }
);

io.on("connection", (socket) => {
  console.log("a user connected to socket.io");
});
