import React, { useState, useEffect, use } from "react";
import Profiles from "./Profiles";
// import { Leaderboard } from "./database";

export default function Board() {
  const [leaderboard, setLeaderboard] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/data");
    setLeaderboard(await response.json());
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const data = [
  //   {
  //     value: "OLY-2025-09-23T08:45:33.674Z",
  //     score: 3364,
  //   },
  //   {
  //     value: "LOP-2025-09-23T08:39:46.657Z",
  //     score: 2354,
  //   },
  //   {
  //     value: "CRK-2025-09-23T08:39:23.509Z",
  //     score: 1564,
  //   },
  //   {
  //     value: "JIL-2025-09-23T08:39:36.947Z",
  //     score: 1468,
  //   },
  //   {
  //     value: "TVR-2025-09-23T08:29:41.787Z",
  //     score: 14,
  //   },
  // ];

  const handleClick = () => {
    // window.location.reload();
    fetchData();
  };

  return (
    <div className="board">
      <h1 className="leaderboard">Redis Racer Leaderboard</h1>

      <div>
        <button onClick={handleClick}>Refresh</button>
      </div>

      <Profiles Leaderboard={sort(leaderboard)}></Profiles>
    </div>
  );
}

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

// function between(data, between) {
//   const today = new Date();
//   const previous = new Date(today);
//   previous.setDate(previous.getDate() - (between + 1));

//   let filter = data.filter((val) => {
//     let userDate = new Date(val.dt);
//     if (between == 0) return val;
//     return previous <= userDate && today >= userDate;
//   });

//   // sort with asending order
//   return filter.sort((a, b) => {
//     if (a.score === b.score) {
//       return b.score - a.score;
//     } else {
//       return b.score - a.score;
//     }
//   });
// }
