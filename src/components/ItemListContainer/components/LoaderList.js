import { Box, Skeleton } from '@mui/material';

function LoaderList() {
  return (
    <Box component="div" className="product-list" m={5}>
      <Skeleton sx={{ height: '34rem' }} />
      <Skeleton sx={{ height: '34rem' }} />
      <Skeleton sx={{ height: '34rem' }} />
      <Skeleton sx={{ height: '34rem' }} />
    </Box>
  );
}

export default LoaderList;
