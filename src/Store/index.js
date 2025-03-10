import createSagaMiddleware from "redux-saga";
import watchFetchData from "./saga";
import { configureStore } from "@reduxjs/toolkit";

import root from "./allSaga";
import rootReducer from "./allReducer";


function createStore(){
    const sagaMiddleware = createSagaMiddleware();  
    const getStore = configureStore({reducer:rootReducer(), middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)})
    sagaMiddleware.run(root);
    return getStore;
}
export default createStore


// function createStore(preloadedState: object): Store<ApplicationState> {
//     const sagaMiddleware = createSagaMiddleware();
//     const middleware = ( getDefaultMiddleware: any ) => [sagaMiddleware];
//     const store =  configureStore({
//       reducer: rootReducer(),
//       devTools: process.env.NODE_ENV !== 'production',
//       preloadedState,
//       middleware
//     })
//     sagaMiddleware.run(rootSaga);
//     return store;
//   }
  