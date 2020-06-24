import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import ListadoReclamos from '../ListadoReclamos/ListadoReclamos';
import Formulario from '../Formulario/Formulario';



const Reclamos = ({reclamos, agregarReclamos, borrarReclamo, botones}) => {

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
                                            agregarElementos={agregarReclamos}
                                    />
                                </Col>
                                <Col md="5">
                                    <h2 className="text-center">Lista de Reclamos</h2>
                                    <div className="mt-4">
                                        <ListadoReclamos 
                                                reclamos={reclamos}
                                                borrarElemento={ borrarReclamo }
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
                                null
                            )
                }

                
            </Row>
        </Container>
     );
}
 
export default Reclamos;