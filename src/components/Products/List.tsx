/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState, useEffect } from "react";
import { Pagination } from "antd";
import ListItem from "src/components/Products/ListItem";
import { motion } from "framer-motion";

export default function List(props) {
    const [pageStartEnd, setPageStartEnd] = useState<any>({
        start: 0,
        end: 12,
    });

    let easing = [0.175, 0.85, 0.42, 0.96];
    const imageVariants = {
        exit: {
            y: -80,
            opacity: 0,
            transition: { duration: 0.2, ease: easing },
        },
        enter: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: easing,
            },
        },
    };

    const handleChangePage = (page, pageSize) => {
        console.log(page, pageSize);
        console.log(pageStartEnd);
        let start = 0;
        let end = pageSize;
        if (page > 1) {
            start = pageStartEnd.end;
            end = pageSize * page;
        }

        if (page === 2) {
            start = 13;
            end = 24;
        }

        if (page > 3) {
            start = 25;
            end = 36;
        }

        if (page > 4) {
            start = 37;
            end = 48;
        }

        if (page > 5) {
            start = 49;
            end = 60;
        }

        props.changePage(page);
        setPageStartEnd({ start, end });
        window.scrollTo({
            top: 550,
            left: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        if (props.currentPage === 1) {
            setPageStartEnd({ start: 0, end: 12 });
        }
    }, [props.currentPage]);

    return (
        // <div className="col-12">
        <motion.div
            className="row"
            variants={imageVariants}
            sx={{ overflow: "hidden" }}
        >
            <h1 className="pb-4" sx={{ fontSize: "38px" }}>
                {props.category.length !== 0
                    ? props.category === "Precooked"
                        ? "Pre-cooked Meals"
                        : props.category === "Specials"
                        ? "Today's Specials"
                        : "Fresh " + props.category
                    : ""}
            </h1>
            <div className="row">
                {props.products &&
                    props.products
                        .slice(pageStartEnd.start, pageStartEnd.end)
                        .map((product) => (
                            <ListItem key={product.id} product={product} />
                        ))}
            </div>
            <div className="row">
                <Pagination
                    current={props.currentPage}
                    total={props.products && props.products.length}
                    pageSize={12}
                    hideOnSinglePage={true}
                    onChange={handleChangePage}
                />
            </div>
        </motion.div>
        // {/* </div> */}
    );
}
