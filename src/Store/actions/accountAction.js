export const FETCH_ACCOUNTS_REQUEST = 'FETCH_ACCOUNTS_REQUEST';
export const FETCH_ACCOUNTS_SUCCESS = 'FETCH_ACCOUNTS_SUCCESS';
export const FETCH_ACCOUNTS_FAILURE = 'FETCH_ACCOUNTS_FAILURE';




export const fetchAccountsRequest = (payload) => ({
  type: FETCH_ACCOUNTS_REQUEST,
  payload, // { pageNumber, pageSize, search, sortKey, sortOrder }
});

export const fetchAccountsSuccess = (data) => ({
  type: FETCH_ACCOUNTS_SUCCESS,
  payload: data,
});

export const fetchAccountsFailure = (error) => ({
  type: FETCH_ACCOUNTS_FAILURE,
  payload: error,
});
