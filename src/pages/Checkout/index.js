import { Grid } from '@mui/material';
import { useState } from 'react';
import CheckoutInfo from './components/CheckoutInfo';
import CheckoutSummary from './components/CheckoutSummary';
import OrderComplete from './components/OrderComplete';

function Checkout() {
  const [orderId, setOrderId] = useState(null);

  const finishOrder = (id) => { setOrderId(id); };

  if (orderId) return <OrderComplete id={orderId} />;

  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: '100%', height: '100%', p: 0, m: 0, pl: 0,
      }}
    >
      <Grid item xs={12} sm={12} md={9}>
        <CheckoutInfo finishOrder={finishOrder} />
      </Grid>
      <Grid item xs={12} sm={12} md={3} sx={{ padding: '0!important', height: 'inherit' }}>
        <CheckoutSummary />
      </Grid>
    </Grid>
  );
}

export default Checkout;
