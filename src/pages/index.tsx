/** @jsxRuntime classic */
/** @jsx jsx */
import { Card, Carousel } from "antd";
import { jsx } from "theme-ui";
import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import Loading from "src/components/Loading";
import Banners from "src/components/Banners";
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
            router.push(`/shop`);
        }
    };

    return (
        <div className="col-12" sx={{ paddingLeft: "15px" }}>
            <div className="row">
                <div className="col-12">
                    {bannersContext.state.banners &&
                    bannersContext.state.banners.length ? (
                        <Banners banners={bannersContext.state.banners} is_home={true} />
                    ) : (
                        ""
                    )}
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
                                        src="https://res.cloudinary.com/mmogomedia/image/upload/v1616594495/maruapula/products/FR0009.jpg"
                                        style={{
                                            width: "134%",
                                            height: "auto",
                                        }}
                                    />
                                </div>
                                <div className="col co-md-9">Fresh Fruits</div>
                            </div>
                        </Card.Grid>
                        <Card.Grid className="GridStyle">
                            <div
                                className="row"
                                onClick={() => navigate("Vegetables")}
                            >
                                <div className="d-none d-md-block col-md-3">
                                    <img
                                        src="https://res.cloudinary.com/mmogomedia/image/upload/v1616594501/maruapula/products/VG0022.jpg"
                                        style={{
                                            width: "125.3%",
                                            height: "auto",
                                        }}
                                    />
                                </div>
                                <div className="col co-md-9">Fresh Veges</div>
                            </div>
                        </Card.Grid>
                        <Card.Grid className="GridStyle">
                            <div
                                className="row"
                                onClick={() => navigate("Poultry")}
                            >
                                <div className="d-none d-md-block col-md-3">
                                    <img
                                        src="https://res.cloudinary.com/mmogomedia/image/upload/v1616669936/maruapula/products/CH0009.jpg"
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </div>
                                <div className="col co-md-9">Fresh Poultry</div>
                            </div>
                        </Card.Grid>
                        <Card.Grid className="GridStyle">
                            <div
                                className="row"
                                onClick={() => navigate("Precooked")}
                            >
                                <div className="d-none d-md-block col-md-3">
                                    <img
                                        src="https://res.cloudinary.com/mmogomedia/image/upload/v1616594500/maruapula/products/platter.jpg"
                                        style={{
                                            width: "163%",
                                            height: "auto",
                                        }}
                                    />
                                </div>
                                <div className="col co-md-9">
                                    Pre-cooked Meals
                                </div>
                            </div>
                        </Card.Grid>
                        <Card.Grid className="GridStyle h-100">
                            <Link href="/about#catering">
                                <div className="row">
                                    <div className="d-none d-md-block col-md-3 h-100">
                                        <img
                                            src="https://res.cloudinary.com/mmogomedia/image/upload/v1616669936/maruapula/products/CH0009.jpg"
                                            style={{
                                                width: "100%",
                                                height: "auto",
                                            }}
                                        />
                                    </div>
                                    <div className="col co-md-9">
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
                                            src="https://res.cloudinary.com/mmogomedia/image/upload/v1616669936/maruapula/products/CH0009.jpg"
                                            style={{
                                                width: "100%",
                                                height: "auto",
                                            }}
                                        />
                                    </div>
                                    <div className="col co-md-9">
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
