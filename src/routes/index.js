import { Route, Routes } from "react-router-dom"
import Layout from "../components/Layout"
import MangasPage from "../containers/MangasPage"
import Home from "../containers/Home/Home"
import ItemDetailContainer from "../components/ItemDetailContainer"


const index = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<MangasPage/>}/>
        <Route path="/mangas" element={<MangasPage/>}/>
        <Route path="/category/:categoryId" element={<MangasPage/>}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
      </Route>
    </Routes>
  )
}

export default index