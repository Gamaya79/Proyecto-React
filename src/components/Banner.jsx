import Button from "./Button";

const Banner = ({promo}) => {
      return <div className='banner'>
      <div className='banner__content'>
        <h2 className='banner__title'>{promo}</h2>
        <Button className='banner__button'>Regístrate Gratis {"->"}</Button>
      </div>
    </div>
}

export default Banner;