import {
  Box, Button, Container, Grid, TextField, Typography,
} from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import { useContext, useState } from 'react';

import cartContext from '../../../context/CartContext';
import { database } from '../../../firebase/index';

function CheckoutInfo({ finishOrder }) {
  const { data: { items, amount }, clear } = useContext(cartContext);

  const [buyer, setBuyer] = useState({
    name: '',
    lastname: '',
    cel: '',
    email: '',
  });

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const sendOrder = () => {
    const order = {
      buyer,
      items,
      total: amount,
    };
    const orderCollection = collection(database, 'orders');
    addDoc(orderCollection, order).then(({ id }) => {
      finishOrder(id);
      clear();
    });
  };

  return (
    <Container>
      <Grid
        container
        spacing={2}
        sx={{
          width: '100%', p: { xs: 2, sm: 2 }, m: 0, pl: 0,
        }}
      >
        {/* <Grid item xs={12} mt={3}>
          <StepContainer/>
        </Grid> */}
        <Grid container spacing={3} m={3} sx={{ display: 'flex', flexDirection: 'column', padding: '1rem 2rem' }}>
          <Typography variant="h4">Informacion de cliente</Typography>
          <Box component="form" mb={5} pt={3} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box
              component="div"
              sx={{
                display: 'flex', flexDirection: 'row', gap: 2, flexGrow: 1,
              }}
            >
              <TextField
                required
                id="name"
                label="Nombres"
                size="small"
                name="name"
                className="checkout-names"
                onChange={handleChange}
              />
              <TextField
                required
                id="lastname"
                label="Apellidos"
                size="small"
                name="lastname"
                className="checkout-names"
                onChange={handleChange}
              />
            </Box>
            <TextField
              required
              id="tel"
              label="Celular"
              size="small"
              name="cel"
              onChange={handleChange}
            />
            <TextField
              required
              id="email"
              label="Correo Electronico"
              placeholder="mangas@gmail.com"
              size="small"
              name="email"
              onChange={handleChange}
            />
          </Box>
          <Button variant="contained" fullWidth onClick={sendOrder}>
            Comprar
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

CheckoutInfo.proptypes = {
  
}

export default CheckoutInfo;
