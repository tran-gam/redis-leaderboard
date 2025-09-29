import React, { useState, useEffect, use } from "react";
import Profiles from "./Profiles";
import { io } from "socket.io-client";

const leaderboardKey = "redis-racer";
const leaderboardCount = 10;
const socket = io("http://localhost:4000");

export default function Board() {
  const [leaderboard, setLeaderboard] = useState([]);

  const fetchData = async (key, count) => {
    const response = await (
      await fetch(`http://localhost:3000/api/leaderboard/${key}?count=${count}`)
    ).json();
    setLeaderboard(await response.leaderboard);
  };

  useEffect(() => {
    fetchData(leaderboardKey, leaderboardCount);
  }, []);

  const refresh = () => {
    fetchData(leaderboardKey, leaderboardCount);
  };

  const register = () => {
    alert("Register button clicked");
  };

  socket.on("connect", () => {
    console.log("connected to socket.io server");
  });

  socket.on("entryAdded", () => {
    console.log("entryAdded event received");
    fetchData(leaderboardKey, leaderboardCount);
  });

  // const data = {
  //   leaderboard: [
  //     {
  //       value: "OLY-2025-09-23T08:45:33.674Z",
  //       score: 3364,
  //     },
  //     {
  //       value: "LOP-2025-09-23T08:39:46.657Z",
  //       score: 2354,
  //     },
  //     {
  //       value: "CRK-2025-09-23T08:39:23.509Z",
  //       score: 1564,
  //     },
  //     {
  //       value: "JIL-2025-09-23T08:39:36.947Z",
  //       score: 1468,
  //     },
  //     {
  //       value: "TVR-2025-09-23T08:29:41.787Z",
  //       score: 14,
  //     },
  //     {
  //       value: "LRT-2025-09-26T08:29:41.787Z",
  //       score: 4152,
  //     },
  //   ],
  // };

  return (
    <div className="board">
      <h1 className="leaderboard">Redis Racer Leaderboard</h1>

      <div>
        <button onClick={register}>Register</button>
        &nbsp; &nbsp;
        <button onClick={refresh}>Refresh</button>
      </div>

      <Profiles Leaderboard={leaderboard}></Profiles>
    </div>
  );
}

//sort function for leaderboard data, not needed with redis
function sort(data) {
  // sort with asending order
  return data.sort((a, b) => {
    if (a.score === b.score) {
      return b.score - a.score;
    } else {
      return b.score - a.score;
    }
  });
}
