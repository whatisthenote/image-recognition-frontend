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
	onRouteChange = route => {
		this.setState({ route: route });
	};
	render() {
		return (
			<div>
				<Navbar onRouteChange={this.onRouteChange} />
				{this.state.route === "home" ? (
					<FaceRec />
				) : this.state.route === "signin" ? (
					<Login onRouteChange={this.onRouteChange} />
				) : (
					<Register onRouteChange={this.onRouteChange} />
				)}
			</div>
		);
	}
}
