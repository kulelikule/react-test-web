let initialState = {
    tip: '',
    companys: [{
        id: 0,
        name: '公司1'
    }, {
        id: 1,
        name: '公司2'
    }, {
        id: 2,
        name: '公司3'
    }]
}
export default (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case 'DEL_COMPANY_FULFILLED':
            action.payload.json().then(r => {
                console.log(r)
            })
            let tip = ''
            let companys = state.companys.filter(company => {
                let res = company.id !== action.payload.id
                res === false && (tip = `你与 ${company.name} 解除了合作关系`)
                return res
            })
            return Object.assign({}, state, {
                tip,
                companys
            })
        default:
            return state
    }
}