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
			email: "",
			name: "",
			password: ""
		};
	}
	emailChange = e => this.setState({ email: e.target.value });
	nameChange = e => this.setState({ name: e.target.value });
	passwordChange = e => this.setState({ password: e.target.value });
	submit = () => {
		fetch("http://localhost:3000/register", {
			method: "post",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({
				email: this.state.email,
				name: this.state.name,
				password: this.state.password
			})
		})
			.then(res => res.json())
			.then(user => {
				this.props.loaduser(user);
				this.props.routeChange("home");
				console.log(user);
			});
	};

	render() {
		return (
			<Container>
				<Row className="justify-content-center">
					<Col xs="7" sm="7" md={{ size: 7 }}>
						<Card className="p-3 mt-5">
							<Form method="post">
								<FormGroup>
									<Label for="email">Email</Label>
									<Input
										type="email"
										name="email"
										id="email"
										placeholder="Email"
										onChange={this.emailChange}
									/>
								</FormGroup>
								<FormGroup>
									<Label for="name">Name</Label>
									<Input
										type="name"
										name="name"
										id="name"
										placeholder="Name"
										onChange={this.nameChange}
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
								<Button onClick={this.submit}>Submit</Button>
							</Form>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}
