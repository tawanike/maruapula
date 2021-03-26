/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"

import { Modal } from "antd"
import { useState } from "react"
import Image from "next/image"

import AddToCartButton from "src/components/Cart/Button"

export default function ListItem(props) {
  const [showProduct, setShowProduct] = useState(false)
  const productDetails = () => {
    setShowProduct(true)
  }

  const getProductImg = id => {
    id ? id : "nothing"

    if (id) {
      return `https://res.cloudinary.com/mmogomedia/image/upload/v1616594498/maruapula/products/${id}.jpg`
    }
    return `./placeholder.jpg`
  }

  return (
    <div className="col col-md-4" sx={{}}>
      <div className="row" sx={{ variant: "containers.card", height: "100%", "&:hover": { cursor: "pointer" } }}>
        <div className="col-12" sx={{ variant: "center" }}>
          <a sx={{ variant: "center" }} href={`#/${props.product.id.toLowerCase()}`} onClick={productDetails}>
            <img
              className="Product__Image"
              src={getProductImg(props.product.id)}
              alt={props.product.title}
              onError={e => {
                e.target.src = "./placeholder.png"
                e.target.style.width = "40%"
                e.target.style.height = "auto"
                e.target.style.marginTop = "15px"
                e.target.style.marginBottom = "15px"
              }}
              sx={{ width: "80%", height: "auto" }}
            />
          </a>
        </div>
        <div className="col-12" sx={{ variant: "center" }}>
          <p sx={{ variant: "text.subHead" }}>{props.product.title}</p>
        </div>
        <div className="col-12" sx={{ variant: "center" }}>
          <p sx={{ whiteSpace: "pre-wrap", py: "5px", fontSize: "18px" }}>{props.product.size}</p>
        </div>
        <div className="col-12" sx={{ variant: "center" }}>
          <p sx={{ fontSize: "20px", fontWeight: "700", color: "muted" }}>
            {props.product.promo_price > 0 ? (
              <>
                <span className="price">R{props.product.promo_price}</span>&nbsp;
                <span className="promo-price">R{props.product.price}</span>
              </>
            ) : (
              <span className="price">R{props.product.price}</span>
            )}
          </p>
        </div>

        <AddToCartButton product={props.product} />
        <Modal title={props.product.title} onCancel={() => setShowProduct(false)} visible={showProduct} footer={null}>
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
