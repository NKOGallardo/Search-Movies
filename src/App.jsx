import Home from './components/pages/Home';
import Favorites from './components/pages/Fovorites';
import './css/App.css';
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import { MovieProvider } from './contexts/MovieContexts';

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favorites" element={<Favorites />}/>
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
