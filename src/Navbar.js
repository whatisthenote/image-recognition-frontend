import React from "react";
import { Nav, NavLink } from "reactstrap";

export default function Navbar({ routeChange }) {
	return (
		<div>
			<Nav>
				<NavLink onClick={() => routeChange("signin")} href="#">
					Sign out
				</NavLink>
			</Nav>
			<hr />
		</div>
	);
}
