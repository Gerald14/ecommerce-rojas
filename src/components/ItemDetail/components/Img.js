import {styled} from "@mui/material/styles"

const Img = styled('img')(({theme}) => ({
  width:'calc(100% - 14rem)',
  height:'auto',
  border:'1px solid #8a8a8a',
  margin:'2rem 7rem',
  boxShadow:'0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
  [theme.breakpoints.down('lg')]:{
    width:'calc(100% - 4rem)',
    margin:'1rem 2rem'
  }
  
}));

export default Img