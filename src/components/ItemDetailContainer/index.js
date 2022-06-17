import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from 'react-router-dom';
import { MangasData } from "../../Data/MangasData";
import { Container } from "@mui/material";


const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  let { mangaId } = useParams();

  useEffect(() => {
    
    const MocAsync = new Promise((resolve)=>{
      setTimeout(() => {
        const mangaObj = MangasData.filter(manga => manga.id == mangaId)[0];
        resolve(mangaObj)
      }, 2000);
    });

    MocAsync
    .then((product) => {
      setProduct(product);
      setLoading(false);
    })
    .catch((error) => console.error(error))
  
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