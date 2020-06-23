import React, { useState } from 'react';
import faker from 'faker'

import Polizas from './Polizas/Polizas'
import Reclamos from './Reclamos/Reclamos'

import { Button, Row, Container, Col } from 'react-bootstrap'
import Finanzas from './Finanzas/Finanzas';

const App = () => {

    const [ polizas, agregarPolizas ] = useState([
        {id: faker.random.uuid(), nombre: 'Alex', monto: 50}
    ]);


    const [ reclamos, agregarReclamos ] = useState([
        {id: faker.random.uuid(), nombre: 'Alex', monto: 50}
    ]);


    const [ botones, cambiarBoton ] = useState({});



    const cambiar = (boton, valor) => {
        
        cambiarBoton({
            
            [boton]: valor
        })



    }

    return ( 
        
        <Container>
            <Row className="mt-2">
                <Col md={{ span: 8, offset: 2 }}>
                    <Button variant="outline-secondary"
                            onClick={() => cambiar('addPolizas', !botones.addPolizas)}
                    >Agregar Poliza</Button>

                    <Button variant="outline-secondary"
                            onClick={() => cambiar('listaPolizas', !botones.listaPolizas)}
                    >Lista de Polizas</Button>
                    
                    <Button variant="outline-secondary"
                            onClick={() => cambiar('addReclamos', !botones.addReclamos)}
                    >Agregar Reclamo</Button>
                    
                    <Button variant="outline-secondary"
                            onClick={() => cambiar('listaReclamos', !botones.listaReclamos)}
                    >Lista de Reclamos</Button>

                    <Button variant="outline-secondary"
                            onClick={() => cambiar('finanzas', !botones.finanzas)}
                    >Finanzas</Button>                    
                </Col>
                
            </Row>
            

            

            <Row className="mt-3">
                
                    <Polizas 
                        polizas={polizas}
                        agregarPolizas={agregarPolizas}
                        botones={botones}
                    />

                    <Reclamos 
                        reclamos={reclamos}
                        agregarReclamos={agregarReclamos}
                        botones={botones}
                    />

                    <Finanzas 
                        botones={botones}
                    />
                


            </Row>

        </Container>
            
            

     );
}
 
export default App;