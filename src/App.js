import React, { Component } from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import { Button } from "reactstrap";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			route: "signin",
			isSignedIn: false
		};
	}
	routeChange = route => {
		if(route === "signin") {
			this.setState({isSignedIn:true})
		}
		this.setState({ route });
	};
	render() {
		return (
			<div>
				<Navbar route={this.state.route} />
				<Content routeChange={this.routeChange} route={this.state.route} />
				<Button onClick={() => this.routeChange("home")}>Home</Button>
				<Button onClick={() => this.routeChange("signin")}>Sign in</Button>
				<Button onClick={() => this.routeChange("register")}>Register</Button>
			</div>
		);
	}
}
