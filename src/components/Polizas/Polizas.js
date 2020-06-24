import React from 'react';
import { Col } from 'react-bootstrap'
import { connect } from 'react-redux';

import { deletePolicy } from '../../actions/actions'
import Formulario from '../Formulario/Formulario'
import ListadoPolizas from '../ListadoPolizas/ListadoPolizas'

const Polizas = ( {polizas, agregarPolizas, deletePolicy, botones} ) => {
    
    return(
        <React.Fragment>

                {
                    (botones.addPolizas) ?
                        (
                            <React.Fragment>
                                <Col md="6">
                                    <h2 className="text-center">Agregar Poliza</h2>
                                    <Formulario 
                                            agregarElementos={agregarPolizas}
                                    />
                                </Col>
                                <Col md="5">
                                    <h2 className="text-center">Lista de polizas</h2>
                                    <div className="mt-4">
                                        <ListadoPolizas 
                                            polizas= { polizas }
                                            borrarElemento={ deletePolicy }
                                        />                                        
                                    </div>
                                                        
                                </Col>
                            </React.Fragment>

                        )
                    :   (botones.listaPolizas) ?
                            (

                                <Col md={{ span: 8, offset: 2 }}>
                                    <h2 className="text-center">Lista de polizas</h2>
                                    
                                    <div className="mt-5">
                                        <ListadoPolizas 
                                                polizas= {polizas}
                                        />
                                    </div>
                                    
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


export default connect(null, { deletePolicy })(Polizas)