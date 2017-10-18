import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from './Footer'
import { connect } from 'react-redux'
import * as ActionCreators from '../actions'

function App({ navItems, content, navClick }) {
    return (
        <div>
            <Header items={navItems} navClick={navClick}></Header>
            <Content>{content}</Content>
            <Footer/>
        </div>
    )
}

App.propTypes = {
    navItems: PropTypes.array.isRequired,
    content: PropTypes.string.isRequired,
    navClick: PropTypes.func.isRequired
}

export default connect(
    state => ({
        navItems: state.header,
        content: state.content
    }),
    ActionCreators
)(App)

