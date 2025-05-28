import { FETCH_ACCOUNTS_REQUEST, FETCH_ACCOUNTS_SUCCESS, FETCH_ACCOUNTS_FAILURE } from '../actions/accountAction';

const initialState = {
  loading: false,
  data: [],
  pageNumber: 0,
  totalPages: 1,
  error: '',
};

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACCOUNTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_ACCOUNTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.payload.records],
        pageNumber: action.payload.pageNumber,
        totalPages: action.payload.totalPages,
      };
    case FETCH_ACCOUNTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
