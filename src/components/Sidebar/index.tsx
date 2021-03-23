import { Menu } from 'antd';

export default function Sidebar() {
  return (
    <Menu mode="inline" style={{ width: 256 }}>
      <Menu.Item>Specials</Menu.Item>
      <Menu.Item>Fruits</Menu.Item>
      <Menu.Item>Vegetables</Menu.Item>
      <Menu.Item>Poultry</Menu.Item>
      <Menu.Item>Smoothies</Menu.Item>
    </Menu>
  )
}
