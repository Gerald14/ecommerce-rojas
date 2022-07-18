import { Box, Skeleton } from '@mui/material';

function LoaderList() {
  return (
    <Box sx={{ pt: 0.5 }}>
      <Skeleton />
      <Skeleton width="60%" />
    </Box>
  );
}

export default LoaderList;
