//Actions creator
export const createPolicy = ( {id, nombre, monto} ) => {
    
    //Action (poliza)
    return {
        type: 'CREATE_POLICY',
        payload: {
            id: id,
            nombre: nombre,
            monto: monto
        }
    }

}

//Action creator
export const deletePolicy = ( {id, monto} ) => {

    return {
        type: 'DELETE_POLICY',
        payload: {
            id: id,
            monto: monto
        }
    }

}



//Action creator
export const claimPolicy = ( {id, nombre, monto} ) => {

    return{
        type: 'CREATE_CLAIM',
        payload: {
            id: id,
            nombre: nombre,
            monto: monto
        }

    }

}


export const deleteClaimPolicy = ( {id, monto} ) => {

    return {
        type: 'DELETE_CLAIM',
        payload: {
            id: id,
            monto: monto
        }
    }

}
