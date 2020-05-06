import React, { useState } from "react";
import logo from "../logo-pages.png";
import Table from "./Table";
import "./GroupsPage.css";

const userData = {};

const GroupsPage = () => {
  const [userid, setUserid] = useState("");
  const [connections, setConnections] = useState([]);
  const [newGroup, setNewGroup] = useState("");
  const [groupToDelete, setGroupToDelete] = useState("");

  const searchGroups = () => {};

  return (
    <div>
      <nav>
        <div className="row nav">
          <img src={logo} alt="logo"></img>
          <p>Logout</p>
        </div>
      </nav>
      <div className="row">
        <div className="page-area">
          <div className="row title">
            <h2>Manage User Groups</h2>
          </div>
          <div className="row search-row">
            <div>
              User: <input></input>
              <button className="add-button" onClick={() => searchGroups()}>
                Search
              </button>
            </div>
            <div>
              <input></input>
              <button className="add-button">ADD Group</button>
            </div>
          </div>
          <div className="row">
            <Table userData={userData}></Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupsPage;
