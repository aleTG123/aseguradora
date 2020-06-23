import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Reducers from './reducers/Reducers'
import App from './components/App'

ReactDOM.render(
    <Provider store={createStore(Reducers)}>
        <App />
    </Provider>,    
    document.getElementById('root')
);
