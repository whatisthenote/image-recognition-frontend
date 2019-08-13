import React from "react";
import FaceRec from "./FaceRec";
import Register from "./Register";
import Login from "./Login";

export default function Content({ route, routeChange, loaduser }) {
	switch (route) {
		case "signin":
			return <Login routeChange={routeChange} />;
		case "register":
			return <Register loaduser={loaduser} routeChange={routeChange} />;
		case "home":
			return <FaceRec />;
		default:
			return <h3>Error</h3>;
	}
}
