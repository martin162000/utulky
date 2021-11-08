const getData = (state = false, action:any) => {
    switch (action.type) {
        case "ADD_DATA":
            return action.data
    
        default:
            return state
    }

}

export default getData