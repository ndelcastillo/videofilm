import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainAll from './components/MainAll/MainAll';
import ItemListContainer from './components/Products/ItemListContainer';
import ItemDetailContainer from './components/ProductsDetail/ItemDetailContainer';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainAll/>} />
          {/*<Route path='/' element={<ItemListContainer />} />*/}
          <Route path='/movies/top100/' element={<ItemListContainer greeting="VIDEOFILM TOP 100 MOVIES" />} />
          <Route path='/movies/top100/:id' element={<ItemDetailContainer />} />
          <Route path='*' element={<div className='mt-5 pt-5'><h1 style={{color:"white"}}>404: Te perdiste</h1></div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

