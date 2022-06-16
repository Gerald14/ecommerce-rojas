import React, { useEffect, useState } from 'react'
import { MangasData } from '../../Data/MangasData';
import ItemList from '../ItemList'


const ItemListContainer  = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    //Simula peticion
    const MocAsync = new Promise((resolve)=>{
      setTimeout(() => {
        resolve(MangasData)
      }, 2000);
    });

    //Setea los datos obtenidos de la peticion
    MocAsync
    .then((products) => {
      setProducts(products);
      setLoading(false);
    })
    .catch((error) => console.error(error))
    
    return () => {
      setProducts();
    }
  }, [])

  if(loading) return <div>Cargando</div>
  
  return (
      
    <>
        <ItemList products={products}/>
    </>
  )
}

export default ItemListContainer 