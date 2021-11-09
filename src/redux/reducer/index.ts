import { combineReducers } from "redux";
import getUtulky from "./getUtulky"
import getData from "./getData"
import getCurrentPage from "./getCurrentPage"

const reducers = combineReducers ({
    utulky: getUtulky,
    data: getData,
    currentPage: getCurrentPage
})

export default reducers;