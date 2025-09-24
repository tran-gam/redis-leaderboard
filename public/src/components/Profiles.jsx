import React from "react";

export default function profiles({ Leaderboard }) {
  return <div id="profile">{Item(Leaderboard)}</div>;
}

function Item(data) {
  return (
    <>
      {data.map((entry, index) => (
        <div className="flex" key={index}>
          <div className="item">
            {/* <img src={value.img} alt="" /> */}
            <h2>{index + 1}</h2>

            <div className="info">
              <h3 className="name text-dark">{entry.value}</h3>
              {/* <span>{value.location}</span> */}
            </div>
          </div>
          <div className="item text-emphasis">
            <span>{entry.score}</span>
          </div>
        </div>
      ))}
    </>
  );
}
