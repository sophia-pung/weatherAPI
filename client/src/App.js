import logo from './logo.svg';
import './App.css';
import Outfits from './components/outfits';

function App() {
  return (
    <div className="App">
      <h1>Camping Outfits</h1>
      <Outfits camper={"Sophia Pung"}/>
      <Outfits camper={"Carson Christiano"}/>
    </div>
  );
}

export default App;
