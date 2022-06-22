import { Route, Routes } from "react-router-dom"
import Layout from "../components/Layout"
import MangasPage from "../containers/MangasPage"
import ItemDetailContainer from "../components/ItemDetailContainer"
import Cart from "../containers/Cart"


const index = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<MangasPage/>}/>
        <Route path="/mangas" element={<MangasPage/>}/>
        <Route path="/category/:categoryId" element={<MangasPage/>}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<Cart/>} />
      </Route>
    </Routes>
  )
}

export default index