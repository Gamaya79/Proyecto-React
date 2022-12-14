import './App.css';
import AppContainer from './components/AppContainer';
import NavBar from './components/NavBar';
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
    
     <NavBar />
     <Banner promo = "Consigue 20 % de descuento"/>
     <Counter onAdd={() => console.log('Agregando')} stock={5}/>
     <main className='content'>
       <AppContainer />
     </main>
     <Footer />

    </div>
  );
}

export default App;
