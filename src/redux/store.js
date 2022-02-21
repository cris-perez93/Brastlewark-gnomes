import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import reducers from './reducers';
import persistState from 'redux-localstorage';

const store = createStore(
    reducers,
    compose(applyMiddleware(thunk), persistState(),
        typeof window === 'object' &&
            window.hasOwnProperty('__REDUX_DEVTOOLS_EXTENSION__') ?
            window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        
    ),
    
    
);

export default store;