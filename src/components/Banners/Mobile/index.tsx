import { Button } from "antd";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ProductContext } from "src/components/Products/context";
import {
    filterProducts,
    selectedCategory,
} from "src/components/Products/actions";
import Carousel from 'react-bootstrap/Carousel';


export default function Banners(props) {
    const router = useRouter();
    const productContext = useContext(ProductContext);

    const goTo = (location) => {
        if (router.asPath === "/") {
            router.push('/shop#top');
        }
        
        const defaultCategoryProducts: any[] = productContext.state.products.filter(
            (product) => {
                if (product.category === location) {
                    return product;
                }
            }
        );
        productContext.dispatch(selectedCategory(location));
        productContext.dispatch(filterProducts(defaultCategoryProducts));
    };

    return (<Carousel>
            {props.banners.map((banner, index) => (
                <Carousel.Item key={index}>
                    <div className="MobileBanner">
                        <h3>{banner.title}</h3>
                        <img src={banner.mobile_image} className="w-100" />
                        <Button
                            type="primary"
                            onClick={() => goTo(banner.link)}
                            size="large"
                            className="bottom"
                        >
                            Buy Now
                        </Button>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
