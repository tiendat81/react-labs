import { Button, Container, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './cartSlice';
import { cartItemSelector, itemCountSelector, totalSelector } from './selectors';

CartFeature.propTypes = {};

function CartFeature(props) {
  const cartItems = useSelector(cartItemSelector); // cach nay se lam truu tuong hoa, khong nen lam dung
  // const totalAmount = useSelector((state) => state.cart.totalAmount);
  const itemCount = useSelector(itemCountSelector);
  const totalAmount = useSelector(totalSelector);
  const dispatch = useDispatch();

  const handleAddToCartClick = () => {
    const action = addToCart({
      product: { id: 1, name: 'Áo sơ mi đẹp ghê :P', price: '50000' },
      quantity: 1,
    });
    dispatch(action);
  };

  console.log('Cart items:', itemCount, cartItems, totalAmount);

  return (
    <Container>
      <Typography variant="h2">Your cart</Typography>
      <Typography variant="body1">TOTAL: {totalAmount}</Typography>

      <Button variant="contained" onClick={handleAddToCartClick}>
        Add to cart
      </Button>
    </Container>
  );
}

export default CartFeature;
