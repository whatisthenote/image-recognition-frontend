import React from "react";
import { Nav, NavLink } from "reactstrap";

export default function Navbar({ onRouteChange }) {
	return (
		<div>
			<Nav>
				<NavLink href="#" onClick={() => onRouteChange("signin")}>
					Sign out
				</NavLink>
			</Nav>
			<hr />
		</div>
	);
}
