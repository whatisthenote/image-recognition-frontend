import React, { Component } from "react";
import Clarifai from "clarifai";
import "./box.css";
import { Button, Input } from "reactstrap";

// https://portal.clarifai.com/cms-assets/20180320222304/demographics-001.jpg

const app = new Clarifai.App({
	apiKey: "de6c435c4bc94e4394563714d9928850"
});
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
			image: "",
			box: {}
		};
	}
	change = e => this.setState({ input: e.target.value });
	submit = () => {
		this.setState({ image: this.state.input });
		app.models
			.initModel({
				id: Clarifai.FACE_DETECT_MODEL
			})
			.then(generalModel => {
				return generalModel.predict(this.state.image);
			})
			.then(response => {
				this.boundingBox(this.faceLocation(response));
			});
	};
	faceLocation = data => {
		let clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
		let image = document.getElementById("image");
		let width = image.width;
		let height = image.height;
		console.log(width, height);
		console.log(clarifaiFace);
		return {
			left: clarifaiFace.left_col * width,
			top: clarifaiFace.top_row * height,
			right: width - clarifaiFace.right_col * width,
			bottom: height - clarifaiFace.bottom_row * height
		};
	};
	boundingBox = box => {
		this.setState({ box });
		console.log(box);
	};
	render() {
		var { box } = this.state;
		return (
			<div>
				<Input onChange={this.change} />
				<Button color="dark" size="sm" onClick={this.submit}>
					button
				</Button>
				<div style={{ position: "absolute" }}>
					<img width="600px" alt="" id="image" src={this.state.image} />
					<div
						className="bounding-box"
						style={{
							top: box.top,
							right: box.right,
							bottom: box.bottom,
							left: box.left
						}}
					/>
				</div>
			</div>
		);
	}
}
