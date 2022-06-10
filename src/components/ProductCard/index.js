import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { CardActions } from "@mui/material";
import ItemCount from "../ItemCount";
const mangasImg = require.context('../../assets/images/mangas', true);


const ProductCard = ({product}) => {
  return (
    <Card sx={{ maxWidth: 335, '.MuiCardMedia-root':{height:'auto'}}}>
      <CardMedia
        component="img"
        height="140"
        image={ mangasImg(`./${product.img}`) }
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" sx={{ fontSize: 16 }} component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <ItemCount stock={product.stock}/>
      </CardActions>
    </Card>
  )
}

export default ProductCard