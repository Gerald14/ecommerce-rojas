import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { CardActions, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom"
const mangasImg = require.context('../../assets/images/mangas', true);


const Item = ({product}) => {

  const Navigate = useNavigate();

  const handleViewDetail = () => {
    Navigate(`${product.id}`)
  }

  const handleAddToCart = () => {

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
          <IconButton 
            variant="contained" 
            aria-label="btn-view" 
            onClick={handleViewDetail}
            sx={{backgroundColor:'#272829',color:"white",'&:hover':{backgroundColor:'#272829'}  }}>
            <RemoveRedEyeOutlinedIcon/>
          </IconButton>
          <IconButton variant="contained" aria-label="btn-cart" sx={{backgroundColor:'#272829',color:"white",'&:hover':{backgroundColor:'#272829'} }}>
            <ShoppingCartOutlinedIcon/>
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  )
}

export default Item