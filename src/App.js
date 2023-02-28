import Navbar from "./components/Navbar";
import "./App.css"
import {originals,action,AdventureMovies,AnimationMovies,ActionMovies,HorrorMovies} from'./url'
import Banner from "./components/banner/Banner";
import Row from "./components/raw_post/Row";
import Footer from "./components/Footer";
// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
// import Home from "./pages/Home"

function App() {
  return (
 
    <div>
      <Navbar/>
      <Banner/>
      <Row url={originals} title='Netflix Originals'/>
      <Row url={action} title='Action' isSmall/>
      <Row url={AdventureMovies} title='AdventureMovies' isSmall/>
      <Row url={AnimationMovies} title='AnimationMovies ' isSmall/>
      <Row url={HorrorMovies} title='HorrorMovies' isSmall/>
      <Row url={ActionMovies} title='ActionMovies' isSmall/>
      <Footer/> 
    </div>
      
  );
}

export default App;
