import './css/App.css';
import MovieCard from './components/MovieCard';
import Favorite from './pages/Favarites';
import Home from './pages/Home'
import {Routes,Route} from "react-router-dom"
import NavBar from './components/NavBar';

function App() {
  // const movieNumber = 2;
  // return (
  //   <>
  //   {movieNumber ===1 ? (<MovieCard movie={{
  //     title: "Saba's film",
  //     release_date: "2024",
  //   }}/>) :(

  //     <MovieCard movie={{
  //       title: "another's film",
  //       release_date: "2024",
  //     }}/>

  //   )}
  //</>
  //)
  return(
    <div>
      <NavBar/>
      <main className="main-content">
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorite/>}/>
      </Routes>
      </main>
    </div>
  )
}

export default App
