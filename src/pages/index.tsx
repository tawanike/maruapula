import { useEffect, useState } from 'react';

import Loading from 'src/components/Loading';
import Banners from 'src/components/Banners';
import Products from 'src/components/Products/List';


export default function Home() {
  const [products, setProducts] = useState<any[]>();
  const [banners, setSlides] = useState<any[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetch('/api/products');
      const products = await response.json();
      setProducts(products);

      const banners_response = await fetch('/api/banners');
      const banners_list = await banners_response.json();
      setSlides(banners_list);

      setLoading(false);
    })();
  }, []);

  return (
    <div>
      {banners && banners.length > 0 ? <Banners banners={banners} /> : 'PANO'}
      <h1>Maruapula</h1>
      {loading ? <Loading /> : <Products products={products} />}
    </div>
  )
}
