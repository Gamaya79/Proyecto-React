import Button from "./Button";

const Banner = () => {
      return <div className='banner'>
      <div className='banner__content'>
        <h2 className='banner__title'>Consigue 20 % de descuento</h2>
        <Button className='banner__button'>Regístrate Gratis {"->"}</Button>
      </div>
    </div>
}

export default Banner;