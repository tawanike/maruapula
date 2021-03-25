/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"

import CartDrawerButton from "src/components/Cart/Drawer/Button"

export default function HeaderComponent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8" sx={{}}>
          <h1>Maruapula</h1>
        </div>
        <div className="col-4" sx={{}}>
          <CartDrawerButton />
        </div>
      </div>
    </div>
  )
}
