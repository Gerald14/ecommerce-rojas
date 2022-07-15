import { Badge, styled } from '@mui/material';

const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: '2px solid #272829 ',
    padding: '0 4px',
  },
}));

export default StyledBadge;
