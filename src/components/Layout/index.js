import { styled } from "@mui/material";
import { Outlet } from "react-router-dom"
import { CartProvider } from "../../context/CartContent";
import NavBar from "../Navbar"
import Main from "./componentes/Main"

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Layout = () => {
  return (
    <CartProvider>
        <NavBar/>
        <Offset/>
        <Main>
            <Outlet/>
        </Main>
    </CartProvider>
    
  )
}

export default Layout