import React, { useState } from 'react';
import { Col } from 'react-bootstrap'
import faker from 'faker'

import Formulario from '../Formulario/Formulario'
import ListadoPolizas from '../ListadoPolizas/ListadoPolizas'




const Polizas = ( {polizas, agregarPolizas, botones} ) => {
    
    const [poliza, guardarPoliza] = useState({
        id: faker.random.uuid(),
        nombre: '',
        monto: 0
    });


    return(
        <React.Fragment>

                {
                    (botones.addPolizas) ?
                        (
                            <React.Fragment>
                                <Col md="6">
                                    <h2 className="text-center">Agregar Poliza</h2>
                                    <Formulario 
                                            elementos= {polizas}
                                            agregarElementos={agregarPolizas}
                                            elemento= {poliza}
                                            guardarElemento= {guardarPoliza}
                                    />
                                </Col>
                                <Col md="5">
                                    <h2 className="text-center">Lista de polizas</h2>
                                    <div className="mt-4">
                                        <ListadoPolizas 
                                            polizas= {polizas}
                                            agregarPolizas={agregarPolizas}
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
                                <div></div>
                            )
                }


            </React.Fragment>
    );
}

export default Polizas;