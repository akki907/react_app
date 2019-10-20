import {
  GET_ERRORS,
  TENANTS,
  TENANT,
  LOADING,
  CLEAR_ERRORS,
  DELETE_TENANT
} from './types'
import axios from "axios";
export const create_user = (userData, history) => dispatch => {
  axios
    .post("/api/create", userData)
    .then(user => history.push('/'))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data.message
      })
    });
}


export const get_list = () => dispatch => {
  dispatch(setLoading());
  axios
    .get("/api/list")
    .then(res => {
      dispatch({
        type: TENANTS,
        payload: res.data.data
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data.message
      })
    });
}



export const get_by_id = (id) => dispatch => {
  dispatch(setLoading());
  axios
    .get(`/api/${id}`)
    .then(res => {
      dispatch({
        type: TENANT,
        payload: res.data.data
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data.message
      })
    });
}


export const update_info = (data,history) => dispatch => {
  axios
    .put(`/api/${data.id}`, data)
    .then(res => {
      history.push('/')
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data.message
      })
    });
}

export const delet_by_id = id => dispatch => {
  axios
    .delete(`/api/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_TENANT,
        payload: id
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data.message
      })
    });
}

// Set loading state
export const setLoading = () => {
  return {
    type: LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};