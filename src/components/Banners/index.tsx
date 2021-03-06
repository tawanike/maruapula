import { Button, Carousel } from "antd";
import { useRouter } from "next/router";
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
        
            router.push('/shop#top');

        
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

    return (<Carousel autoplay dots={false}>
            {props.banners.map((banner, index) => (
                <div className="Banner" sx={{ height: "auto" }} key={index}>
                    <picture className="w-100">
                        <source media="(min-width: 650px)" srcSet={banner.image} />
                        <source media="(max-width: 465px)" srcSet={banner.mobile_image} />
                    </picture>
                    <img src={banner.image} className="w-100" />
                    <div className="d-none d-md-block Banner__text">
                        <h3>{banner.category}</h3>
                        <h1>{banner.title}</h1>
                        <Button
                            type="primary"
                            onClick={() => goTo(banner.link)}
                        >
                            Buy Now
                        </Button>
                    </div>
                    <div className="col-12 mt-3 d-md-none">
                        <div className="row">
                            <div className="col-4">
                                <Button
                                    type="primary"
                                    onClick={() => goTo(banner.link)}
                                    size="large"
                                >
                                    Buy Now
                                </Button>
                            </div>
                            <div
                                className="col-8"
                                sx={{
                                    display: "grid",
                                    placeItems: "center end",
                                }}
                            >
                                <h3>{banner.title}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>);
}
