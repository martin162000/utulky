const getUtulky = (state = false, action:any) => {
    switch (action.type) {
        case "ADD_UTULKY":
            return action.data
    
        default:
            return state
    }

}

export default getUtulky