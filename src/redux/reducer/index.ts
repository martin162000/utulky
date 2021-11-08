import { combineReducers } from "redux";
import getUtulky from "./getUtulky"
import getDataFirstPage from "./getDataFirstPage"

const reducers = combineReducers ({
    utulky: getUtulky,
    dataFirstPage : getDataFirstPage 
})

export default reducers;