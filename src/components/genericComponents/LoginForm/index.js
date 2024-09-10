import React from 'react';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import './styles.css';
import { handleSubmit } from './utils'; // Certifique-se de que esta função está implementada corretamente

export default function GenericForm({ formConfig, urlSuffix, entites, setEntities, title, beforeFinish = true}) {
	const onSubmit = (e) => {
		e.preventDefault();
		if(beforeFinish(entites)){
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
							<Image src='./ON_RACHA-removebg-preview (1).svg' alt='logo' />
							<h2 className="title">{title}</h2>
						</div>
						<Form onSubmit={onSubmit} className='form'>
							<div className='rows'>
								{Object.keys(formConfig).map((rowKey) => {
									const row = formConfig[rowKey];
									return (
										<div className='form-row' key={rowKey}>
											{row.fields.map((field, index) => field? (
												<Form.Group className='group' controlId={`formBasic${field.id}`} key={index}>
													<Form.Label>{field.label}</Form.Label>
													<Form.Control
														className='input'
														type={field.type}
														placeholder={field.placeholder}
														value={entites[field.id] || field.defaultValue}
														onChange={(e) => setEntities({ ...entites, [field.id]: e.target.value })}
													/>
												</Form.Group>
											): null)}
										</div>
									);
								})}
							</div>
							<Button variant="primary" type="submit" className="button">
								Enviar
							</Button>
						</Form>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
