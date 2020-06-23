import React from 'react';
import { Row, Col, Button } from 'react-bootstrap'

const Reclamo = ( {reclamo, reclamos, agregarReclamos} ) => {
    
    const eliminarReclamo = (id) => {
        const newReclamos = reclamos.filter( reclamo => reclamo.id !== id )

        agregarReclamos(newReclamos)
    }
    
    
    
    return ( 
        <React.Fragment>
            <Row>

                {
                    agregarReclamos?
                        (   
                            <React.Fragment>
                                <Col sm="9">
                                    <h5>{ reclamo.nombre }</h5>
                                    <p>${ reclamo.monto }</p>
                                </Col>
                                <Col sm="2">
                                    <Button 
                                        variant="danger" 
                                        size="sm"
                                        onClick={() => eliminarReclamo(reclamo.id)}
                
                                    >Eliminar</Button>
                                </Col>            
                            </React.Fragment>
                            
                        )
                    :
                        (
                            <Col className="text-center">
                                <h5>{ reclamo.nombre }</h5>
                                <p>${ reclamo.monto }</p>
                            </Col>
                        )
                }
                
            </Row>            
            <hr></hr>

        </React.Fragment>
     );
}
 
export default Reclamo;