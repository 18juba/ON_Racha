import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Image, InputGroup } from 'react-bootstrap';
import './styles.css';
import { handleSubmit } from './utils'; // Certifique-se de que esta função está implementada corretamente

export default function GenericForm({ formConfig, urlSuffix, entites, setEntities, title, beforeFinish = true, checkInputs = false, postEvent }) {
	const [currentRow, setCurrentRow] = useState(0)
	const onSubmit = (e) => {
		console.log("post:", postEvent)
		e.preventDefault();
		if (checkInputs && checkInputs(entites, currentRow)) {
			if (Object.keys(formConfig).length > 1) {
				currentRow + 1 !== Object.keys(formConfig).length ?
					setCurrentRow(currentRow + 1)
					:
					beforeFinish(entites) ? handleSubmit(urlSuffix, beforeFinish(entites), postEvent) : null
			}
		} else {
			console.log("esta aqui", Object.keys(formConfig).length)
			if (Object.keys(formConfig).length > 1) {
				console.log("aquiiiii")
				currentRow + 1 !== Object.keys(formConfig).length ?
					setCurrentRow(currentRow + 1)
					:
					beforeFinish(entites) ? handleSubmit(urlSuffix, beforeFinish(entites), postEvent) : null
			} else {
				beforeFinish(entites) ? handleSubmit(urlSuffix, beforeFinish(entites), postEvent) : null
			}
		}
	};
	const row = formConfig[Object.keys(formConfig)[currentRow]];
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
							<div className="single-row">
								<div className="form-row" key={row.key}>
									{row.fields.map((field, index) =>
										field ? (
											<Form.Group className="group" controlId={`formBasic${field.id}`} key={index}>
												<Form.Control
													className="input"
													type={field.type}
													placeholder={field.placeholder}
													value={entites[field.id] || field.defaultValue}
													onChange={(e) => setEntities({ ...entites, [field.id]: e.target.value })}
												/>
											</Form.Group>
										) : null
									)}
								</div>

							</div>

							<Button variant="primary" type="submit" className="button">
								<b>
									{Object.keys(formConfig).length > 1 ?
										"Proximo"
										:
										"Cadastrar"
									}
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
										<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
									</svg>
								</b>

							</Button>
						</Form>
					</div>
					<a className='anchorBotton' href='/'>Login</a>
				</Col>
			</Row>
		</Container>
	);
}
