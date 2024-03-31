
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Recommended from './Components/Recommended';
import Upcoming from './Components/Upcoming';

function App() {
  return (
       <div className="App">
        <Navbar/>
      
      <div className='relative'>
        <Header/>
        <Recommended/>
      </div>
      <Upcoming/>
    </div>

  );
}

export default App;
