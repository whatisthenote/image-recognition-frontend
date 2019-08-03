import React, { Component } from "react";
import FaceRec from "./FaceRec";
import Register from "./Register";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			route: "signin"
		};
	}

	onRouteChange = () => {
		this.setState({ route: "home" });
	};

	render() {
		return (
			<div>
				{this.state.route === "signin" ? (
					<Register onRouteChange={this.onRouteChange} />
				) : (
					<FaceRec />
				)}
			</div>
		);
	}
}
