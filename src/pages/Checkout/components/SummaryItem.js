import {
  Box, Card, CardMedia, Grid, Typography,
} from '@mui/material';
import PropTypes from 'prop-types';

const mangasImg = require.context('../../../assets/images/mangas', true);

function SummaryItem({ item }) {
  return (
    <Grid container m={0}>
      <Grid item xs={5} sm={6} md={4}>
        <Card sx={{ width: { xs: 60, md: 90 }, marginRight: 'auto' }}>
          <CardMedia
            component="img"
            sx={{ width: { xs: 60, md: 90 } }}
            image={mangasImg(`./${item.img}`)}
            alt="Live from space album cover"
          />
        </Card>
      </Grid>
      <Grid item xs={7} sm={6} md={8} className="cart-item-detail">
        <Box sx={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '.5rem 1rem',
        }}
        >
          <Typography variant="h6" color="initial">
            {item.title}
          </Typography>
          <Typography variant="subtitle2" color="initial">
            {item.editorial}
          </Typography>
          <Typography variant="subtitle1" color="primary">
            {`S/.${item.price.toFixed(2)}`}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

SummaryItem.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    editorial: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default SummaryItem;
