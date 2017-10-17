export default (state = '', action) => {
    switch(action.type) {
        case 'NAV_CLICK':
            return action.payload
        default:
            return state
    }
}