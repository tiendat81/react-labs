import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './counterSlice';
import Counter1 from './Counter1';
import Counter2 from './Counter2';

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const count = useSelector((state) => state.counter.value); // state.counter : lay tu root reducer
  const dispatch = useDispatch();

  const handleIncreaseClick = () => {
    const action = increment();
    dispatch(action);
  };
  const handleDecreaseClick = () => {
    const action = decrement();
    dispatch(action);
  };

  return (
    <div>
      <Counter1 />
      <Counter2 />

      {/* <Typography component="h2" variant="h2">
        {count}
      </Typography>
      <Button color="primary" onClick={handleDecreaseClick}>
        Decrease
      </Button>
      <Button color="primary" onClick={handleIncreaseClick}>
        Increase
      </Button> */}
    </div>
  );
}

export default CounterFeature;
