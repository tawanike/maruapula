/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"
import { useEffect, useState, useContext } from "react"

import Loading from "src/components/Loading"
import Banners from "src/components/Banners"
import Products from "src/components/Products/List"
import { BannersContext } from "src/components/Banners/context"
import { ProductContext } from "src/components/Products/context"
import { getBanners } from "src/components/Banners/actions"
import { filterProducts, getProducts } from "src/components/Products/actions"
import specials from "./api/products/specials"

export default function Home() {
  const bannersContext = useContext(BannersContext);
  const productContext = useContext(ProductContext);
  const [products, setProducts] = useState<any[]>()
  const [banners, setSlides] = useState<any[]>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      setLoading(true);

      if (productContext.state.products.length === 0) {
        const response = await fetch("/api/products")
        const products = await response.json()
        setProducts(products);
        productContext.dispatch(getProducts(products));
        
        const defaultCategoryProducts = products.filter(product => {
          if(product.category === productContext.state.category) {
            return product;
          }
        });
        
        productContext.dispatch(filterProducts(defaultCategoryProducts));
      }

      if (bannersContext.state.banners.length === 0) {
        const banners_response = await fetch("/api/banners")
        const banners_list = await banners_response.json()
        setSlides(banners_list);
        bannersContext.dispatch(getBanners(banners_list));
      }

      setLoading(false)
    })()
  }, [])

  return (
    <div className="col-12" sx={{ paddingLeft: "15px" }}>
      {bannersContext.state.banners && bannersContext.state.banners.length ? <Banners banners={bannersContext.state.banners} /> : ""}
      {loading ? <Loading /> : <Products category={productContext.state.category} products={productContext.state.selectedProducts} />}
    </div>
  )
}
