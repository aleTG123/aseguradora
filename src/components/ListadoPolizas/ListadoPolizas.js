import React from 'react';
import { connect } from 'react-redux';

import Poliza from '../Poliza/Poliza'
import { createPolicy } from '../../actions/actions'


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

//export default ListadoPolizas


const mapStateToProps = (state) => {
    return {
        polizas: state.policies
    }
}



export default connect(mapStateToProps, {createPolicy})(ListadoPolizas)