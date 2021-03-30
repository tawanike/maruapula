/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react";
import { Pagination } from "antd"
import ListItem from "src/components/Products/ListItem"

export default function List(props) {
  const [pageStart, setPageStart] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [products, setProducts] = useState<any[]>([]);

  const handleChangePage = (page, pageSize) => {
    let start = 0;
    if (page > 1) {
      start = pageSize * page;
    }

    console.log(pageStart, (page*pageSize));
    setCurrentPage(page);
    setPageStart(start);
  }

  return (
    <div className="col-12">
      <h1 className="pb-4" sx={{ fontSize: "38px" }}>
        { 
          props.category === 'Precooked' ? 'Pre-cooked Meals' : 
          props.category === 'Specials' ? 'Today\'s Specials' : 
          'Fresh '+ props.category 
        }
      </h1>
      <div className="row" sx={{}}>
        {props.products && props.products.slice(pageStart, (currentPage*12)).map(product => <ListItem key={product.id} product={product} />)}
      </div>
      <div className="row">
      <Pagination current={currentPage} total={props.products && props.products.length} pageSize={12} onChange={handleChangePage} />
      </div>
    </div>
  )
}
