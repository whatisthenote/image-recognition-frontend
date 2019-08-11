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

export default function Register({ routeChange }) {
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
							<Button onClick={() => routeChange("home")} className="d-block">
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
