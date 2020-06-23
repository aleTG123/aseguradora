import React from 'react';

import { Button, Row, Col } from 'react-bootstrap'


const Poliza = ( {poliza, polizas, agregarPolizas} ) => {

    const eliminarPoliza = ( id ) => {
        const newPolizas = polizas.filter( poliza => poliza.id !== id )

        agregarPolizas(newPolizas)
    }



    return(
        
        <React.Fragment>
            <Row>
                
                {
                    agregarPolizas?
                        (   <React.Fragment>
                                <Col sm="9">
                                    <h5>{ poliza.nombre }</h5>
                                    <p>${ poliza.monto }</p>
                                </Col>
                                <Col sm="2" className="">
                                        <Button
                                            variant="danger" 
                                            size="sm"
                                            onClick={() => eliminarPoliza(poliza.id)}

                                        >Eliminar</Button>
                                    
                                </Col>
                            </React.Fragment>   
                            
                        )
                    :
                        (
                            <Col className="text-center">
                                    <h5>{ poliza.nombre }</h5>
                                    <p>${ poliza.monto }</p>
                            </Col>

                        )

                }
                
            </Row>            
            <hr></hr>

        </React.Fragment>
    );
}


export default Poliza;