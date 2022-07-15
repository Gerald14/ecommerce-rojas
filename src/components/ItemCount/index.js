import { useState } from 'react';
import Button from '@mui/material/Button';
import {
  Box, FormControl, IconButton, OutlinedInput, Stack,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PropTypes from 'prop-types';

function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleRemove = () => {
    if (count > initial) setCount(count - 1);
  };

  const handleCheck = () => {
    onAdd(count);
  };

  return (
    <Stack spacing={4}>
      <Box
        component="div"
        sx={{
          width: '100%', display: 'flex', gap: '1rem', margin: '1rem 0',
        }}
      >
        <IconButton aria-label="Example" onClick={handleRemove}>
          <RemoveIcon />
        </IconButton>
        <FormControl sx={{ width: '5rem' }}>
          <OutlinedInput
            size="small"
            value={count}
            sx={{ '.MuiInputBase-input': { textAlign: 'center' } }}
          />
        </FormControl>
        <IconButton aria-label="Example" onClick={handleAdd}>
          <AddIcon />
        </IconButton>
        <Button variant="contained" onClick={handleCheck}>
          Confirmar
        </Button>
      </Box>
    </Stack>
  );
}

ItemCount.propTypes = {
  stock: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  initial: PropTypes.number,
};

export default ItemCount;
