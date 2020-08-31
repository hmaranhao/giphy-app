const INITIAL_STATE = { list: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return { list: [...state.list, action.payload] }
        case 'REMOVE_FAVORITE':
            return { list: state.list.filter(fav => fav.id !== action?.payload?.id) }
        case 'RESET':
            return INITIAL_STATE
        default:
            break
    }

    return state
}