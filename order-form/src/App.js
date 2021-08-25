//import './App.css';
import Home from "./components/Home";

const handleClick = () => {
  console.log('darojas');
}

function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="header">
          <h1>Order form</h1>
          <button onClick={handleClick}>Back</button>
        </div>
        <hr/>
        <Home />
      </div>
    </div>
  );
}

export default App;
