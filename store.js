import { createStore } from "./core.js";
import reducer from "./reducer.js";
import widthLogger from './logger.js'

const { attach, connect, dispath } = createStore(widthLogger(reducer))

window.dispath = dispath

export {
    attach,
    connect
}