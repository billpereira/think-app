import React, { useState } from "react";
import logo from "../logo-pages.png";
import Table from "./Table";
import "./GroupsPage.css";
import { Link } from "react-router-dom";
import api from "../services/api";

const GroupsPage = () => {
  const [userid, setUserid] = useState("");
  const [userData, setUserData] = useState({});
  const [newGroup, setNewGroup] = useState("");
  const [groupToDelete, setGroupToDelete] = useState("");

  const searchGroups = async () => {
    try {
      const response = await api.get(`api/user/list?user=${userid}`);
      setUserData(response.data.userData);
    } catch (error) {
      alert("Failed to get data");
    }
  };

  const logout = () => {
    localStorage.removeItem("auth");
  };

  const connectGroup = async () => {
    const data = {
      user:userid,
      group: newGroup
    }
    try {
      alert(`Connecting user ${userid} to ${newGroup}`)
      const response = await api.post(`api/user/connect`,data);
      setUserData(response.data.userData);
      setNewGroup('')
    } catch (error) {
      alert('Failed to connect')
    }

  }

  const deleteGroup = async () => {
    const data = {
      user:userid,
      group: groupToDelete
    }
    console.log(data)
    try {
      alert(`Removing connection from user ${userid} to ${newGroup}`)
      const response = await api.post(`api/user/remove`,data);
      setUserData(response.data.userData);
      setNewGroup('')
    } catch (error) {
      alert('Failed to connect')
    }

  }


  return (
    <div>
      <nav>
        <div className="row nav">
          <img src={logo} alt="logo"></img>
          <Link to={"/"} onClick={() => logout()}>
            Logout
          </Link>
        </div>
      </nav>
      <div className="row">
        <div className="page-area">
          <div className="row title">
            <h2>Manage User Groups</h2>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="row search-row">
              <div>
                User:{" "}
                <input
                  value={userid}
                  onChange={(e) => setUserid(e.target.value)}
                ></input>
                <button className="add-button" onClick={() => searchGroups()}>
                  Search
                </button>
              </div>
              <div>
                <input
                value={newGroup}
                onChange={(e) => setNewGroup(e.target.value)}
                ></input>
                <button className="add-button" disabled={userid === ""} onClick={()=>connectGroup()}>
                  ADD Group
                </button>
              </div>
            </div>
          </form>
          <div className="row">
            <Table userData={userData} deleteGroup={deleteGroup} setGroupToDelete={setGroupToDelete} groupToDelete={groupToDelete}></Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupsPage;
