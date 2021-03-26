import { Menu } from "antd"

export default function Sidebar() {
  const navigate = e => {
    console.log('click ', e);
  };
  return (
    <Menu 
        mode="inline" 
        style={{ width: 200 }}
        onClick={navigate}
      >
      <Menu.Item key="specials">Specials</Menu.Item>
      <Menu.Item key="fruits">Fruits</Menu.Item>
      <Menu.Item key="vegetables">Vegetables</Menu.Item>
      <Menu.Item key="poultry">Poultry</Menu.Item>
      <Menu.Item key="smoothies">Smoothies</Menu.Item>
      <Menu.Item key="precooked">Pre-cooked meals</Menu.Item>
      <Menu.Item key="catering">Catering</Menu.Item>
      <Menu.Item key="businesses">Businesses</Menu.Item>
    </Menu>
  )
}
