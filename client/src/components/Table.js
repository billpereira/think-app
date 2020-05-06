import React from "react";
import "./Table.css";

const Table = (userData) => {
  const { connections } = userData;
  return (
    <div className="table">
      <div className="header">
        <div className="title field">Group</div>
        <div className="title field">Auth</div>
        <div className="title field">Connect-Owner</div>
        <div className="title field">Connect-Date</div>
        <div className="title field">Remove</div>
      </div>
      {connections &&
        connections.map((connection, i) => {
          return (
            <div className={i % 2 === 0 ? "line-light" : "line-heavy"}>
              <div className="field">{connection.group}</div>
              <div className="field">{connection.auth}</div>
              <div className="field">{connection.connectOwner}</div>
              <div className="field">{connection.connectDate}</div>
              <div className="field">
                <button className="delete-btn">X</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Table;
