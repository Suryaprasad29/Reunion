import Navbar from './components/Navbar';
import './App.css';
import House from './components/House';
import Searchbar from './components/Searchbar.jsx';
import Searchfilter from './components/Searchfilter';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='new'>
      <Searchbar />
      <Searchfilter />
      <House />
      </div>
    </div>
  );
}

export default App;
