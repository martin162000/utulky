import { combineReducers } from "redux";
import getUtulky from "./getUtulky"

const reducers = combineReducers ({
    utulky: getUtulky
})

export default reducers;