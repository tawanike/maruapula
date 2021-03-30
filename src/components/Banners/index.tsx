import { Button, Carousel } from 'antd';
import { useRouter } from 'next/router';
import { useContext } from "react";
import { ProductContext } from "src/components/Products/context";
import {
  filterProducts,
  selectedCategory,
} from "src/components/Products/actions";

export default function Banners(props) {
  const router = useRouter();
  const productContext = useContext(ProductContext);

  const goTo = (location) => {
    const defaultCategoryProducts: any[] = productContext.state.products.filter(
      (product) => {
          if (product.category === location) {
              return product;
          }
      }
  );
  productContext.dispatch(selectedCategory(location));
  productContext.dispatch(filterProducts(defaultCategoryProducts));
  }

  return <Carousel autoplay>
      {props.banners.map((banner, index) => (<div className="Banner" key={index}>
        <img src={banner.image}  className="Banner__image" />
        <div className="Banner__text">
          <span>{banner.category}</span>
          <h3>{banner.title}</h3>
          <Button type="primary" onClick={() => goTo(banner.link)}>Buy Now</Button>
        </div>
      </div>))}
  </Carousel>
}
