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
      <div className="col-4">
        <a href={`#/${props.product.id.toLowerCase()}`} onClick={productDetails}><Image
          src={props.product.image}
          alt={props.product.title}
          width={240}
          height={240}
        /></a>
        <h5>{props.product.title}</h5>
        <h5>{props.product.size}</h5>
        <h5>R{props.product.price} R{props.product.promo_price}</h5>
        <AddToCartButton />

        <Modal 
          title={props.product.title} 
          onCancel={() => setShowProduct(false)} 
          visible={showProduct} footer={null}>
        <Image
          src={props.product.image}
          alt={props.product.title}
          width={240}
          height={240}
        />
          <h1>{props.product.title}</h1>
        </Modal>
      </div>
    )
  }
  