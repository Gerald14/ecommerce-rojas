import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail';
import { database } from '../../firebase';
import LoaderDetail from './components/LoaderDetail';

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    const consulta = getDoc(doc(database, 'mangas', itemId));

    consulta.then((manga) => {
      setProduct({ id: manga.id, ...manga.data() });
      setLoading(false);
    });

    return () => {
      setProduct();
    };
  }, [itemId]);

  if (loading) return <LoaderDetail />;

  return (
    <Container>
      <ItemDetail product={product} />
    </Container>
  );
}

export default ItemDetailContainer;
