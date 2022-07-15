import { Box, Divider, Typography } from '@mui/material';
import { useContext } from 'react';
import SummaryItem from './SummaryItem';
import cartContext from '../../../context/CartContext';

function CheckoutSummary() {
  const { data: { items, amount } } = useContext(cartContext);

  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', background: '#f2f2f2', height: '100%', padding: '1rem',
    }}
    >
      <Typography variant="h6" color="initial">Resumen de pedido</Typography>
      <Box sx={{
        display: 'flex', flexDirection: 'column', gap: 1, marginTop: '1rem', flexGrow: 1, overflow: 'auto',
      }}
      >
        {items.map((item) => <SummaryItem key={item.id} item={item} />)}
      </Box>
      <Box>
        <Divider pt=".5rem" />
        <Box pt={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="subtitle1" color="initial" sx={{ padding: '0 0 .5rem 0' }}>
            Total
          </Typography>
          <Typography variant="subtitle1" color="initial" sx={{ padding: '0 0 .5rem 0' }}>
            {`S/.${amount.toFixed(2)}`}
          </Typography>
        </Box>

      </Box>
    </Box>

  );
}

export default CheckoutSummary;
