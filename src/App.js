import './App.css';

const Tag = () => {
  return <span className='card__tag'>Envío Pagado</span>
}

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
       <div className='card'>
          <div className='card__top'>
             <figure>
               <img src="../assets/Imagen1.jpg" className='card__imagen' alt="mate" />
              </figure>
              <span className='card__price'>$ 1.200</span>
              <div className='card__content'>
              <span className='card__name'>Mate Artesanal</span><br />
              <span className='card__category'>Los Chicos del Barrio</span>
              <Tag/>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
