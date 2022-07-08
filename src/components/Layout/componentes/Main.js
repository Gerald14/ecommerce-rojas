import { styled } from '@mui/material/styles'

const Main = styled('main')(({theme}) => ({
    flexGrow:1,
    width:'100%',
    marginLeft:'0px',
    height:`calc(100% - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)` 
}))

export default Main