import React from "react";
import FaceRec from "./FaceRec";
import Register from "./Register";
import Login from "./Login";
import Background from "./Background";

export default function Content({
	route,
	routeChange,
	loaduser,
	user,
	incrementEntries
}) {
	switch (route) {
		case "signin":
			return (
				<div>
					<Login loaduser={loaduser} routeChange={routeChange} />
					<Background></Background>
				</div>
			);

		case "register":
			return <Register loaduser={loaduser} routeChange={routeChange} />;
		case "home":
			return (
				<FaceRec
					user={user}
					loaduser={loaduser}
					incrementEntries={incrementEntries}
				/>
			);
		default:
			return <h3>Error</h3>;
	}
}
