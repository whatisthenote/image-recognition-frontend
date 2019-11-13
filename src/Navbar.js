import React from "react";
import { Nav, NavLink } from "reactstrap";

export default function Navbar({ route, routeChange }) {
  if (route === "home") {
    return (
      <div>
        <Nav>
          <NavLink
            style={{ color: "white" }}
            onClick={() => routeChange("signin")}
            href="#"
          >
            Sign out
          </NavLink>
        </Nav>
      </div>
    );
  } else
    return (
      <div>
        <Nav>
          <NavLink onClick={() => routeChange("signin")} href="#">
            Sign in
          </NavLink>
          <NavLink onClick={() => routeChange("register")} href="#">
            Register
          </NavLink>
        </Nav>
        <hr />
      </div>
    );
}
