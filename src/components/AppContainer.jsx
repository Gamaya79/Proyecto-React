import Item from "../components/Item";
import { useEffect, useState } from "react";
import { getProducts } from "../api/products";

const AppContainer = () => {
      const [productos, setProductos] = useState ([])

      useEffect(()=>{
            getProducts()
            .then(items => setProductos(items))
            .catch(e => console.log(e))
      },[])

      return <section className='gallery'>
            {productos.map((producto) => {
                  return <Item 
                        key= {producto.id}
                        precio={producto.precio} 
                        nombre={producto.nombre}
                        categoria={producto.categoria}
                        imagen={producto.imagen}/>
            })}
      
       </section>
}

export default AppContainer