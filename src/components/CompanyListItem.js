import React from 'react'
import PropTypes from 'prop-types'
function CompanyListItem({ company, onDel }) {
    return (
        <div>
            <div className="company-item" onClick={() => { onDel(company.id) }}>
                <span>{ company.name }</span>
                <span className="company-del"></span>
            </div>
        </div>
    )
}

CompanyListItem.propTypes = {
    company: PropTypes.object.isRequired,
    onDel: PropTypes.func.isRequired
}

export default CompanyListItem