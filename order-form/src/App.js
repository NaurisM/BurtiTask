import Home from "./components/Home";
import Navbar from "./components/Navbar";
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const handleClick = () => {
  console.log('darojas');
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
