import {styled} from "@mui/material/styles"

const Img = styled('img')(({theme}) => ({
  width:'calc(100% - 8rem)',
  height:'auto',
  border:'1px solid #cdcccc',
  margin:'2rem 4rem',
  boxShadow:'0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
  [theme.breakpoints.down('lg')]:{
    width:'calc(100% - 2rem)',
    margin:'1rem'
  }
  
}));

export default Img