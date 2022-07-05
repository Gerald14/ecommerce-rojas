import {collection, getDocs} from 'firebase/firestore'
import { useEffect, useState } from "react";

import { Container } from "@mui/material";
import ItemDetail from "../ItemDetail";
import { MangasData } from "../../Data/MangasData";
import { database } from "../../firebase";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  let { itemId } = useParams();

  useEffect(() => {
    
    setLoading(true)
    const consulta = getDocs(collection(database,"mangas"))

    consulta.then((result) => {
      let mangas = result.docs.map(manga =>({...manga.data(),id:manga.id}));
      const  mangaObj = mangas.filter(manga => manga.id === itemId)[0];
      setProduct(mangaObj)
      setLoading(false);
    })
    return () => {
      setProduct();
    }
  }, [])
  
  if(loading) return <div>Cargando</div>

  return (
    <Container >
      <ItemDetail product={product}/>
    </Container>
  )
}

export default ItemDetailContainer