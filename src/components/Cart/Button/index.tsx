import { useContext, useState } from "react";
import { Button } from 'antd';
import { addToCart, removeFromCart, changeQuantity } from 'src/components/Cart/actions';
import { CartContext } from 'src/components/Cart/context';

export default function AddToCart(props) {
  const [quantity, setQuantity] = useState<number>(0);
  const cartContext = useContext(CartContext);

  const addProductToCart = () => {
    setQuantity(quantity+1);
    cartContext.dispatch(addToCart({product: props.product, quantity: quantity+1}));
  }

  const removeProductFromCart = () => {
    setQuantity(quantity-1);
    cartContext.dispatch(removeFromCart(props.product.id));
  }

  const updateCart = (action) => {
    if (action === 'increase') {
      setQuantity(quantity+1);
      cartContext.dispatch(changeQuantity(props.product.id, quantity+1));
    }

    if (action === 'decrease') {
      setQuantity(quantity-1);
      cartContext.dispatch(changeQuantity(props.product.id, quantity-1));
    }
  }

  return (
    <div>
      {quantity === 0 && <Button onClick={ addProductToCart }>Add To Cart</Button> }
      {quantity > 0 && <div>
        <Button onClick={() => updateCart('decrease')}>-</Button>
        {quantity}
        <Button onClick={() => updateCart('increase')}>+</Button>
      </div> }
    </div>
  )
}
