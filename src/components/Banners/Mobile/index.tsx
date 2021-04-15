import { Button, Carousel } from "antd";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ProductContext } from "src/components/Products/context";
import {
    filterProducts,
    selectedCategory,
} from "src/components/Products/actions";
// import Carousel from 'react-bootstrap/Carousel';


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
                <div key={index}>
                    <img src={banner.mobile_image} className="d-block w-100" />
                    <div className="MobileBanner">
                        <h3>{banner.title}</h3>
                        <Button
                            type="primary"
                            onClick={() => goTo(banner.link)}
                            size="large"
                            className="buttom"
                        >
                            Buy Now
                        </Button>
                    </div>
                </div>
            ))}
        </Carousel>
    );
}
