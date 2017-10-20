export function navClick(index) {
    return {
        type: 'NAV_CLICK',
        payload: index
    }
}

export function terminate(id) {
    return {
        type: 'DEL_COMPANY',
        payload: {
            promise: fetch('/mock/del'),
            id
        }
    }
}

// export function terminate(id) {
//     return async function(dispatch) {
//         await fetch('/mock/del')
//         dispatch(delCompany(id))
//     }
// }
//
// function delCompany(id) {
//     return {
//         type: 'DEL_COMPANY',
//         payload: id
//     }
// }