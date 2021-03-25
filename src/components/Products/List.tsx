import ListItem from 'src/components/Products/ListItem';


export default function List(props) {
    return (
      <div >
        <h1>Products</h1>
        <div className="row pl-5">
          {props.products && props.products.map(product =><ListItem key={product.id} product={product} />)}
        </div>
      </div>
    )
  }
  