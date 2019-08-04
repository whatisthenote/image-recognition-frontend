import React from "react";
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

export default function Register({ onRouteChange }) {
	return (
		<Container>
			<Row className="justify-content-center">
				<Col xs="7" sm="7" md="5">
					<Card className="p-3 mt-5">
						<Form>
							<FormGroup>
								<Label for="username">Username</Label>
								<Input
									type="username"
									name="username"
									id="username"
									placeholder="Username"
								/>
							</FormGroup>
							<FormGroup>
								<Label for="password">Password</Label>
								<Input
									type="password"
									name="password"
									id="password"
									placeholder="Password"
								/>
							</FormGroup>
							<Button className="d-block" onClick={() => onRouteChange("home")}>
								Submit
							</Button>
							<Button
								size="sm"
								color="link"
								onClick={() => onRouteChange("register")}
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
