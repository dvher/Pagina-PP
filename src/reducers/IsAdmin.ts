const initialState = {
    status: false,
    user: false,
    name: ''
}

const status = (state = initialState, action: {type: string, name?: string}) => {
    switch(action.type) {
        case 'SET_ADMIN':
            return {
                ...state,
                status: true,
                user: true,
                name: action.name ?? ''
            };
        case 'UNSET_ADMIN':
            return {
                ...state,
                status: false,
                user: false,
                name: ''
            }
        case 'SET_USER':
            return {
                ...state,
                status: false,
                user: true,
                name: action.name ?? ''
            }
        default:
            return state ?? {
                status: false,
                user: false,
                name: ''
            }
    }
}

export default status;