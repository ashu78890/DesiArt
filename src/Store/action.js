export const FETCH_REQUEST_ACTION = "FETCH_REQUEST_ACTION";
export const FETCH_SUCCESS_ACTION = "FETCH_SUCCESS_ACTION"
export const FETCH_FAILURE_ACTION = "FETCH_FAILURE_ACTION"



export const fetchRequestAction = () =>{
    console.log("another call")
     return{
        type:FETCH_REQUEST_ACTION
     }
}

export const fetchSucsesstAction = (data) =>{
    return{
       type:FETCH_SUCCESS_ACTION,
       payload:data
    }
}

export const fetchFailureAction = (error) =>{
    return{
       type:FETCH_FAILURE_ACTION,
       payload:error
    }
}