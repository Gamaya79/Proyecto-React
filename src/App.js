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

        <Item
        precio={1200} 
        nombre="Mate Artesanal"
        categoria="Guitarra Criolla"
        imagen="../assets/Imagen2.jpg"
        />

        <Item
        precio={1200} 
        nombre="Mate Artesanal"
        categoria="Mike Wazowski"
        imagen="../assets/Imagen3.jpg"
        />

        <Item
        precio={1200} 
        nombre="Mate Artesanal"
        categoria="Bob Esponja"
        imagen="../assets/Imagen4.jpg"
        />

        <Item
        precio={1200} 
        nombre="Mate Artesanal"
        categoria="Garfield"
        imagen="../assets/Imagen5.jpg"
        />

        <Item
        precio={1200} 
        nombre="Mate Artesanal"
        categoria="Joaquín Sabina"
        imagen="../assets/Imagen6.jpg"
        />

        <Item
        precio={1200} 
        nombre="Mate Artesanal"
        categoria="Rey León"
        imagen="../assets/Imagen7.jpg"
        />

        <Item
        precio={1200} 
        nombre="Mate Artesanal"
        categoria="Lilo y Stitch"
        imagen="../assets/Imagen8.jpg"
        />

         </section>

      <footer className='footer'>
        <h3 className='footer__items'>Política de privacidad</h3>
        <h3 className='footer__items'>Terminos y condiciones</h3>
        <h3 className='footer__items'>Otros</h3>
      </footer>

    </div>
  );
}

export default App;
