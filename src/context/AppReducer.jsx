export default (state, action) => {
    switch(action.type){
        case "ADD_TRANSACTION": 
            return{
                ...state,
                transaction: [...state.transaction, action.payload],
            };
        case "DEL_TRANSACTION":    
            return{
                ...state,
                transaction: state.transaction.filter(
                    (transactions) => transactions.id !== action.payload
                ),
            };
        default:
            return state;
    }
};