import { Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import useCounter from './hooks/useCounter';

Counter2.propTypes = {};

function Counter2(props) {
  // const [count, setCount] = useState(0);

  // const handleIncreaseClick = () => {
  //   setCount((x) => x + 1);
  // };
  // const handleDecreaseClick = () => {
  //   setCount((x) => x - 1);
  // };

  const { count, increase, decrease } = useCounter(50);

  return (
    <div>
      <Typography component="h2" variant="h2">
        {count}
      </Typography>
      <Button color="secondary" variant="outlined" onClick={decrease}>
        Decrease
      </Button>
      <Button color="secondary" variant="contained" onClick={increase}>
        Increase
      </Button>
    </div>
  );
}

export default Counter2;
