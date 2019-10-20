import {combineReducers} from 'redux';
import tenantReducer from './tenantReducer';
import errorReducer from './errorReducer'
export default combineReducers({
    tenant_data: tenantReducer,
    errors: errorReducer
})