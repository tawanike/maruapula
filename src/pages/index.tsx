/** @jsxRuntime classic */
/** @jsx jsx */
import { Card, Carousel } from "antd";
import { jsx } from "theme-ui";
import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import Loading from "src/components/Loading";
import Banners from "src/components/Banners";
import MobileBanner from 'src/components/Banners/Mobile';
import { useRouter } from "next/router";
import { BannersContext } from "src/components/Banners/context";
import { ProductContext } from "src/components/Products/context";
import { getBanners } from "src/components/Banners/actions";
import {
    filterProducts,
    getProducts,
    selectedCategory,
} from "src/components/Products/actions";
import Products from "src/components/Products/List";
import TextScroller from "src/components/utils/text-scroller";
import {
    BrowserView,
    MobileView
  } from "react-device-detect";


export default function Home() {
    const router = useRouter();
    const bannersContext = useContext(BannersContext);
    const productContext = useContext(ProductContext);
    const [products, setProducts] = useState<any[]>();
    const [banners, setSlides] = useState<any[]>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            setLoading(true);

            if (productContext.state.products.length === 0) {
                const response = await fetch("/api/products");
                const products = await response.json();
                setProducts(products);
                productContext.dispatch(getProducts(products));

                const defaultCategoryProducts = products.filter((product) => {
                    if (product.category === productContext.state.category) {
                        return product;
                    }
                });

                productContext.dispatch(
                    filterProducts(defaultCategoryProducts)
                );
            }

            if (bannersContext.state.banners.length === 0) {
                const banners_response = await fetch("/api/banners");
                const banners_list = await banners_response.json();
                setSlides(banners_list);
                bannersContext.dispatch(getBanners(banners_list));
            }

            setLoading(false);
        })();
    }, []);

    const navigate = (location) => {
        const defaultCategoryProducts = productContext.state.products.filter(
            (product) => {
                if (product.category === location) {
                    return product;
                }
            }
        );

        productContext.dispatch(filterProducts(defaultCategoryProducts));

        productContext.dispatch(selectedCategory(location));
        if (location === "Catering") {
            router.push(`/about#catering`);
        } else if (location === "Business") {
            router.push(`/about#businesses`);
        } else {
            router.push(`/shop#top`);
        }
    };

    return (
        <div className="col-12" sx={{ paddingLeft: "15px" }}>
            <div className="row">
                <BrowserView>
                    <div className="col-12">
                        {bannersContext.state.banners &&
                        bannersContext.state.banners.length ? (
                            <Banners banners={bannersContext.state.banners} is_home={true} /> 
                        ) : (
                            ""
                        )}
                    </div>
                </BrowserView>
                <MobileView>
                    <div className="col-12">
                        {bannersContext.state.banners &&
                        bannersContext.state.banners.length ? (
                            <MobileBanner banners={bannersContext.state.banners} is_home={true} />
                        ) : (
                            ""
                        )}
                    </div>
                </MobileView>
                <div
                            className="col-12 mt-5"
                            sx={{
                                bg: "muted",
                                height: "60px",
                                display: "grid",
                                color: "#FFFFFF",
                            }}
                        >
                            <div
                                className="container"
                                sx={{
                                    height: "60px",
                                    display: "grid",
                                    placeItems: "center",
                                    color: "#FFFFFF"
                                }}
                            >
                                <p className="mb-0 text-center col-12">
                                    <TextScroller text="All orders received before 14H00, will be
                                    delivered in 2 days. Deliveries daily, from
                                    09H00 to 17H00. No deliveries on Sundays and
                                    Public Holiday" />
                                    
                                </p>
                            </div>
                        </div>
                <div className="col-12" sx={{ paddingTop: "50px" }}>
                    <h3 className="mb-5">Categories</h3>
                    <Card title={null}>
                        <Card.Grid className="GridStyle">
                            <div
                                className="row"
                                onClick={() => navigate("Fruits")}
                            >
                                <div className="d-none d-md-block col-md-3">
                                    <img
                                        src="https://res.cloudinary.com/maruapula/image/upload/v1618326830/products/FR0009.jpg"
                                        style={{
                                            width: "134%",
                                            height: "auto",
                                        }}
                                    />
                                </div>
                                <div className="col co-md-9 p-4">Fresh Fruits</div>
                            </div>
                        </Card.Grid>
                        <Card.Grid className="GridStyle">
                            <div
                                className="row"
                                onClick={() => navigate("Vegetables")}
                            >
                                <div className="d-none d-md-block col-md-3">
                                    <img
                                        src="https://res.cloudinary.com/maruapula/image/upload/v1618326830/products/VG0022.jpg"
                                        style={{
                                            width: "125.3%",
                                            height: "auto",
                                        }}
                                    />
                                </div>
                                <div className="col co-md-9 p-4">Fresh Veges</div>
                            </div>
                        </Card.Grid>
                        <Card.Grid className="GridStyle">
                            <div
                                className="row"
                                onClick={() => navigate("Poultry")}
                            >
                                <div className="d-none d-md-block col-md-3">
                                    <img
                                        src="https://res.cloudinary.com/maruapula/image/upload/v1618326830/products/CH0009.jpg"
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </div>
                                <div className="col co-md-9 p-4">Fresh Poultry</div>
                            </div>
                        </Card.Grid>
                        <Card.Grid className="GridStyle">
                            <div
                                className="row"
                                onClick={() => navigate("Precooked")}
                            >
                                <div className="d-none d-md-block col-md-3">
                                    <img
                                        src="https://res.cloudinary.com/maruapula/image/upload/v1618326878/products/FR0025.jpg"
                                        style={{
                                            width: "165%",
                                            height: "auto",
                                        }}
                                    />
                                </div>
                                <div className="col co-md-9 p-4">
                                    Pre-cooked Meals
                                </div>
                            </div>
                        </Card.Grid>
                        <Card.Grid className="GridStyle h-100">
                            <Link href="/about#catering">
                                <div className="row">
                                    <div className="d-none d-md-block col-md-3 h-100">
                                        <img
                                            src="https://res.cloudinary.com/maruapula/image/upload/v1618332517/assets/catering_services_diyky1.jpg"
                                            style={{
                                                width: "135%",
                                                height: "auto",
                                            }}
                                        />
                                    </div>
                                    <div className="col co-md-9 p-4">
                                        Catering Services
                                    </div>
                                </div>
                            </Link>
                        </Card.Grid>
                        <Card.Grid className="GridStyle h-100">
                            <Link href="/about#businesses">
                                <div className="row">
                                    <div className="d-none d-md-block col-md-3 h-100">
                                        <img
                                            src="https://res.cloudinary.com/maruapula/image/upload/v1618332484/assets/About_Us-_Corporate_Business_and_Government_Clients_irii6m.jpg"
                                            style={{
                                                width: "135%",
                                                height: "auto",
                                            }}
                                        />
                                    </div>
                                    <div className="col co-md-9 p-4">
                                        For Business
                                    </div>
                                </div>
                            </Link>
                        </Card.Grid>
                    </Card>
                </div>
                <div className="col-12" sx={{ paddingTop: "50px" }}>
                    <h3>Today's Specials</h3>
                    <div className="col-12">
                        {loading ? (
                            <Loading />
                        ) : (
                            <Products
                                category={""}
                                products={productContext.state.products.filter(product => {
                                    if (product.category === "Specials") return product;
                                }).slice(
                                    0,
                                    3
                                )}
                            />
                        )}
                    </div>
                </div>
                <div className="col-12" sx={{ paddingTop: "50px" }}></div>
            </div>
        </div>
    );
}
