/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"

import { Menu } from "antd"

export default function Sidebar() {
  return (
    <Menu mode="inline" style={{ width: "100%" }}>
      <Menu.Item
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
          "&:hover": { color: "muted", bg: "#eaffeb" }
        }}
      >
        Specials
      </Menu.Item>
      <Menu.Item
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
          "&:hover": { color: "muted", bg: "#eaffeb" }
        }}
      >
        Fruits
      </Menu.Item>
      <Menu.Item
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
          "&:hover": { color: "muted", bg: "#eaffeb" }
        }}
      >
        Vegetables
      </Menu.Item>
      <Menu.Item
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
          "&:hover": { color: "muted", bg: "#eaffeb" }
        }}
      >
        Poultry
      </Menu.Item>
      <Menu.Item
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
          "&:hover": { color: "muted", bg: "#eaffeb" }
        }}
      >
        Smoothies
      </Menu.Item>
    </Menu>
  )
}
