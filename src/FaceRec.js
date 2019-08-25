import React, { Component } from "react";
import "./box.css";
import { Button, Input, Container } from "reactstrap";
import Entries from "./Entries";

// https://portal.clarifai.com/cms-assets/20180320222304/demographics-001.jpg

export default class FaceRec extends Component {
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
		fetch("https://reconhecimento.herokuapp.com/imageurl", {
			method: "post",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({
				input: this.state.input
			})
		})
			.then(response => response.json())
			.then(response => {
				if (response) {
					fetch("https://reconhecimento.herokuapp.com/image", {
						method: "put",
						headers: { "Content-type": "application/json" },
						body: JSON.stringify({
							id: this.props.user.id
						})
					})
						.then(res => res.json())
						.then(count => this.props.incrementEntries(count));
				}
				this.boundingBox(this.faceLocation(response));
			});
	};
	faceLocation = data => {
		let clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
		let image = document.getElementById("image");
		let width = image.width;
		let height = image.height;
		return {
			left: clarifaiFace.left_col * width,
			top: clarifaiFace.top_row * height,
			right: width - clarifaiFace.right_col * width,
			bottom: height - clarifaiFace.bottom_row * height
		};
	};
	boundingBox = box => this.setState({ box });
	render() {
		var { box } = this.state;
		return (
			<Container>
				<Entries user={this.props.user} />
				<div className="p-3">
					<Input className="m-1" onChange={this.change} />
					<Button className="m-1" color="dark" size="sm" onClick={this.submit}>
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
			</Container>
		);
	}
}
