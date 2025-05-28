
export const FETCH_TEMPLATES_REQUEST = "FETCH_TEMPLATES_REQUEST";
export const FETCH_TEMPLATES_SUCCESS = "FETCH_TEMPLATES_SUCCESS";
export const FETCH_TEMPLATES_FAILURE = "FETCH_TEMPLATES_FAILURE";



export const fetchTemplatesRequest = ({ visibilityScope, lastId = "" }) => ({
  type: FETCH_TEMPLATES_REQUEST,
  payload: { visibilityScope, lastId },
});

export const fetchTemplatesSuccess = (templates, lastId) => ({
  type: FETCH_TEMPLATES_SUCCESS,
  payload: { templates, lastId },
});

export const fetchTemplatesFailure = (error) => ({
  type: FETCH_TEMPLATES_FAILURE,
  payload: error,
});
