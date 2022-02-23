const initialState = {
    isAdmin: false
}

const isAdmin = (state = initialState, action: {type: string}) => {
    console.log(action)
    switch(action.type) {
        case 'SET_IS_ADMIN':
            return {
                ...state,
                isAdmin: true
            };
        case 'UNSET_IS_ADMIN':
            return {
                ...state,
                isAdmin: false
            }
        default:
            return state;
    }
}

export default isAdmin;