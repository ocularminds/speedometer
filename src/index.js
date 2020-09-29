import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// Css
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.css';
import './assets/fonts/flaticon.css';
import './assets/css/nice-select.css';
import './assets/css/animate.css';
import './assets/css/style.css';
import '../node_modules/slick-carousel/slick/slick.css';

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
