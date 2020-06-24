import React from 'react';

import Poliza from '../Poliza/Poliza'

const ListadoPolizas = ({polizas, borrarElemento }) => {
    return ( 
        <React.Fragment>
            {
                polizas.map( poliza => {
                    return (
                        <Poliza 
                            key= { poliza.id }
                            poliza={poliza}
                            borrarElemento={borrarElemento}
                        />
                    )
                })
            }
        </React.Fragment>
        
        
    );
}

export default ListadoPolizas
