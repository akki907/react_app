import {
    ADD_TENANT,
    TENANTS,
    TENANT,
    DELETE_TENANT,
    LOADING
  } from '../actions/types';
  
  const initialState = {
    tenants: [],
    tenant: {},
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case LOADING:
        return {
          ...state,
          loading: true
        };
      case TENANTS:
        return {
          ...state,
          tenants: action.payload,
          loading: false
        };
      case TENANT:
        return {
          ...state,
          tenant: action.payload,
          loading: false
        };
      case ADD_TENANT:
        return {
          ...state,
          tenants: [action.payload, ...state.tenants]
        };
      case DELETE_TENANT:
        return {
          ...state,
          tenants: state.tenants.filter(item => item._id !== action.payload)
        };
      default:
        return state;
    }
  }