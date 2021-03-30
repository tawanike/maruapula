/** @jsxRuntime classic */
/** @jsx jsx */

import Link from "next/link";
import { jsx } from "theme-ui";

import CartDrawerButton from "src/components/Cart/Drawer/Button";

export default function HeaderComponent() {
    return (
        <div className="container">
            <div className="row">
                <div
                    className="col-2 py-2"
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
                <div className="col-9" sx={{}}>
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
                <div className="col-1" sx={{ variant: "center" }}>
                    <CartDrawerButton />
                </div>
            </div>
        </div>
    );
}
