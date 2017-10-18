import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CompanyList from '../components/CompanyList'
import DelCompanyTip from '../components/DelCompanyTip'
import { terminate } from '../actions'

function Footer({ footer, terminate }) {
    return (
        <div className="footer">
            <CompanyList items={ footer.companys } delCompany={ terminate }></CompanyList>
            <DelCompanyTip>{ footer.tip }</DelCompanyTip>
        </div>
    )
}

Footer.PropTypes = {
    footer: PropTypes.object.isRequired,
    terminate: PropTypes.func.isRequired
}

let mapStateToProps = state => ({
    footer: state.footer
})

let mapDispatchToProps = {
    terminate
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)