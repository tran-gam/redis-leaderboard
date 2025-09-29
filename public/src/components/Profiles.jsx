import React from "react";

export default function profiles({ Leaderboard }) {
  return <div id="profile">{mapEntries(Leaderboard)}</div>;
}

function mapEntries(data) {
  return (
    <>
      {data.map((entry, index) => (
        <div className="flex" key={index}>
          <div className="rank">
            {/* <img src={value.img} alt="" /> */}
            <h1>{index + 1}</h1>

            <div className="info">
              <h2 className="name text-dark">{entry.value.substring(0, 3)}</h2>
              <span>{entry.value.substring(4, 26)}</span>
            </div>
          </div>
          <div className="score text-emphasis">
            <h2>{entry.score}</h2>
          </div>
        </div>
      ))}
    </>
  );
}
