import React from 'react';
import { Form, Button, Container, Row, Col, Image, InputGroup } from 'react-bootstrap';
import './styles.css';
import { handleSubmit } from './utils'; // Certifique-se de que esta função está implementada corretamente

export default function GenericForm({ formConfig, urlSuffix, entites, setEntities, title, beforeFinish = true }) {
	const onSubmit = (e) => {
		e.preventDefault();
		if (beforeFinish(entites)) {
			console.log("ta aqui")
			handleSubmit(urlSuffix, entites);
		}
	};

	return (
		<Container>
			<Row className="justify-content-sm-center">
				<Col xs={12} md={6}>
					<div className='CenterPainel'>
						<div className='Header'>
							<Image src='./logo_prototype-removebg-preview.png' alt='logo' />
							<h2 className="title">
								<link
									href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
									rel="stylesheet"></link>
								{title}
							</h2>
						</div>
						<Form onSubmit={onSubmit} className='form'>
							<div className={`${Object.keys(formConfig).length > 1?"multiple":"single"}-row`}>
								{Object.keys(formConfig).map((rowKey) => {
									const row = formConfig[rowKey];
									return (
										<div className='form-row' key={rowKey}>
											{row.fields.map((field, index) => field ? (
												<Form.Group className='group' controlId={`formBasic${field.id}`} key={index}>
													<Form.Control
														className='input'
														type={field.type}
														placeholder={field.placeholder}
														value={entites[field.id] || field.defaultValue}
														onChange={(e) => setEntities({ ...entites, [field.id]: e.target.value })}
													/>
												</Form.Group>
											) : null)}
										</div>
									);
								})}
							</div>
							
							<Button variant="primary" type="submit" className="button">
								Enviar
							</Button>
						</Form>
					</div>
					<a className='anchorBotton' href='/'>Login</a>
				</Col>
			</Row>
		</Container>
	);
}