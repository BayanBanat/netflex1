// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar'
// import MovieList from './components/MovieList'
import FavList from './components/FavList';



function App() {
return(
  <>
  <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favlist' element={<FavList/>}/>

      </Routes>
  </>
)
}

export default App;


