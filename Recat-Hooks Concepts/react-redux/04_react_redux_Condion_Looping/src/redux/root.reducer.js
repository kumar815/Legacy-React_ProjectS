import { combineReducers, compose } from "redux";
import * as userReducer from './user.reducer';

export const rootReducer = combineReducers({
    [userReducer.userFetureKey]:userReducer.reducer

})