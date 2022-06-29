import { CardActions, IconButton, Tooltip } from "@mui/material";

import { Box } from "@mui/system";
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Typography from "@mui/material/Typography"
import cartContext from "../../context/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom"

const mangasImg = require.context('../../assets/images/mangas', true);


const Item = ({product}) => {

  const { addItem } = useContext(cartContext);

  const Navigate = useNavigate();

  const handleViewDetail = () => {
    Navigate(`/item/${product.id}`)
  }

  const handleAddToCart = () => {
    addItem({...product,quantity:1},1);
  }

  return (
    <Card sx={{ maxWidth: 335, '.MuiCardMedia-root':{height:'21rem',objectFit:'cover'}}} className="product">
      <CardMedia
        component="img"
        height="140"
        image={ mangasImg(`./${product.img}`) }
        alt={product.name}
      />
      <CardContent sx={{height:'inherit'}}>
        <Typography gutterBottom variant="h5" sx={{ fontSize: 16 }} component="div" textAlign='center'>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign='center'>
          {product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{display:{xs:'none',sm:'block'}}}>
        <Box component="div" sx={{display:'flex', gap:'.3rem',alignItems:'center'}}>
          <Tooltip title="Ver detalle">
            <IconButton 
              variant="contained" 
              aria-label="btn-view" 
              onClick={handleViewDetail}
              sx={{backgroundColor:'#272829',color:"white",'&:hover':{backgroundColor:'#272829',color:'#5398dc'}  }}>
              <RemoveRedEyeOutlinedIcon/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Agregar a carrito">
            <IconButton 
            variant="contained" 
            aria-label="btn-cart"
            onClick={handleAddToCart} 
            sx={{backgroundColor:'#272829',color:"white",'&:hover':{backgroundColor:'#272829',color:'#5398dc'} }}>
              <ShoppingCartOutlinedIcon/>
            </IconButton>
          </Tooltip>
        </Box>
      </CardActions>
    </Card>
  )
}

export default Item