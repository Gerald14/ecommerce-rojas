import { Route, Routes } from "react-router-dom"
import Layout from "../components/Layout"
import MangasPage from "../containers/MangasPage"
import Home from "../containers/Home/Home"


const index = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/mangas" element={<MangasPage/>}/>
      </Route>
    </Routes>
  )
}

export default index