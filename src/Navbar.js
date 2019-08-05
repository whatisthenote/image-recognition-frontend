import React from "react";
import { Nav, NavLink } from "reactstrap";

export default function Navbar({ routeChange, isSignedIn }) {
	if (isSignedIn) {
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
	} else {
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
}
