import Tag from "./Tag"

const Item = ({precio, nombre, categoria, imagen}) => {
      return  <div className='card'>
      <div className='card__top'>
         <figure>
           <img src={imagen} className='card__imagen' alt="mate" />
          </figure>
          <span className='card__price'>{precio}</span>
          <div className='card__content'>
          <span className='card__name'>{nombre}</span><br />
          <span className='card__category'>{categoria}</span>
          <Tag titulo="Envío Gratis"/>
        </div>
      </div>
    </div>
}

export default Item