import { combineReducers } from 'redux'


const initPolicies = [
    { id: 1, nombre: 'Alejandro', monto: 50 }
];





const policies = ( listPolicies = [], action ) => {
    
    switch(action.type){
        case 'CREATE_POLICY':
            return [...listPolicies, action.payload]
        case 'DELETE_POLICY':
            return listPolicies.filter( policy => policy.id !== action.payload.id)
        default:
            return listPolicies 
    }


}



const bank = ( totalAmount= 0, action ) => {

    switch( action.type ){
        case 'CREATE_POLICY':
            return totalAmount + action.payload.monto;
        case 'CREATE_CLAIM':
            return totalAmount - action.payload.monto;
        case 'DELETE_POLICY':
            return totalAmount - action.payload.monto;
        case 'DELETE_CLAIM':
            return totalAmount + action.payload.monto;
        default:
            return totalAmount
    }


}


const claimHistory = ( listClaims = [], action ) => {
    
    switch( action.type ){
        case 'CREATE_CLAIM':
            return [...listClaims, action.payload];
        case 'DELETE_CLAIM':
            return listClaims.filter( claim => claim.id !== action.payload.id );
        default:
            return listClaims;
    }

}




export default combineReducers({
    policies: policies,
    claimHistory: claimHistory,
    totalAmount: bank
})