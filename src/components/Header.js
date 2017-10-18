import React from 'react'
import PropTypes from 'prop-types'

function Header({ items, navClick }) {
    let navItems = items.map(item => (
        <div className="nav-item" key={item} onClick={() => { navClick(item) }}>{item}</div>
    ))
    return (
        <div className="header">
            {navItems}
        </div>
    )
}

Header.propTypes = {
    items: PropTypes.array.isRequired
}

export default Header