import React from "react";
import ModalSearch from "./ModalSearch/ModalSearch";
import { NavLink } from "react-router-dom";
export default function Menu() {
  return (
    <>
      <div className="menu">
        <div className="account">
          <div className="avatar">
            <img src={require("../../assets/img/download.jfif").default} />
          </div>
          <div className="account-info">
            <p>CyberLearn.vn</p>
            <p>Report bugs</p>
          </div>
        </div>
        <div className="control">
          <div>
            <i className="fa fa-credit-card" />
            <NavLink
              to="/mainboard"
              activeClassName="active font-weight-bold"
              className="text-dark"
            >
              Cyber Board
            </NavLink>
          </div>
          <div>
            <i className="fa fa-cog" />
            <NavLink
              to="/createproject"
              activeClassName="active font-weight-bold"
              className="text-dark"
            >
              Create Project
            </NavLink>
          </div>
          <div>
            <i className="fa fa-list" />

            <NavLink
              to="/managerproject"
              activeClassName="active font-weight-bold"
              className="text-dark"
            >
              Manager Project
            </NavLink>
          </div>
        </div>
        <div className="feature">
          <div>
            <i className="fa fa-truck" />
            <span>Releases</span>
          </div>
          <div>
            <i className="fa fa-equals" />
            <span>Issues and filters</span>
          </div>
          <div>
            <i className="fa fa-paste" />
            <span>Pages</span>
          </div>
          <div>
            <i className="fa fa-location-arrow" />
            <span>Reports</span>
          </div>
          <div>
            <i className="fa fa-box" />
            <span>Components</span>
          </div>
        </div>
      </div>
      <ModalSearch />
    </>
  );
}
