import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { MangasData } from '../../Data/MangasData';
import ItemList from '../ItemList'


const ItemListContainer  = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  let { categoryId } = useParams();

  useEffect(() => {

    //Simula peticion
    const MocAsync = new Promise((resolve)=>{
      setTimeout(() => {
        let mangas;
        console.log(categoryId)
        if(categoryId){
          mangas = MangasData.filter(manga => manga.category === categoryId);
        }else{
          mangas=MangasData
        }
        console.log('mangas',mangas)
        resolve(mangas)
      }, 2000);
    });

    //Setea los datos obtenidos de la peticion
    MocAsync
    .then((products) => {
      console.log(products)
      setProducts(products);
      setLoading(false);
    })
    .catch((error) => console.error(error))
    
    return () => {
      setProducts([]);
    }
  }, [categoryId])

  if(loading) return <div>Cargando</div>
  console.log('products',products)
  
  return (
        <ItemList products={products}/>
  )
}

export default ItemListContainer 