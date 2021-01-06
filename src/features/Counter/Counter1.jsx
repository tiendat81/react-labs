import { Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import useCounter from './hooks/useCounter';

Counter1.propTypes = {};

function Counter1(props) {
  // const [count, setCount] = useState(0);

  // const handleIncreaseClick = () => {
  //   setCount((x) => x + 1);
  // };
  // const handleDecreaseClick = () => {
  //   setCount((x) => x - 1);
  // };

  const { count, increase, decrease } = useCounter(10);

  return (
    <div>
      <Typography component="h2" variant="h2">
        {count}
      </Typography>
      <Button color="primary" variant="outlined" onClick={decrease}>
        Decrease
      </Button>
      <Button color="primary" variant="contained" onClick={increase}>
        Increase
      </Button>
    </div>
  );
}

export default Counter1;
