import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import reportWebVitals from './reportWebVitals';
import App from "./App";
import configureStore from "./store/configureStore";
import LoadingPage from './screens/LoadingPage';
import { startSetNotes } from './actions/notes';
require('dotenv').config();

const store = configureStore();

ReactDOM.render(<LoadingPage />, document.getElementById('root'));

store.dispatch(startSetNotes()).then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
