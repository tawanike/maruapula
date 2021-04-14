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
      return `https://res.cloudinary.com/maruapula/image/upload/v1618326830/products/${id}.jpg`
    }

    return `./placeholder.jpg`
  }

  return (
    <div className="col-12 col-md-4" sx={{ marginBottom: "25px" }}>
      <div
        className=""
        sx={{
          variant: "containers.card",
          height: "100%",
          "&:hover": { cursor: "pointer" },
          display: "grid"
        }}
      >
        <div className="col-12" sx={{ variant: "center" }}>
          <a sx={{ variant: "center" }} href={`#`} onClick={productDetails}>
            <img
              className="Product__Image"
              src={getProductImg(props.product.id)}
              alt={props.product.title}
              onError={e => {
                ;(e.target as any).src = "./placeholder.png"
                ;(e.target as any).style.width = "40%"
                ;(e.target as any).style.height = "auto"
                ;(e.target as any).style.marginTop = "15px"
                ;(e.target as any).style.marginBottom = "15px"
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
        <Modal title={``} 
          onCancel={() => setShowProduct(false)} 
          visible={showProduct} 
          footer={null}
          style={{ top: 160 }}
          width={`60%`}
          >
          <div className="row">
            <div className="col-5">
            <img
              className="Product__Image"
              src={getProductImg(props.product.id)}
              alt={props.product.title}
              onError={e => {
                ;(e.target as any).src = "./placeholder.png"
                ;(e.target as any).style.width = "40%"
                ;(e.target as any).style.height = "auto"
                ;(e.target as any).style.marginTop = "15px"
                ;(e.target as any).style.marginBottom = "15px"
              }}
              sx={{ width: "80%", height: "auto" }}
            />
            </div>
            <div className="col-7">
              <h1>{props.product.title}</h1>
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
              <p sx={{ whiteSpace: "pre-wrap", py: "5px", fontSize: "18px" }}>{props.product.size}</p>
            
              <AddToCartButton product={props.product} />

            </div>
          </div>
          
          
        </Modal>
      </div>
    </div>
  )
}
