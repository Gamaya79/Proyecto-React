const NavBar = () => {
      return  <header className='header'>
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
}

export default NavBar