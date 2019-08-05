import React from 'react'
import FaceRec from "./FaceRec";
import Register from "./Register";
import Login from "./Login";

export default function Content({ route, routeChange }) {
	switch (route) {
		case "signin":
			return <Login routeChange={routeChange} />;
		case "register":
			return <Register routeChange={routeChange} />;
		case "home":
			return <FaceRec />;
		default:
			return <h1>Error</h1>;
	}
}