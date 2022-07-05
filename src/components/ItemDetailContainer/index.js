import {collection, doc, getDoc} from 'firebase/firestore'
import { useEffect, useState } from "react";

import { Container } from "@mui/material";
import ItemDetail from "../ItemDetail";
import { database } from "../../firebase";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  let { itemId } = useParams();

  useEffect(() => {
    
    setLoading(true)
    const consulta = getDoc(doc(database,"mangas",itemId));

    consulta.then((manga) => {
      console.log('manga',manga)
      setProduct({id:manga.id, ...manga.data()})
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