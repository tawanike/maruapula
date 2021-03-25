import { useContext, useState } from "react";
import { Button } from 'antd';
import { addToCart } from 'src/components/Cart/actions';
import { CartContext } from 'src/components/Cart/context';

export default function AddToCart(props) {
  const [quantity, setQuantity] = useState<number>(0);
  const cartContext = useContext(CartContext);

  const addProductToCart = () => {
    setQuantity(quantity+1);
    cartContext.dispatch(addToCart({product: props.product, quantity}));
  }

  const removeProductFromCart = (product: any) => {}

  const updateProduct = () => {
    cartContext.dispatch(addToCart({product: props.product, quantity}));
  }

  return (
    <div>
      {quantity === 0 && <Button onClick={ addProductToCart }>Add To Cart</Button> }
      {quantity > 0 && <div>
        <Button onClick={() => setQuantity(quantity-1)}>-</Button>
        {quantity}
        <Button onClick={() => setQuantity(quantity+1)}>+</Button>
      </div> }
    </div>
  )
}
