import React from 'react';

import {Col} from 'react-bootstrap';

const Finanzas = ( {botones} ) => {
    return ( 
        <React.Fragment>

            {
                botones.finanzas?
                    (
                        <Col className="text-center">
                            <h3>Fondo Total</h3>
                            <p>${ 0.0 }</p>
                        </Col>
                    )
                :
                    (
                        <div></div>
                    )
            }
            
        </React.Fragment>
        
        
    );
}
 
export default Finanzas;