import React from 'react';

import Reclamo from '../Reclamo/Reclamo'

const ListadoReclamos = ({ reclamos, agregarReclamos }) => {
    return ( 
        <React.Fragment>
            {
                reclamos.map( reclamo => {
                    return (
                        <Reclamo 
                            key= { reclamo.id }
                            reclamo={reclamo}
                            reclamos={reclamos}
                            agregarReclamos={agregarReclamos}
                        />
                    )
                })
            }
        </React.Fragment>
     );
}
 
export default ListadoReclamos;