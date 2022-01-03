import { Routes, Route } from "react-router-dom";
import Home from './components/Home/index.jsx';
import Favorite from './components/Favorite_weather';
import Header from './components/Header';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/favorite' element={<Favorite/>}/>
      </Routes>
      </>
    
  );
}

export default App;
