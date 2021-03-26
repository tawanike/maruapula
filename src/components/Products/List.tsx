/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import ListItem from "src/components/Products/ListItem"

export default function List(props) {
  return (
    <div className="col-12">
      <h1 className="py-4" sx={{ fontSize: "38px" }}>
        {props.category}
      </h1>
      <div className="row" sx={{}}>
        {props.products && props.products.map(product => <ListItem key={product.id} product={product} />)}
      </div>
    </div>
  )
}
