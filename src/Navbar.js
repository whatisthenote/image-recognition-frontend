import React from "react";
import { Nav, NavLink } from "reactstrap";

export default function Navbar({ onRouteChange, isSignedIn }) {
	if (isSignedIn) {
		return (
			<div>
				<Nav>
					<NavLink href="#" onClick={() => onRouteChange("signout")}>
						Sign out
					</NavLink>
				</Nav>
				<hr />
			</div>
		);
	} else {
		return (
			<Nav>
				<NavLink href="#" onClick={() => onRouteChange("signin")}>
					Sign in
				</NavLink>
				<NavLink href="#" onClick={() => onRouteChange("register")}>
					Register
				</NavLink>
			</Nav>
		);
	}
}
