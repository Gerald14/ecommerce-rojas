import {
  Box, Container, Skeleton, Typography, Grid,
} from '@mui/material';

function LoaderDetail() {
  return (
    <Box sx={{ pt: 4 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Skeleton width="30%" />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Skeleton sx={{ height: 520, width: 360 }} animation="wave" variant="rectangular" />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Typography component="div" key="subtitle1" variant="subtitle1">
              <Skeleton width="20%" />
            </Typography>
            <Typography component="div" key="h4" variant="h4">
              <Skeleton width="60%" />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default LoaderDetail;
