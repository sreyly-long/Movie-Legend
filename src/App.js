// import './App.css';
import Navbars from './components/Navbar';
import './App.css'
import Footer from './components/Footer';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NowShowing from './pages/NowShowing';
import ComingSoon from './pages/ComingSoon';
import Contact from './pages/Contact';
import TopRate from './pages/TopRate';
import Popular from './pages/Popular';
import MovieDetails from './components/MovieDetails';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <header>
        <Navbars />
      </header>
      <main>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/now_showing' Component={NowShowing} />
          <Route exact path='/coming_soon' Component={ComingSoon} />
          <Route exact path='/popular' Component={Popular} />
          <Route exact path='/top_rate' Component={TopRate} />
          <Route exact path='/contact' Component={Contact} />
          <Route exact path='/detail/:id' Component={MovieDetails} />
          <Route exact path='/search' Component={Search} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
