import React from 'react';

import Reclamo from '../Reclamo/Reclamo'

const ListadoReclamos = ({ reclamos, borrarElemento }) => {
    return ( 
        <React.Fragment>
            {
                reclamos.map( reclamo => {
                    return (
                        <Reclamo 
                            key= { reclamo.id }
                            reclamo={reclamo}
                            borrarElemento={borrarElemento}
                        />
                    )
                })
            }
        </React.Fragment>
     );
}
 
export default ListadoReclamos;