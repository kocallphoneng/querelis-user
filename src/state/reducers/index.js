import { combineReducers } from "redux"
import stateReducer from "./stateReducer"
import userReducer from "./userReducer"

const reducers = combineReducers({
    displayState: stateReducer,
    user: userReducer
})

export default reducers