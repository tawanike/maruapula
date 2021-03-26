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
        <div className="col-9" sx={{}}>
          <ul className="row h-100" sx={{ listStyle: "none", paddingLeft: "0" }}>
            <li
              className="col-2 h-100"
              sx={{
                variant: "center",
                fontWeight: 600,
                fontSize: "16px",
                "&:hover": { bg: "rgb(250, 250, 250)", cursor: "pointer", color: "muted" }
              }}
            >
              Home
            </li>
            <li
              className="col-2 h-100"
              sx={{
                variant: "center",
                fontWeight: 600,
                fontSize: "16px",
                "&:hover": { bg: "rgb(250, 250, 250)", cursor: "pointer", color: "muted" }
              }}
            >
              About
            </li>
            <li
              className="col-2 h-100"
              sx={{
                variant: "center",
                fontWeight: 600,
                fontSize: "16px",
                "&:hover": { bg: "rgb(250, 250, 250)", cursor: "pointer", color: "muted" }
              }}
            >
              Business Services
            </li>
            <li
              className="col-2 h-100"
              sx={{
                variant: "center",
                fontWeight: 600,
                fontSize: "16px",
                "&:hover": { bg: "rgb(250, 250, 250)", cursor: "pointer", color: "muted" }
              }}
            >
              Contact Us
            </li>
            <li
              className="col-2 h-100"
              sx={{
                variant: "center",
                fontWeight: 600,
                fontSize: "16px",
                "&:hover": { bg: "rgb(250, 250, 250)", cursor: "pointer", color: "muted" }
              }}
            >
              Support
            </li>
          </ul>
        </div>
        <div className="col-1" sx={{ variant: "center" }}>
          <CartDrawerButton />
        </div>
      </div>
    </div>
  )
}
