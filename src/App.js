import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/MainCover/MainCover';
import MainAll from './components/MainAll/MainAll';
import ItemListContainer from './components/Products/ItemListContainer';

function App() {

  return (
    <div className="App">
        <Header/>
        <MainAll/>
        {/*<ItemListContainer greeting="Movies"/>*/}
        <Footer/>
    </div>
  );
}

export default App;

