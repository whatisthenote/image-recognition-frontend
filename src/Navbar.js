import React from "react";
import { Nav, NavLink } from "reactstrap";

export default function Navbar() {
	return (
		<div>
			<Nav>
				<NavLink href="#">Sign out</NavLink>
			</Nav>
			<hr />
		</div>
	);
}
