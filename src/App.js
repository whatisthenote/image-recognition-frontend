import React, { Component } from "react";
import FaceRec from "./FaceRec";
import Register from "./Register";
import Navbar from "./Navbar";
import Login from "./Login";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			route: "signin"
		};
	}
	routeChange = route => {
		this.setState({ route });
	};
	render() {
		const { route } = this.state;
		return (
			<div>
				<Navbar routeChange={this.routeChange} />
				{route === "signin" ? (
					<Login routeChange={this.routeChange} />
				) : route === "home" ? (
					<FaceRec />
				) : (
					<Register routeChange={this.routeChange} />
				)}
			</div>
		);
	}
}
