const initialState = {
    status: false
}

const status = (state = initialState, action: {type: string}) => {
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
            return state ?? {
                status: false
            }
    }
}

export default status;