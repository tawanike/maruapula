/** @jsxRuntime classic */
/** @jsx jsx */
import { find } from 'lodash'
import { jsx } from "theme-ui"
import { useContext, useState, useEffect } from "react"
import { Button } from "antd"
import { addToCart, removeFromCart, changeQuantity } from 'src/components/Cart/actions';
import { CartContext } from "src/components/Cart/context"

export default function AddToCart(props) {
  const [quantity, setQuantity] = useState<number>(0);
  const cartContext = useContext(CartContext);

  const addProductToCart = () => {
    setQuantity(quantity + 1);
    cartContext.dispatch(addToCart({ product: props.product, quantity: quantity + 1 }));
  }

  const removeProductFromCart = () => {
    setQuantity(quantity - 1);
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

  // useEffect(() => {
  //   if (cartContext.state.products.length > 0) {
  //     // Check if product in cart
  //     const product = find(cartContext.state.products, {id: props.product.id});
  //     console.log('PRODUCT', product)
  //     if (product) {
  //       removeProductFromCart();
  //     }
  //   }

  // }, [quantity]);

  return (
    <div className="w-100" sx={{ display: "grid", placeItems: "center", marginBottom: "15px" }}>
      {quantity ? (
        <div sx={{ display: "grid", gridTemplateColumns: "30% 30% 30%" }}>
          <Button onClick={() => updateCart('decrease')}>-</Button>
          <p className="mx-3 mb-0" sx={{ display: "grid", placeItems: "center", fontWeight: "600", fontSize: "16px" }}>
            {quantity}
          </p>
          <Button onClick={() => updateCart('increase')}>+</Button>
        </div>
      ) : (
        <div className="p-2" sx={{ variant: "containers.button", bg: "muted" }} onClick={addProductToCart}>
          <p>Add To Cart</p>
        </div>
      )}
    </div>
  )
}
