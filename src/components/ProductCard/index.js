import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
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
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.price}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ProductCard