import React, { Component } from "react";
import {
	Container,
	Row,
	Col,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	Card
} from "reactstrap";

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			password: ""
		};
	}
	usernameChange = event => this.setState({ name: event.target.value });
	passwordChange = event => this.setState({ password: event.target.value });
	submit = () => {
		fetch("http://localhost:3000/signin", {
			method: "post",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({
				name: this.state.name,
				password: this.state.password
			})
		})
			.then(res => res.json())
			.then(data => {
				if (data === "ok") {
					this.props.routeChange("home");
				} else {
					this.props.routeChange("error");
				}
			});
	};
	render() {
		const { routeChange } = this.props;
		return (
			<Container>
				<Row className="justify-content-center">
					<Col xs="7" sm="7" md="5">
						<Card className="p-3 mt-5">
							<Form method="post">
								<FormGroup>
									<Label for="username">Username</Label>
									<Input
										type="username"
										name="username"
										id="username"
										placeholder="Username"
										onChange={this.usernameChange}
									/>
								</FormGroup>
								<FormGroup>
									<Label for="password">Password</Label>
									<Input
										type="password"
										name="password"
										id="password"
										placeholder="Password"
										onChange={this.passwordChange}
									/>
								</FormGroup>
								<Button onClick={() => this.submit()} className="d-block">
									Submit
								</Button>
								<Button
									onClick={() => routeChange("register")}
									size="sm"
									color="link"
								>
									Register
								</Button>
							</Form>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}
