import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Status from './components/Status.react';
import registerServiceWorker from './registerServiceWorker';


// ========================================

ReactDOM.render(
  <Status info="hello"/>,
  document.getElementById('root')
);


registerServiceWorker();
