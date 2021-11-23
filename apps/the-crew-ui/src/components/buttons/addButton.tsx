import { useState } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

export default function AddButton() {
  const [count, setCount] = useState(0);
  return (
    <ButtonGroup disableElevation={true} variant="outlined" color="primary">
      {count !== 0 ? (
        <Button
          onClick={() => {
            setCount(count - 1);
          }}
          variant="contained"
        >
          -
        </Button>
      ) : (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <></>
      )}
      <Button>{count === 0 ? 'Add' : count}</Button>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
        variant={count !== 0 ? 'contained' : 'outlined'}
      >
        +
      </Button>
    </ButtonGroup>
  );
}
