import React from "react";
import {useSelector} from "react-redux";
import "../App.scss";
import CadCards from "./CadCards";
import Logout from "./logout";
import SimpleAlerts from "./Warning";
function Dashboard() {
  const user = useSelector(state => state.auth.user);
  // var user = JSON.parse(localStorage.getItem("user"));
  const serverstatus = useSelector(state => state.auth.error);

  return (
    <div className="dashb-heading">
      <h3> Welcome {user} </h3>
      <div className="logout-button">
        <Logout />
      </div>
      <div className="alertbox">{serverstatus && <SimpleAlerts />}</div>
      <div className="div-outer-cad">
        <h2>THIS IS THE PLACE WHERE YOU CAN CHOOSE YOUR NEXT LEADER</h2>
        <CadCards />
      </div>
    </div>
  );
}

export default Dashboard;
