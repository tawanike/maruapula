/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import { Menu, Divider } from "antd";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ProductContext } from "src/components/Products/context";
import {
    changePage,
    filterProducts,
    selectedCategory,
} from "src/components/Products/actions";

export default function Sidebar(props) {
    const router = useRouter();
    const productContext = useContext(ProductContext);
    const navigate = (e) => {
        
        if (e.key === "Specials") {
            const defaultCategoryProducts: any[] = productContext.state.products.filter(
                (product) => {
                    if (product.specials === "Yes") {
                        console.log("CATEGORY", product);
                        return product;
                    }
                }
            );
            productContext.dispatch(selectedCategory(e.key));
            productContext.dispatch(filterProducts(defaultCategoryProducts));
        } else if (e.key === "Catering") {
            router.push("/business");
        } else if (e.key === "Businesses") {
            router.push("/business");
        } else {
            const defaultCategoryProducts: any[] = productContext.state.products.filter(
                (product) => {
                    if (product.category === e.key) {
                        return product;
                    }
                }
            );
            productContext.dispatch(selectedCategory(e.key));
            productContext.dispatch(filterProducts(defaultCategoryProducts));
        }
        productContext.dispatch(changePage(1));
    };

    return (
        <Menu
            mode="inline"
            style={{ width: "100%" }}
            className={`make-me-sticky ${props.className}`}
            onClick={navigate}
            defaultSelectedKeys={[
                productContext.state ? productContext.state.category : "",
            ]}
        >
            <Menu.Item
                key="Specials"
                className="text-warning"
                sx={{
                    fontSize: "16px",
                    "&:hover": { color: "muted", bg: "#eaffeb" },
                }}
            >
                Today's specials
            </Menu.Item>
            <Menu.Item
                key="Fruits"
                sx={{
                    fontSize: "16px",
                    "&:hover": { color: "muted", bg: "#eaffeb" },
                }}
            >
                Fresh fruits
            </Menu.Item>
            <Menu.Item
                key="Vegetables"
                sx={{
                    fontSize: "16px",
                    "&:hover": { color: "muted", bg: "#eaffeb" },
                }}
            >
                Fresh veges
            </Menu.Item>
            <Menu.Item
                key="Poultry"
                sx={{
                    fontSize: "16px",
                    "&:hover": { color: "muted", bg: "#eaffeb" },
                }}
            >
                Fresh poultry
            </Menu.Item>
            <Menu.Item
                sx={{
                    fontSize: "16px",
                    "&:hover": { color: "muted", bg: "#eaffeb" },
                }}
                key="Precooked"
            >
                Pre-cooked meals
            </Menu.Item>
            <Divider />
            <Menu.Item
                sx={{
                    fontSize: "16px",
                    "&:hover": { color: "muted", bg: "#eaffeb" },
                }}
                key="Catering"
            >
                Catering services
            </Menu.Item>
            <Menu.Item
                sx={{
                    fontSize: "16px",
                    "&:hover": { color: "muted", bg: "#eaffeb" },
                }}
                key="Businesses"
            >
                For institutions
            </Menu.Item>
        </Menu>
    );
}
