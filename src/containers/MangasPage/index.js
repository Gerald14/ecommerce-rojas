import { Grid, Typography } from '@mui/material'
import ItemListContainer from '../../components/ItemListContainer'

const MangasPage = () => {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} mt={3}>
        <Typography variant="h3" align='center' color="initial">Mangas</Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        Filtros
      </Grid>
      <Grid item xs={12} md={9}>
        <ItemListContainer/>
      </Grid>
    </Grid>
  )
}

export default MangasPage