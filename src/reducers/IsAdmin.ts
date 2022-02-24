const initialState = {
    status: false
}

const status = (state = initialState, action: {type: string}) => {
    console.log(action)
    switch(action.type) {
        case 'SET_IS_ADMIN':
            return {
                ...state,
                status: true
            };
        case 'UNSET_IS_ADMIN':
            return {
                ...state,
                status: false
            }
        default:
            return state;
    }
}

export default status;