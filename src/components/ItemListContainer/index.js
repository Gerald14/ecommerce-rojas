import { useEffect, useState } from 'react';
import {
  collection, getDocs, orderBy, query, where,
} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList';
import { database } from '../../firebase';
import LoaderList from './components/LoaderList';

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const filter = categoryId ? query(collection(database, 'mangas'), where('category', '==', categoryId), orderBy('title', 'asc')) : query(collection(database, 'mangas'), orderBy('title', 'asc'));
    const consulta = getDocs(filter);

    consulta.then((result) => {
      const mangas = result.docs.map((manga) => ({ ...manga.data(), id: manga.id }));
      setProducts(mangas);
      setLoading(false);
    });

    return () => {
      setProducts([]);
    };
  }, [categoryId]);

  if (loading) return <LoaderList />;

  return (
    <ItemList products={products} />
  );
}

export default ItemListContainer;
