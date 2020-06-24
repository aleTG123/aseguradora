import React from 'react';

import { Button, Row, Col } from 'react-bootstrap'


const Poliza = ( {poliza, borrarElemento} ) => {

    return(
        
        <React.Fragment>
            <Row>
                
                {
                    borrarElemento?
                        (   
                            <React.Fragment>
                                <Col sm="9">
                                    <h5>{ poliza.nombre }</h5>
                                    <p>${ poliza.monto }</p>
                                </Col>
                                <Col sm="2" className="">
                                        <Button
                                            variant="danger" 
                                            size="sm"
                                            onClick={() => borrarElemento(poliza)}

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