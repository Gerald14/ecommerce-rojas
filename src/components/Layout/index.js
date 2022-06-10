import { Outlet } from "react-router-dom"
import NavBar from "../Navbar"
import Main from "./componentes/Main"

const Layout = () => {
  return (
    <>
        <NavBar/>
        <Main>
            <Outlet/>
        </Main>
    </>
    
  )
}

export default Layout