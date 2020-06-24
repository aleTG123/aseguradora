import React from 'react'
import faker from 'faker'

import { Form, Button, Col, Row} from 'react-bootstrap'

const Formulario = ( {agregarElementos} ) => {



    const nombreRef = React.createRef();
    const montoRef = React.createRef();
    

    const submit = e => {
        e.preventDefault();

        

        let elemento = {
            id : faker.random.uuid(),
            nombre : nombreRef.current.value,
            monto: montoRef.current.value
        }
        
        agregarElementos( elemento );

        nombreRef.current.value = '';
        montoRef.current.value = null;

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
                            ref={ nombreRef }
                            required
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
                            ref={ montoRef }
                            required
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