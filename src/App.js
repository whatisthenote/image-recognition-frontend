import React, { Component } from "react";
import Navbar from "./Navbar";
import Content from "./Content";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			route: "signin"
		};
	}
	// componentDidMount() {
	// 	fetch("http://localhost:3000/")
	// 		.then(res => res.json())
	// 		.then(console.log);
	// }
	routeChange = route => this.setState({ route });
	render() {
		return (
			<div>
				<Navbar routeChange={this.routeChange} route={this.state.route} />
				<Content routeChange={this.routeChange} route={this.state.route} />
			</div>
		);
	}
}
