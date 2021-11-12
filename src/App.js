import React from 'react';
//Routing
import { BrowserRouter as router } from 'react-router-dom';
//components
import Header from './components/Header';
import Home from './components/Home';

//styles
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
