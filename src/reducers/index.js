import { combineReducers } from 'redux'
import header from './header'
import content from './content'
import footer from './footer'

export default combineReducers({
    header,
    content,
    footer
})