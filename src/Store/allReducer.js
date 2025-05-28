import { combineReducers } from "redux";
import { dataReducer } from "./reducer";
import templateReducer from "./reducers/templateReducer";
import { accountReducer } from "./reducers/accountReducer";

  const rootReducer =()=> combineReducers({
    data:dataReducer,
    templates: templateReducer,
    account:accountReducer
})

export default rootReducer
   
