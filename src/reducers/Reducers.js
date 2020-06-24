import { combineReducers } from 'redux'

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
    let newAmount = 0
    switch( action.type ){
        case 'CREATE_POLICY':
             //newAmount = totalAmount + action.payload.monto;
            return (totalAmount += action.payload.monto);
        case 'CREATE_CLAIM':
             newAmount = totalAmount - action.payload.monto;
            return newAmount;
        case 'DELETE_POLICY':
             newAmount = totalAmount - action.payload.monto;
            return newAmount;
        case 'DELETE_CLAIM':
             newAmount = totalAmount + action.payload.monto;
            return newAmount;
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