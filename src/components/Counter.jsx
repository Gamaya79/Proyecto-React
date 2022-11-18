import React, {useState, useEffect} from 'react';
import Button from './Button';

const Counter = ({stock, onAdd}) => {

      const [contador, setContador] = useState(0);
      const [mensaje, setMensaje] = useState(false);

      const handleAdd = () => {
            if (contador < stock){
            setContador(contador + 1);
            };
      };

      const handleSubstract = () => {
            if(contador > 0)
            setContador(contador - 1);
      };

      useEffect(()=>{
            console.log(stock)
      },[]);

      return (
            <div className='grid'>
                  {mensaje ? <span>Obten 10 % de descuento</span> : null}
                  <Button onClick={()=> handleAdd()}>Sumar</Button>
                  <span>{ contador }</span>
                  <Button onClick={()=> handleSubstract()}>Restar</Button>
                  <Button onClick ={() => {
                        if(contador)
                        onAdd()
                        }} >Agregar al Carrito</Button>
            </div>
      );
}

export default Counter;

