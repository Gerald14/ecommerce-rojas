import { Grid, Typography } from '@mui/material'
import React from 'react'
import ProductList from '../../components/ProductList'
import { MangasData } from './components/MangasData'

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
        <ProductList products={MangasData}/>
      </Grid>
    </Grid>
  )
}

export default MangasPage