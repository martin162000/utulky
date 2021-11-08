import { combineReducers } from "redux";
import getUtulky from "./getUtulky"
import getData from "./getData"

const reducers = combineReducers ({
    utulky: getUtulky,
    data : getData
})

export default reducers;