import { Modal } from 'antd';
import { useState } from 'react';
import Image from 'next/image';

import AddToCartButton from 'src/components/Cart/Button';


export default function ListItem(props) {
  const [showProduct, setShowProduct] = useState(false);
  const productDetails = () => {
    setShowProduct(true)
  }

    return (
      <div className="col col-md-4 mb-3">
        <div className="Product__card">
        <a href={`#/${props.product.id.toLowerCase()}`} onClick={productDetails}>
          <Image
            className="Product__Image"
            src={`https://res.cloudinary.com/mmogomedia/image/upload/v1616594498/maruapula/products/${props.product.id}.jpg`}
            alt={props.product.title}
            width={220}
            height={200}
          />
        </a>
        <p>{props.product.title}</p>
        <p style={{whiteSpace: "pre-wrap"}}>{props.product.size}</p>
        <p>
          { props.product.promo_price > 0 ? <>
          <span className="price">R{props.product.promo_price}</span>&nbsp;
          <span className="promo-price">R{props.product.price}</span>
          </> : <span className="price">R{props.product.price}</span> }
        </p>
        
        <AddToCartButton product={props.product} />

        <Modal 
          title={props.product.title} 
          onCancel={() => setShowProduct(false)} 
          visible={showProduct} footer={null}>
        <Image
          src={`https://res.cloudinary.com/mmogomedia/image/upload/v1616594498/maruapula/products/${props.product.id}.jpg`}
          alt={props.product.title}
          width={240}
          height={240}
        />
          <h1>{props.product.title}</h1>
        </Modal>
        </div>
      </div>
    )
  }
  