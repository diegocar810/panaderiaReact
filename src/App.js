import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
// the hoc
import { withNamespaces } from 'react-i18next';

import Main from './components/MainComponent';
function App({ t }) {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Main />

      </div>
    </BrowserRouter>
  );
}

export default withNamespaces()(App);
