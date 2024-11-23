// FormularioJogador.js
import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './FormularioJogador.css';


const positions = [{
    value: 'CA',
    label: 'Centro Avante'
}, {
    value: 'PTE',
    label: 'Ponta Esquerda'
}, {
    value: 'PTD',
    label: 'Ponta Direita'
}, {
    value: 'SA',
    label: 'Atacante'
}, {
    value: 'ZC',
    label: 'Zagueiro'
}, {
    value: 'LE',
    label: 'Lateral Esquerdo'
}, {
    value: 'LD',
    label: 'Lateral Direito'
}, {
   value: 'GOL',
   label: 'Goleiro' 
}, {
    value: 'MLG',
    label: 'Meia de Ligação'
}, {
    value: 'VOL',
    label: 'Volante'
}, {
    value: 'MAT',
    label: 'Meia Atacante'
}
]


const FormularioJogador = () => {
    return (
        <div className="form-container">
            <Row className="row">
                <Col xs={3} className="d-flex align-items-center justify-content-center">
                    <Form.Group className="profile-picture">
                        <Form.Control type="file" placeholder='+' className="plus-sign" />
                    </Form.Group>
                </Col>
                <Col className='fistCol' xs={9}>
                    <Form.Group className="group">
                        <Form.Label>NOME</Form.Label>
                        <Form.Control className="input" type="text" placeholder="&rarr;" />
                    </Form.Group>
                    <Form.Group className="group">
                        <Form.Label>APELIDO</Form.Label>
                        <Form.Control className="input" type="text" placeholder="&rarr;" />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="row">
                <Col className='col'>
                    <Form.Group className="group">
                        <Form.Label>POSIÇÃO</Form.Label>
                        <Form.Select className="input" aria-label="Seleção de Posiçao">
                            {positions.map((position) => (
                                <option key={position.value} value={position.value}>{position.label}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col className='col'>
                    <Form.Group className="group">
                        <Form.Label>IDADE:</Form.Label>
                        <Form.Control className="input" type="number" />
                    </Form.Group>
                </Col>
            </Row>

            <div className="section-title">CONTATO</div>
            <Row className="mb-3">
                <Col>
                    <Form.Group className="group">
                        <Form.Label>E-MAIL:</Form.Label>
                        <Form.Control className="input" type="email" placeholder="email@exemplo.com" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="group">
                        <Form.Label>TELEFONE:</Form.Label>
                        <Form.Control className="input" type="tel" placeholder="(XX) XXXX-XXXX" />
                    </Form.Group>
                </Col>
            </Row>

            <div className="section-title">REDES SOCIAIS</div>
            <Form.Group className="mb-3">
                <Form.Label>INSTAGRAM:</Form.Label>
                <Form.Control className="input" type="text" placeholder="@seuusuario" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
                Salvar
            </Button>
        </div>
    );
};

export default FormularioJogador;
