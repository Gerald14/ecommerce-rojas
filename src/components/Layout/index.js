import { CartProvider } from "../../context/CartContext";
import Main from "./componentes/Main"
import NavBar from "../Navbar"
import { Outlet } from "react-router-dom"
import { styled } from "@mui/material";

const Offset = styled('div')(({ theme }) => {console.log(); return theme.mixins.toolbar});

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