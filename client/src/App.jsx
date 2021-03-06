import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Wall from './pages/Wall';

function App() {
  return (
      <Router>
          <div style={{height:"100vh", width:"100vw", display:"flex", verticalAlign:"center"}}>
              
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/wall" component={Wall} />
                  {/* <Route component={NoMatch} />  */}
              </Switch>
          </div>
      </Router>
  );
}

export default App;
