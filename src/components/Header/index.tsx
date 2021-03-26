/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"

import CartDrawerButton from "src/components/Cart/Drawer/Button"
import grid from "antd/lib/grid"

export default function HeaderComponent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2 py-2" sx={{ display: "grid", placeItems: "center start" }}>
          <img sx={{ width: "50%", height: "auto" }} src="./logo_transparent.png" alt="" />
        </div>
        <div className="col-6" sx={{}}></div>
        <div className="col-4" sx={{}}>
          <CartDrawerButton />
        </div>
      </div>
    </div>
  )
}
