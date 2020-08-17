import React from 'react';
import i18n from './i18n';
import logo from './logo.svg';
import './App.css';
// the hoc
import { withNamespaces } from 'react-i18next';
function App({ t }) {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  return (
    <div className="App">
          <div>
      <button onClick={() => changeLanguage('es')}>es</button>
      <button onClick={() => changeLanguage('en')}>en</button>
      <h1>{t('Welcome to React')}</h1>
    </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withNamespaces()(App);
