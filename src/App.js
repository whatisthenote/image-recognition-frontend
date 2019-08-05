import React, { Component } from "react";
import FaceRec from "./FaceRec";
import Register from "./Register";
import Navbar from "./Navbar";
import Login from "./Login";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			route: "signin",
			isSignedIn: false
		};
	}
	routeChange = route => {
		if (route === "home") {
			this.setState({ isSignedIn: true });
		} else {
			this.setState({ isSignedIn: false });
		}
		this.setState({ route });
	};
	render() {
		const { route } = this.state;
		return (
			<div>
				<Navbar
					isSignedIn={this.state.isSignedIn}
					routeChange={this.routeChange}
				/>
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
