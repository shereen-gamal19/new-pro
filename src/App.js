import logo from './logo.svg';
import './App.css';
import * as ReactBootstrap from 'react-bootstrap';

//we want to import css
import 'bootstrap/dist/css/bootstrap.min.css';
// we will use bootstrap to build our UI
import {Button , Breadcrumb ,Form , Nav ,Card} from 'react-bootstrap';

import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>would you rather game</h1>
    
      </header>
    </div>
  );
}

export default App;
