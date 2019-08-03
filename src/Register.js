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
				<Col xs="7" sm="7" md={{ size: 7 }}>
					<Card className="p-3 mt-5">
						<Form>
							<FormGroup>
								<Label for="email">Email</Label>
								<Input
									type="email"
									name="email"
									id="email"
									placeholder="Email"
								/>
							</FormGroup>
							<FormGroup>
								<Label for="name">Name</Label>
								<Input type="name" name="name" id="name" placeholder="Name" />
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
							<Button onClick={onRouteChange}>Submit</Button>
						</Form>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}
