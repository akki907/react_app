import {GET_ERRORS} from './types'
import { SET_CURRENT_USER} from './types'
import axios from "axios";
export const create_user = (userData,history)=> dispatch =>{
     axios
      .post("/api/create", userData)
      .then(user => history.push('/login'))
      .catch(err => {
        dispatch({
          type:GET_ERRORS,
          payload:err.response.data.message
        })
      });
}


export const get_list = (history)=> dispatch =>{
  axios
   .get("/api/list")
   .then(res => {
     const token  = res.data.token
     localStorage.setItem('jwtToken',token)
    //@ set this to header for Header for future purpose
    setAuthToken(token)
    const decoded = jwt_decode(token)
    dispatch(setCurrentUser(decoded))
   }
  )
   .catch(err => {
     dispatch({
       type:GET_ERRORS,
       payload:err.response.data.message
     })
   });
}

export const setCurrentUser = decoded =>{
  return {
    type: SET_CURRENT_USER,
    payload:decoded
  }
}

export const get_by_id = (id)=>dispatch=>{
    axios
    .get(`/api/${id}`)
    .then(res => {
     dispatch(setCurrentUser(decoded))
    }
   )
    .catch(err => {
      dispatch({
        type:GET_ERRORS,
        payload:err.response.data.message
      })
    });
}


export const update = (id,data)=>dispatch=>{
    axios
    .put(`/api/${id}`,data)
    .then(res => {
     dispatch(setCurrentUser(decoded))
    }
   )
    .catch(err => {
      dispatch({
        type:GET_ERRORS,
        payload:err.response.data.message
      })
    });
  }

  export const delet_by_id = (id)=>dispatch=>{
    axios
    .delete(`/api/${id}`)
    .then(res => {
     dispatch(setCurrentUser(decoded))
    }
   )
    .catch(err => {
      dispatch({
        type:GET_ERRORS,
        payload:err.response.data.message
      })
    });
  }