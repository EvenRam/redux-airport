import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** TODO: import REDUX **/
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

/** TODO: Add REDUCERS */
const planeList = (state = ["American"], action) => {
    console.log("airlineList reduce activated!", action)
    if (action.type === "ADD_AIRLINE"){
    //console.log(`The airline was ${action.payload}`);
    return [...state, action.payload];
}
return state
}

/** TODO: Create store */
const storeInstance = createStore(
    combineReducers({
        planeList,
      })
)

// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
         <Provider store={storeInstance}>
      <App />
    </Provider>
    </React.StrictMode>
);