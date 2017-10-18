import React from 'react'
import PropTypes from 'prop-types'
import CompanyListItem from './CompanyListItem'
function CompanyList({ items, delCompany }) {
    let companyItems = items.map(company => (
        <CompanyListItem company={company} key={ company.id } onDel={delCompany}/>
    ))
    return (
        <div className="company-list">
            合作公司：
            { companyItems }
        </div>
    )
}

CompanyList.propTypes = {
    items: PropTypes.array.isRequired,
    delCompany: PropTypes.func.isRequired
}

export default CompanyList