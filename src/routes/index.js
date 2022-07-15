import { Route, Routes } from 'react-router-dom';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Layout from '../components/Layout';
import MangasPage from '../pages/MangasPage';
import Login from '../pages/Login';

const index = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route element={<Layout />}>
      <Route path="/" element={<MangasPage />} />
      <Route path="/mangas" element={<MangasPage />} />
      <Route path="/category/:categoryId" element={<MangasPage />} />
      <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Route>
  </Routes>
);

export default index;
