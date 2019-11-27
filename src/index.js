import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import '../src/scss/style.scss';
import MainContainer from './components/Main/Container/MainContainer';
import * as serviceWorker from './serviceWorker';
import "antd/dist/antd.css";
import createSagaMiddleware from 'redux-saga';
import rootReducer from './store/reducers/rootReducer';
import rootSaga from './store/sagas/rootSaga';
import JavascriptTimeAgo from 'javascript-time-ago'

// The desired locales.
import en from 'javascript-time-ago/locale/en'
import ru from 'javascript-time-ago/locale/ru'

// Initialize the desired locales.
JavascriptTimeAgo.locale(en)
JavascriptTimeAgo.locale(ru)

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga)
ReactDOM.render(
    <Provider store={store}>
        <MainContainer/>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
