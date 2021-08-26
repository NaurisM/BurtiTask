import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from "./components/Details";

// const handleClick = () => {
//   console.log('darojas');
// }

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/details/:code">
              <Details />
            </Route> 
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
