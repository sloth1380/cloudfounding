import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MyRoutes as Routes } from './routes';

const App: FunctionComponent = () =>  {
  return (
    <>
      <Router>
        <Routes/>
      </Router>
    </>
  );
}

export default App;
