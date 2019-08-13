import React, { Component } from "react";
import Navbar from "./Navbar";
import Content from "./Content";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			route: "signin",
			user: {
				id: "",
				name: "",
				email: "",
				password: "",
				entries: 0,
				joined: ""
			}
		};
	}

	loaduser = data => {
		this.setState({
			user: {
				id: data.id,
				name: data.name,
				email: data.email,
				password: data.password,
				entries: data.entries,
				joined: data.joined
			}
		});
	};
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
				<Content
					loaduser={this.loaduser}
					routeChange={this.routeChange}
					route={this.state.route}
				/>
			</div>
		);
	}
}
