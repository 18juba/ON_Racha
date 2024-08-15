'use client';
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Image, InputGroup } from 'react-bootstrap';
import "./styles.css"
import { CenterPainel, Header } from './styled';
const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		// Lógica de autenticação aqui
		console.log('Email:', email);
		console.log('Password:', password);
	};

	return (
		<Container>
			<Row className="justify-content-sm-center">
				<Col xs={12} md={6}>
					<CenterPainel>
						<Header>
							<Image src='./logo_prototype.png' alt='logo' />
							<h2 className="text-center"> Faça Login</h2>
						</Header>

						<Form onSubmit={handleSubmit}>

							<Form.Group className='group' controlId="formBasicEmail">

								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									placeholder="Enter email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								></Form.Control>
								
							</Form.Group>

							<Form.Group  className='group' controlId="formBasicPassword">

								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									placeholder="Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</Form.Group>

							<Button variant="primary" type="submit" className="button">
								Login
							</Button>
						</Form>
					</CenterPainel>
				</Col>
			</Row>
		</Container>
	);
};

export default LoginForm;
