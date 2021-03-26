import { useContext } from "react"
import { Badge } from "antd"
import { CartContext } from "src/components/Cart/context"
import { toggleCartDrawer } from "src/components/Cart/actions"
import { ShoppingCartOutlined } from "@ant-design/icons"

export default function CartButton() {
  const cartContext = useContext(CartContext)

  return (
    <div>
      <Badge count={cartContext.state.products && cartContext.state.products.length} showZero>
        <ShoppingCartOutlined
          style={{ fontSize: "32px" }}
          onClick={() => {
            cartContext.dispatch(toggleCartDrawer(!cartContext.state.drawer.visible))
          }}
        />
      </Badge>
    </div>
  )
}
