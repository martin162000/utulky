import { combineReducers } from "redux";
//import { selectedMovie } from "../actions/actions";
import getUtulky from "./getUtulky"

const reducers = combineReducers ({
    utulky: getUtulky
})

export default reducers;