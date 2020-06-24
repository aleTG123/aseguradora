import React from 'react';

import {Col} from 'react-bootstrap';

const Finanzas = ( {finanzas, botones} ) => {
    return ( 
        <React.Fragment>

            {
                botones.finanzas?
                    (
                        <Col className="text-center">
                            <h3>Fondo Total</h3>
                            <p>${ finanzas }</p>
                        </Col>
                    )
                :
                    (
                        null
                    )
            }
            
        </React.Fragment>
        
        
    );
}
 
export default Finanzas;