/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect, useState, useContext } from "react";
import { Menu, Dropdown, Button } from 'antd';
import Loading from "src/components/Loading";
import Banners from "src/components/Banners";
import Products from "src/components/Products/List";
import Sidebar from "src/components/Sidebar";
import { BannersContext } from "src/components/Banners/context";
import { ProductContext } from "src/components/Products/context";
import { getBanners } from "src/components/Banners/actions";
import { changePage, filterProducts, getProducts } from "src/components/Products/actions";


export default function Home() {
    const bannersContext = useContext(BannersContext);
    const productContext = useContext(ProductContext);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            setLoading(true);

            if (productContext.state.products.length === 0) {
                const response = await fetch("/api/products");
                const products = await response.json();
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
                bannersContext.dispatch(getBanners(banners_list));
            }

            setLoading(false);
        })();
    }, []);

    const handleChangePage = (page) => {
        productContext.dispatch(
            changePage(page)
        );
    }

    return (
        <div className="col-12" sx={{ paddingLeft: "15px" }}>
            <div className="row">
                <div className="col-12">
                    {bannersContext.state.banners &&
                    bannersContext.state.banners.length ? (
                        <Banners banners={bannersContext.state.banners} />
                    ) : (
                        ""
                    )}
                </div>
                <div className="col-12" sx={{ paddingTop: "50px" }}>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <Sidebar className="mb-5 d-none d-md-block"/>
                            <Dropdown overlay={<Sidebar />} placement="bottomCenter" arrow className="d-md-none">
                                <Button block className="mb-5">Categories</Button>
                            </Dropdown>
                        </div>
                        <div className="col-12 col-md-9">
                            {loading ? (
                                <Loading />
                            ) : (
                                <Products
                                    category={productContext.state.category}
                                    changePage={handleChangePage}
                                    currentPage={productContext.state.page}
                                    products={
                                        productContext.state.selectedProducts
                                    }
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
