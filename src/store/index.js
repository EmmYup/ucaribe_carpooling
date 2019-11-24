import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleWare from 'redux-saga'
import rootReducer from '../redux/reducers'
import rootSaga from '../redux/sagas'
import logger from '../middleware/logger'

const sagaMiddleware = createSagaMiddleWare()
const middlewares = [logger, sagaMiddleware]

const appliedMiddlewares = applyMiddleware(...middlewares)

const store = createStore(rootReducer, compose(appliedMiddlewares))

sagaMiddleware.run(rootSaga)

export default store
