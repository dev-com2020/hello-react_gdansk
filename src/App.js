import './App.css';
import Catalog from './Catalog';
import About from './About';
import { Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1 className='App-title'>Katalog aplikacji</h1>
       <nav>
        <ul>
          <li><Link to='/'>Catalog</Link></li>
          <li><Link to='/about'>O nas</Link></li>
        </ul>
       </nav>
      </header>
      <Routes>
        <Route path='/' element={<Catalog />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
