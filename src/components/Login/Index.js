'use client';
import React, { useEffect, useState } from 'react';
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
							<Image src='./logo_prototype-removebg-preview.png' alt='logo' />
							<link
									href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
									rel="stylesheet"></link>
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
								/>

							</Form.Group>

							<Form.Group className='group' controlId="formBasicPassword">

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
					{/* <div className='extend-footer'> */}
						<a className='anchorBotton' href='Formulario'>Cadastre-se</a>
					{/* </div> */}
				</Col>
			</Row>
		</Container>
	);
};

export default LoginForm;
