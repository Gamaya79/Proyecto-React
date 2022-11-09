import './App.css';
import Item from "./components/Item"

function App() {
  return (
    <div className="App">
    
      <header className='header'>
        <img src="../assets/logomarmi.png" className='header__logo' alt="logo" />
        <div className='header__nav'>
          <h3>Mates</h3>
          <h3>Canastos</h3>
          <h3>Set Matero</h3>
        </div>
        <div className='header__buttons'>
          <button>Carrito</button>
        </div>
      </header>

      <div className='banner'>
        <div className='banner__content'>
          <h2 className='banner__title'>Consigue 20 % de descuento</h2>
          <button className='banner__button'>Regístrate Gratis {"->"}</button>
        </div>
      </div>
      <section className='gallery'>

        <Item
        precio={1200} 
        nombre="Mate Artesanal"
        categoria="Los Chicos del Barrio"
        imagen="../assets/Imagen1.jpg"
        />

      </section>

    </div>
  );
}

export default App;
