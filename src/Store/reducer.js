import { FETCH_REQUEST_ACTION, FETCH_FAILURE_ACTION,FETCH_SUCCESS_ACTION,fetchFailureAction,fetchRequestAction,fetchSucsesstAction } from "./action";

const initialState = {
    data:[]
    
}


export  const dataReducer = (state=initialState,action) =>{
    // const {type,paylaod} = action;
    console.log('Action received in reducer:', action);
    switch(action.type){
        case FETCH_REQUEST_ACTION:
            return{...state};
            case FETCH_SUCCESS_ACTION:
                return {...state,data:action.paylaod}
                case FETCH_FAILURE_ACTION:
                    return{...state,data:action.paylaod};
                   default:
                    return state
    }

}