import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Favorite from './components/Favorite/Favorite';
import Header from './components/Header/Header';


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
