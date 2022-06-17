import { styled } from "@mui/material";
import { Outlet } from "react-router-dom"
import NavBar from "../Navbar"
import Main from "./componentes/Main"

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Layout = () => {
  return (
    <>
        <NavBar/>
        <Offset/>
        <Main>
            <Outlet/>
        </Main>
    </>
    
  )
}

export default Layout