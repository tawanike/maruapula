import { Menu } from "antd"
import { useState, useContext } from "react"
import { ProductContext } from "src/components/Products/context"
import { filterProducts, selectedCategory } from "src/components/Products/actions"

export default function Sidebar() {
  const productContext = useContext(ProductContext);
  const navigate = e => {
    if (e.key === 'Specials') {
      const defaultCategoryProducts: any[] = productContext.state.products.filter(product => {
        if(product.specials === 'Yes') {
          console.log('CATEGORY', product)
          return product;
        }
      });
      productContext.dispatch(selectedCategory(e.key));
      productContext.dispatch(filterProducts(defaultCategoryProducts));
    } else {
      const defaultCategoryProducts: any[] = productContext.state.products.filter(product => {
        if(product.category === e.key) {
          return product;
        }
      });
      productContext.dispatch(selectedCategory(e.key));
      productContext.dispatch(filterProducts(defaultCategoryProducts));
    }
    

  };



  return (
    <Menu 
        mode="inline" 
        style={{ width: 200 }}
        onClick={navigate}
        // selectedKeys={[productContext.state.category]}
        defaultSelectedKeys={[productContext.state.category]}
      >
      <Menu.Item key="Specials" className="text-warning">Specials</Menu.Item>
      <Menu.Item key="Fruits">Fruits</Menu.Item>
      <Menu.Item key="Vegetables">Vegetables</Menu.Item>
      <Menu.Item key="Poultry">Poultry</Menu.Item>
      <Menu.Item key="Smoothies">Smoothies</Menu.Item>
      <Menu.Item key="Precooked">Pre-cooked meals</Menu.Item>
      <Menu.Item key="Catering">Catering</Menu.Item>
      <Menu.Item key="Businesses">Businesses</Menu.Item>
    </Menu>
  )
}
