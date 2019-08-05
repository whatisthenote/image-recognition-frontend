import React, { Component } from "react";
import FaceRec from "./FaceRec";
import Register from "./Register";
import Navbar from "./Navbar";
import Login from "./Login";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<Navbar />
				<FaceRec />
				<Login />
				<Register />
			</div>
		);
	}
}
