import { useEffect, useState } from 'react';

import Loading from 'src/components/Loading';
import Banners from 'src/components/Banners';
import Products from 'src/components/Products/List';


export default function Home() {
  const [products, setProducts] = useState<any[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() =>{
    (async () => {
      setLoading(true);
      const response = await fetch('/api/products');
      const products = await response.json();
      setProducts(products);

      const banners_response = await fetch('/api/banners');
      const banners = await banners_response.json();
      console.log(banners);

      setLoading(false);
    })();
  }, []);

  return (
    <div>
      <Banners />
      <h1>Maruapula</h1>
      {loading ? <Loading /> : <Products products={products} />}
    </div>
  )
}
