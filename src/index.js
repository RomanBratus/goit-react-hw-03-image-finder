import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import './index.css';

const modalRoot = document.getElementById('modal-root');

if (!modalRoot) {
  const newModalRoot = document.createElement('div');
  newModalRoot.id = 'modal-root';
  document.body.appendChild(newModalRoot);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
