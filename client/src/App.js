import './App.css';
import WelcomePage from './welcomePage';
import Outfits from './components/outfits';
import Weather from './components/weather';

function App() {
  return (
    <div className="App">
      <h1>Camping Outfits</h1>
      <Outfits camper={"Sophia Pung"}/> {/* add shirt and custom bottoms */}
      <Outfits camper={"Carson Christiano"}/>
      <Weather />
    </div>
  );
}

export default App;
