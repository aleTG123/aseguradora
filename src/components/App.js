import React, { useState } from 'react';

import { connect } from 'react-redux';
import { Button, Row, Container, Col } from 'react-bootstrap'


import { createPolicy, claimPolicy, deleteClaimPolicy } from '../actions/actions'
import Polizas from './Polizas/Polizas'
import Reclamos from './Reclamos/Reclamos'
import Finanzas from './Finanzas/Finanzas';

const App = ( props ) => {
    
    const {polizas, reclamos, createPolicy, claimPolicy, deleteClaimPolicy, finanzas} = props;

    const [ botones, cambiarBoton ] = useState({});



    const cambiar = (boton, valor) => {
        
        cambiarBoton({
            
            [boton]: valor
        })



    }

    return ( 
        
        <Container>
            <Row className="mt-2">
                <Col md={{ span: 8, offset: 2 }}>
                    <Button variant="outline-secondary"
                            onClick={() => cambiar('addPolizas', !botones.addPolizas)}
                    >Agregar Poliza</Button>

                    <Button variant="outline-secondary"
                            onClick={() => cambiar('listaPolizas', !botones.listaPolizas)}
                    >Lista de Polizas</Button>
                    
                    <Button variant="outline-secondary"
                            onClick={() => cambiar('addReclamos', !botones.addReclamos)}
                    >Agregar Reclamo</Button>
                    
                    <Button variant="outline-secondary"
                            onClick={() => cambiar('listaReclamos', !botones.listaReclamos)}
                    >Lista de Reclamos</Button>

                    <Button variant="outline-secondary"
                            onClick={() => cambiar('finanzas', !botones.finanzas)}
                    >Finanzas</Button>                    
                </Col>
                
            </Row>
            

            

            <Row className="mt-3">
                
                    <Polizas 
                        polizas={polizas}
                        agregarPolizas={createPolicy}
                        botones={botones}
                    />

                    <Reclamos 
                        reclamos={reclamos}
                        agregarReclamos={claimPolicy}
                        borrarReclamo={ deleteClaimPolicy }
                        botones={botones}
                    />

                    <Finanzas 
                        finanzas={finanzas}
                        botones={botones}
                    />
                


            </Row>

        </Container>
            
            

     );
} 

const mapStateToProps = (state) => {
    return {
        polizas: state.policies,
        reclamos: state.claimHistory,
        finanzas: state.totalAmount

    }
}



export default connect(mapStateToProps, {createPolicy, claimPolicy, deleteClaimPolicy})(App)