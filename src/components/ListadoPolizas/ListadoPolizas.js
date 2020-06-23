import React from 'react';

import Poliza from '../Poliza/Poliza'



const ListadoPolizas = ({polizas, agregarPolizas }) => {
    return ( 
        <React.Fragment>
            {
                polizas.map( poliza => {
                    return (
                        <Poliza 
                            key= { poliza.id }
                            poliza={poliza}
                            polizas={polizas}
                            agregarPolizas={agregarPolizas}
                        />
                    )
                })
            }
        </React.Fragment>
        
        
    );
}

export default ListadoPolizas
