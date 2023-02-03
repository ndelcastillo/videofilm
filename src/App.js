import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainAll from './components/MainAll/MainAll';
import ItemListContainer from './components/Products/ItemListContainer';
import ItemDetailContainer from './components/ProductsDetail/ItemDetailContainer';
import LoginContainer from './components/Login/LoginContainer';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainAll/>} />
          {/*<Route path='/' element={<ItemListContainer />} />*/}
          <Route path='/categoria/movies' element={<ItemListContainer greeting="VIDEOFILM MOVIES" />} />
          <Route path='/genero/:gen' element={<ItemListContainer greeting="VIDEOFILM MOVIES" />} />
          <Route path='/movies/:id' element={<ItemDetailContainer />} />
          <Route path='/login' element={<LoginContainer />} />
          <Route path='*' element={<div className='mt-5 pt-5'><h1 style={{color:"white"}}>404: Te perdiste</h1></div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

