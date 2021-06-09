//we will put our thunks here in this file

import thunk from 'redux-thunk'
import logging from './logging'
import { applyMiddleware } from 'redux'
//we will add our all thunks in the applyMiddleware 
export default applyMiddleware (
    thunk,
    logging
)