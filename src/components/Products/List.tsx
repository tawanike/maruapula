/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react";
import { Pagination } from "antd"
import ListItem from "src/components/Products/ListItem"

export default function List(props) {
  const [pageStartEnd, setPageStartEnd] = useState<any>({start: 0, end:12});
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [products, setProducts] = useState<any[]>([]);

  const handleChangePage = (page, pageSize) => {
    let start = 0;
    let end = pageSize;
    if (page > 1) {
      start = pageStartEnd.end;
      end = (pageSize) * page;
    }
    setCurrentPage(page);
    setPageStartEnd({start, end});
    console.log(pageStartEnd);
  }

  return (
    <div className="col-12">
      <h1 className="pb-4" sx={{ fontSize: "38px" }}>
        { 
          props.category.length !== 0 ?
          props.category === 'Precooked' ? 'Pre-cooked Meals' : 
          props.category === 'Specials' ? 'Today\'s Specials' : 
          'Fresh '+ props.category 
          : ''
        }
      </h1>
      <div className="row" sx={{}}>
        {props.products && props.products.slice(pageStartEnd.start, pageStartEnd.end).map(product => <ListItem key={product.id} product={product} />)}
      </div>
      <div className="row">
        <Pagination 
          current={currentPage} 
          total={props.products && props.products.length} 
          pageSize={12}
          hideOnSinglePage={true}
          onChange={handleChangePage} 
        />
      </div>
    </div>
  )
}
