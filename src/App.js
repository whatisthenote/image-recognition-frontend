import React, { Component } from "react";
import Clarifai from "clarifai";

const app = new Clarifai.App({
	apiKey: "de6c435c4bc94e4394563714d9928850"
});

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
			image: "",
			concepts: []
		};
	}
	change = e => this.setState({ input: e.target.value });
	submit = () => {
		this.setState({ image: this.state.input });
		app.models
			.initModel({
				id: Clarifai.GENERAL_MODEL,
				version: "aa7f35c01e0642fda5cf400f543e7c40"
			})
			.then(generalModel => {
				return generalModel.predict(this.state.image);
			})
			.then(response => {
				var concepts = response["outputs"][0]["data"]["concepts"];
				this.setState({ concepts });
				console.log(concepts);
			});
	};
	render() {
		return (
			<div>
				<input onChange={this.change} />
				<button onClick={this.submit}>button</button>
				<ul>
					{this.state.concepts.map(item => {
						return (
							<li key={item.id}>
								{item.name}, {item.value * 100}%
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
