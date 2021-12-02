import logo_avtaar from './logo_avtaar.jpg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create/Create';
import Home from './Home/Home';
import NotFound from './NotFound';
import NavBar from './NavBar';
import Edit from './Edit/Edit';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content-container">
          <div className="content">
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/assignments/:id">
                <Edit />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            {/* <Create /> */}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
