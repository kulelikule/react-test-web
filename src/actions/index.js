export function navClick(index) {
    return {
        type: 'NAV_CLICK',
        payload: index
    }
}

export function terminate(id) {
    return {
        type: 'DEL_COMPANY',
        payload: id
    }
}