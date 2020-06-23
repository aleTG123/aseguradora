import React from 'react'
import faker from 'faker'

import { Form, Button, Col, Row} from 'react-bootstrap'

const Formulario = ( {elementos, agregarElementos, elemento, guardarElemento} ) => {

    
    const onChangeText = (e) => {

        guardarElemento({
            ...elemento,
            //id: faker.random.uuid(),
            [e.target.name]: e.target.value
        });
        
    }

    const submit = e => {
        e.preventDefault();
        
        agregarElementos([
            ...elementos,
            elemento
        ]);

        guardarElemento({
            id: faker.random.uuid(),
            nombre: '',
            monto: 0
        })



        

    }
    
    return ( 
        <div className="mt-4">
            <Form onSubmit={submit}>
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="3">
                    Nombre
                </Form.Label>
                <Col sm="9">
                    <Form.Control 
                            type="text" 
                            placeholder="Nombre"
                            name="nombre"
                            value={elemento.nombre}
                            onChange={ (e) => onChangeText(e) }
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="3">
                    Monto
                </Form.Label>
                <Col sm="9">
                    <Form.Control 
                            type="number" 
                            placeholder="Monto"
                            name="monto"
                            value={elemento.monto}
                            onChange={ (e) => onChangeText(e) } 
                    />
                </Col>
            </Form.Group>
            <div className="text-center mt-4">
                <Button variant="primary" 
                        type="submit"
                >
                    Agregar
                </Button>
            </div>
            
        </Form>
        </div>

     );
}
 
export default Formulario;