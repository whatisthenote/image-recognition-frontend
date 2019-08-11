import React from "react";
import { Nav, NavLink } from "reactstrap";

export default function Navbar({ route, routeChange }) {
	if (route === "home") {
		return (
			<div>
				<Nav>
					<NavLink onClick={() => routeChange("signin")} href="#">Sign out</NavLink>
				</Nav>
				<hr />
			</div>
		);
	} else
		return (
			<div>
				<Nav>
					<NavLink onClick={() => routeChange("signin")}  href="#">Sign in</NavLink>
					<NavLink onClick={() => routeChange("register")}  href="#">Register</NavLink>
					<NavLink onClick={() => routeChange("about")}  href="#">About</NavLink>
				</Nav>
				<hr />
			</div>
		);
}