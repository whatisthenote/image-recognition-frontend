import React, { Component } from "react";

export default class Background extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color1: "blue",
			color2: "red"
		};
	}
	change1 = e => this.setState({ color1: e.target.value });
	change2 = e => this.setState({ color2: e.target.value });
	render() {
		return (
			<div>
				<div
					style={{
						backgroundImage: `linear-gradient(to right, ${this.state.color1}, ${this.state.color2})`
					}}
				>
					<input type="color" value="#32a871" onChange={this.change1}></input>
					<input type="color" value="#ed0915" onChange={this.change2}></input>
				</div>
			</div>
		);
	}
}
