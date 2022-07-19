import React from 'react';
import ReactDOM from 'react-dom';
import './styles/_main.scss';
import reportWebVitals from './reportWebVitals';
import Routes from './routes';
import DarkModeContextProvider from './context/DarkModeContext';

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <Routes />
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
