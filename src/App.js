import './App.css';
import AppContainer from './components/AppContainer';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
    
     <NavBar />

      <div className='banner'>
        <div className='banner__content'>
          <h2 className='banner__title'>Consigue 20 % de descuento</h2>
          <button className='banner__button'>Regístrate Gratis {"->"}</button>
        </div>
      </div>

      <AppContainer />

      <footer className='footer'>
        <h3 className='footer__items'>Política de privacidad</h3>
        <h3 className='footer__items'>Terminos y condiciones</h3>
        <h3 className='footer__items'>Otros</h3>
      </footer>

    </div>
  );
}

export default App;
