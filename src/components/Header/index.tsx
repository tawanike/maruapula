/** @jsxRuntime classic */
/** @jsx jsx */

import Link from "next/link";
import { jsx } from "theme-ui";

import CartDrawerButton from "src/components/Cart/Drawer/Button";
import { MenuOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";

export default function HeaderComponent() {
    const menu = (
        <Menu sx={{ marginTop: "24px" }}>
            <Menu.Item>
                <a href="/about">About Us</a>
            </Menu.Item>
            <Menu.Item>
                <a href="/support">Support</a>
            </Menu.Item>
            <Menu.Item>
                <a href="/contacts">Contact Us</a>
            </Menu.Item>
        </Menu>
    );
    return (
        <div className="container" sx={{ overflow: "hidden" }}>
            <div className="row">
                <div
                    className="col-4 col-md-2 py-2"
                    sx={{ display: "grid", placeItems: "center start" }}
                >
                    <Link href="/">
                        <a>
                            <img
                                sx={{ width: "60%", height: "auto" }}
                                src="https://res.cloudinary.com/mmogomedia/image/upload/v1617125589/maruapula/assets/maruapula_logo-02_qkjodp.png"
                                alt=""
                            />
                        </a>
                    </Link>
                </div>
                <div className="d-none d-md-block col-md-9" sx={{}}>
                    <ul
                        className="row h-100"
                        sx={{ listStyle: "none", paddingLeft: "0" }}
                    >
                        <li
                            className="col-2 h-100"
                            sx={{
                                variant: "center",
                                fontWeight: 600,
                                fontSize: "16px",
                                "&:hover": {
                                    bg: "rgb(255, 255, 255)",
                                    cursor: "pointer",
                                    color: "muted",
                                },
                            }}
                        >
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li
                            className="col-2 h-100"
                            sx={{
                                variant: "center",
                                fontWeight: 600,
                                fontSize: "16px",
                                "&:hover": {
                                    bg: "rgb(255, 255, 255)",
                                    cursor: "pointer",
                                    color: "muted",
                                },
                            }}
                        >
                            <Link href="/shop">
                                <a>Shop</a>
                            </Link>
                        </li>
                        <li
                            className="col-2 h-100"
                            sx={{
                                variant: "center",
                                fontWeight: 600,
                                fontSize: "16px",
                                "&:hover": {
                                    bg: "rgb(255, 255, 255)",
                                    cursor: "pointer",
                                    color: "muted",
                                },
                            }}
                        >
                            <Link href="/about">
                                <a>About Us</a>
                            </Link>
                        </li>
                        <li
                            className="col-2 h-100"
                            sx={{
                                variant: "center",
                                fontWeight: 600,
                                fontSize: "16px",
                                "&:hover": {
                                    bg: "rgb(255, 255, 255)",
                                    cursor: "pointer",
                                    color: "muted",
                                },
                            }}
                        >
                            <Link href="/support">
                                <a>Support</a>
                            </Link>
                        </li>
                        <li
                            className="col-2 h-100"
                            sx={{
                                variant: "center",
                                fontWeight: 600,
                                fontSize: "16px",
                                "&:hover": {
                                    bg: "rgb(255, 255, 255)",
                                    cursor: "pointer",
                                    color: "muted",
                                },
                            }}
                        >
                            <Link href="/contacts">
                                <a>Contact Us</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-4 d-md-none">
                    <ul
                        className="row h-100"
                        sx={{ listStyle: "none", paddingLeft: "0" }}
                    >
                        <li
                            className="col h-100"
                            sx={{
                                variant: "center",
                                fontWeight: 600,
                                fontSize: "16px",
                                "&:hover": {
                                    bg: "rgb(255, 255, 255)",
                                    cursor: "pointer",
                                    color: "muted",
                                },
                            }}
                        >
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li
                            className="col h-100"
                            sx={{
                                variant: "center",
                                fontWeight: 600,
                                fontSize: "16px",
                                "&:hover": {
                                    bg: "rgb(255, 255, 255)",
                                    cursor: "pointer",
                                    color: "muted",
                                },
                            }}
                        >
                            <Link href="/shop">
                                <a>Shop</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div
                    className="col-2 d-md-none"
                    sx={{
                        variant: "center",
                        "&:hover": {
                            color: "muted",
                            cursor: "pointer",
                        },
                    }}
                >
                    <Dropdown
                        overlay={menu}
                        placement="bottomCenter"
                        sx={{ zIndex: 10000 }}
                    >
                        <MenuOutlined style={{ fontSize: "20px" }} />
                    </Dropdown>
                </div>
                <div className="col-2 col-md-1" sx={{ variant: "center" }}>
                    <CartDrawerButton />
                </div>
            </div>
        </div>
    );
}
