import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/MainCover/MainCover';
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
          <Route path='/movies' element={<ItemListContainer greeting="MOVIES MOOD"/>} />
          <Route path='/movies/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

