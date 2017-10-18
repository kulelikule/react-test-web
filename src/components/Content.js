import React from 'react'

function Content({ children }) {
    return (
        <div>
            { children === '' ? '请点击菜单项' : `你点击的菜单名为: ${children}` }
        </div>
    )
}

export default Content