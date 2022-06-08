import { Route, Routes } from "react-router-dom"
import Layout from "../components/Layout"
import Home from "../containers/Home/Home"


const index = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
      </Route>
    </Routes>
  )
}

export default index