import React from "react";
import FaceRec from "./FaceRec";
import Register from "./Register";
import Login from "./Login";

export default function Content({ route, routeChange, loaduser, user }) {
	switch (route) {
		case "signin":
			return <Login loaduser={loaduser} routeChange={routeChange} />;
		case "register":
			return <Register loaduser={loaduser} routeChange={routeChange} />;
		case "home":
			return <FaceRec user={user} loaduser={loaduser} />;
		default:
			return <h3>Error</h3>;
	}
}
