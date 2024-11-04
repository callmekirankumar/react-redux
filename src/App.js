import './App.css';
import Home from './Home';

function App() {
  const value=12;
  return (
    <div className="App">
      <Home value={value}/>
    </div>
  );
}

export default App;
