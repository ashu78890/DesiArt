import {
    FETCH_TEMPLATES_REQUEST,
    FETCH_TEMPLATES_SUCCESS,
    FETCH_TEMPLATES_FAILURE,
  } from "../actions/templateActions";
  

  

const initialState = {
    templates: [],
    lastId: "",
    loading: false,
    error: null,
  };
  
  const templateReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_TEMPLATES_REQUEST":
        return { ...state, loading: true, 
            templates: action.payload.lastId ? state.templates : [] ,
            error: null };
  
      case "FETCH_TEMPLATES_SUCCESS":
        return {
          ...state,
          templates: action.payload.lastId
            ? [...state.templates, ...action.payload.data.records] 
            : action.payload.data.records, 
          lastId:
            action.payload.data.records.length > 0
              ? action.payload.data.records[action.payload.data.records.length - 1]._id
              : "", 
          loading: false,
        };
  
      case "FETCH_TEMPLATES_FAILURE":
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export default templateReducer;
  