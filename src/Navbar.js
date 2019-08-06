import React from "react";
import { Nav, NavLink } from "reactstrap";

export default function Navbar({ route }) {
	if (route === "home") {
		return (
			<div>
				<Nav>
					<NavLink href="#">Sign out</NavLink>
				</Nav>
				<hr />
			</div>
		);
	} else
		return (
			<div>
				<Nav>
					<NavLink href="#">Register</NavLink>
					<NavLink href="#">About</NavLink>
				</Nav>
				<hr />
			</div>
		);
}
