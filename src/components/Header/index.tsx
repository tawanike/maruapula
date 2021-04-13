/** @jsxRuntime classic */
/** @jsx jsx */

import Link from "next/link";
import { jsx } from "theme-ui";

import CartDrawerButton from "src/components/Cart/Drawer/Button";
import { MenuOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";

export default function HeaderComponent() {
    const menu = (
        <Menu sx={{ marginTop: "24px", textTransform: 'uppercase' }}>
            <Menu.Item>
                <a href="/about">About</a>
            </Menu.Item>
            <Menu.Item>
                <a href="/support">Support</a>
            </Menu.Item>
            <Menu.Item>
                <a href="/contacts">Contacts</a>
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
                                sx={{ width: "100%", height: "auto" }}
                                src="https://res.cloudinary.com/maruapula/image/upload/v1618326830/assets/maruapula_landscape_uh0orm.svg"
                                alt="Maruapula Logo"
                            />
                        </a>
                    </Link>
                </div>
                <div className="d-none d-md-block col-md-9" sx={{textTransform: 'uppercase'}}>
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
                            <Link href="/" sx={{textDecoration: "none"}}>
                                <a sx={{textDecoration: "none"}}>Home</a>
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
                            <Link href="/shop" sx={{textDecoration: "none"}}>
                                <a sx={{textDecoration: "none"}}>Shop</a>
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
                            <Link href="/about" sx={{textDecoration: "none"}}>
                                <a sx={{textDecoration: "none"}}>About Us</a>
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
                            <Link href="/support" sx={{textDecoration: "none"}}>
                                <a sx={{textDecoration: "none"}}>Support</a>
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
                            <Link href="/contacts" sx={{textDecoration: "none"}}>
                                <a sx={{textDecoration: "none"}}>Contacts</a>
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
                            <Link href="/" sx={{textDecoration: "none"}}>
                                <a sx={{textDecoration: "none"}}>Home</a>
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
                            <Link href="/shop" sx={{textDecoration: "none"}}>
                                <a sx={{textDecoration: "none"}}>Shop</a>
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
