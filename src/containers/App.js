import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import { connect } from 'react-redux'
import * as ActionCreators from '../actions'

function App({ navItems, content, navClick }) {
    return (
        <div>
            <Header items={navItems} navClick={navClick}></Header>
            <Content str={content}></Content>
        </div>
    )
}

export default connect(
    state => ({
        navItems: state.header,
        content: state.content
    }),
    ActionCreators
)(App)

