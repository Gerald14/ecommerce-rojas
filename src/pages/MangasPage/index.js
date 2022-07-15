import { Grid, Typography } from '@mui/material';
import Filters from '../../components/Filters';
import ItemListContainer from '../../components/ItemListContainer';

function MangasPage() {
  return (
    <Grid container spacing={2} sx={{ width: '100%', p: { xs: 2, sm: 2 }, m: 0 }}>
      <Grid item xs={12} mt={3}>
        <Typography variant="h3" align="center" color="initial">Mangas</Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        <Filters />
      </Grid>
      <Grid item xs={12} md={9}>
        <ItemListContainer />
      </Grid>
    </Grid>
  );
}

export default MangasPage;
