import React, { Component } from "react";
import "./box.css";
import { Button, Input, Container, Row, Col } from "reactstrap";
import Entries from "./Entries";
import Particles from "react-particles-js";

// https://portal.clarifai.com/cms-assets/20180320222304/demographics-001.jpg

export default class FaceRec extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
			image: "",
			box: {},
			color1: "#db160f",
			color2: "#4287f5"
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
	changeColor1 = e => this.setState({ color1: e.target.value });
	changeColor2 = e => this.setState({ color2: e.target.value });
	render() {
		const { box } = this.state;
		let rootStyle = {
			backgroundImage: `linear-gradient(to right, ${this.state.color1}, ${this.state.color2})`,
			height: "100%",
			width: "100%",
			position: "fixed"
		};
		return (
			<div style={rootStyle}>
				<Container>
					<Particles
						style={{ position: "fixed" }}
						params={{
							particles: {
								number: {
									value: 360,
									density: { enable: true, value_area: 800 }
								},
								color: { value: "#ffffff" },
								shape: {
									type: "circle",
									stroke: { width: 0, color: "#000000" },
									polygon: { nb_sides: 5 },
									image: { src: "img/github.svg", width: 100, height: 100 }
								},
								opacity: {
									value: 1,
									random: true,
									anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
								},
								size: {
									value: 3,
									random: true,
									anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
								},
								line_linked: {
									enable: false,
									distance: 150,
									color: "#ffffff",
									opacity: 0.4,
									width: 1
								},
								move: {
									enable: true,
									speed: 1,
									direction: "none",
									random: true,
									straight: false,
									out_mode: "out",
									bounce: false,
									attract: { enable: false, rotateX: 600, rotateY: 600 }
								}
							},
							interactivity: {
								detect_on: "canvas",
								events: {
									onhover: { enable: true, mode: "bubble" },
									onclick: { enable: true, mode: "repulse" },
									resize: true
								},
								modes: {
									grab: { distance: 400, line_linked: { opacity: 1 } },
									bubble: {
										distance: 250,
										size: 0,
										duration: 2,
										opacity: 0,
										speed: 3
									},
									repulse: { distance: 400, duration: 0.4 },
									push: { particles_nb: 4 },
									remove: { particles_nb: 2 }
								}
							},
							retina_detect: true
						}}
					/>
					<Row className="p-3">
						<Col>
							<Input
								type="color"
								onChange={this.changeColor1}
								value={this.state.color1}
								bsSize="sm"
							/>
						</Col>
						<Col>
							<Input
								type="color"
								onChange={this.changeColor2}
								value={this.state.color2}
								bsSize="sm"
							/>
						</Col>
					</Row>
					<Entries user={this.props.user} />
					<div className="p-3">
						<Input className="m-1" onChange={this.change} />
						<Button
							className="m-1"
							color="dark"
							size="sm"
							onClick={this.submit}
						>
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
			</div>
		);
	}
}
