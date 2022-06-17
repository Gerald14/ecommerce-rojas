
import { styled } from '@mui/material/styles'

const Main = styled('main')(({theme}) => ({
    flexGrow:1,
    width:'100%',
    marginLeft:'0px',
    marginTop: theme.mixins.toolbar.minHeight
}))

export default Main