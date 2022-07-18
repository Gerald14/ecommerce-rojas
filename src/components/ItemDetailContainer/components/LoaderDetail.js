import {
  Box, Container, Skeleton, Typography, Grid, Stack,
} from '@mui/material';

function LoaderDetail() {
  return (
    <Box sx={{ pt: 2 }}>
      <Container>
        <Grid container spacing={2} sx={{ pt: 2 }}>
          <Grid item xs={12}>
            <Typography component="div" key="subtitle1" variant="subtitle1">
              <Skeleton width="30%" />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} sx={{ padding: 3 }}>
            <Skeleton sx={{ height: 520, width: { xs: '100%', sm: '80%' } }} animation="wave" variant="rectangular" />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Typography component="div" key="subtitle1" variant="subtitle1">
              <Skeleton width="20%" />
            </Typography>
            <Typography component="div" key="h4" variant="h4">
              <Skeleton width="60%" />
            </Typography>
            <Typography component="div" key="h5" variant="h5">
              <Skeleton width="30%" />
            </Typography>
            <Stack spacing={1} pt={5}>
              <Skeleton width="80%" />
              <Skeleton width="80%" />
              <Skeleton width="80%" />
              <Skeleton width="80%" />
              <Skeleton width="80%" />
              <Skeleton width="50%" />
            </Stack>
            <Box
              component="div"
              sx={{
                display: 'flex', flexDirection: 'row', gap: 2, marginTop: 3, height: '4rem',
              }}
            >
              <Skeleton width="2.5rem" />
              <Skeleton width="3.5rem" />
              <Skeleton width="2.5rem" />
              <Skeleton width="5rem" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default LoaderDetail;
