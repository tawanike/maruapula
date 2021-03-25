/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"
import { useEffect, useState } from "react"

import Loading from "src/components/Loading"
import Banners from "src/components/Banners"
import Products from "src/components/Products/List"

export default function Home() {
  const [products, setProducts] = useState<any[]>()
  const [banners, setSlides] = useState<any[]>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const response = await fetch("/api/products")
      const products = await response.json()
      setProducts(products)

      const banners_response = await fetch("/api/banners")
      const banners_list = await banners_response.json()
      setSlides(banners_list)

      setLoading(false)
    })()
  }, [])

  return (
    <div className="col-12" sx={{ paddingLeft: "15px" }}>
      {banners && banners.length ? <Banners banners={banners} /> : "PANO"}
      {loading ? <Loading /> : <Products products={products} />}
    </div>
  )
}
