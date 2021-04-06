import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListAccountHolder from './components/ListAccountHolder';
import CreateAccountHolder from './components/CreateAccountHolder';
import ViewAccountHolder from './components/ViewAccountHolder';

function App() {
  return (
    <div>
        <Router>
              
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListAccountHolder}></Route>
                          <Route path = "/accountholders" component = {ListAccountHolder}></Route>
                          <Route path = "/add-accountholder/:id" component = {CreateAccountHolder}></Route>
                          <Route path = "/view-accountholder/:id" component = {ViewAccountHolder}></Route>
                          {/* <Route path = "/update-accountholder/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                 </div>              
        </Router>
    </div>
    
  );
}

export default App;