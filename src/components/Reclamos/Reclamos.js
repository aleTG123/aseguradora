import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import faker from 'faker'

import ListadoReclamos from '../ListadoReclamos/ListadoReclamos';
import Formulario from '../Formulario/Formulario';



const Reclamos = ({reclamos, agregarReclamos, botones}) => {

    const [reclamo, guardarReclamo] = useState({
        id: faker.random.uuid(),
        nombre: '',
        monto: 0
    });




    return ( 
        <Container>
            <Row>
                {
                    (botones.addReclamos) ?
                        (
                            <React.Fragment>
                                <Col md="6">
                                    <h2 className="text-center">Agregar Reclamo</h2>
                                    <Formulario 
                                            elementos= {reclamos}
                                            agregarElementos={agregarReclamos}
                                            elemento={reclamo}
                                            guardarElemento={guardarReclamo}
                                       />
                                </Col>
                                <Col md="5">
                                    <h2 className="text-center">Lista de Reclamos</h2>
                                    <div className="mt-4">
                                        <ListadoReclamos 
                                                reclamos={reclamos}
                                                agregarReclamos={agregarReclamos}
                                        />
                                    </div>
                                                        
                                </Col>
                            </React.Fragment>

                        )
                    :   (botones.listaReclamos)?
                            (
                                <Col md={{ span: 8, offset: 2 }}>
                                <h2 className="text-center">Lista de Reclamos</h2>
                                
                                <div className="mt-5">
                                    <ListadoReclamos 
                                            reclamos= {reclamos}
                                    />
                                </div>
                                
                            </Col>
                            )
                        :
                            (
                                <div></div>
                            )
                }

                
            </Row>
        </Container>
     );
}
 
export default Reclamos;