import { Button, Carousel } from 'antd';

export default function Banners(props) {

  return <Carousel autoplay>
      {props.banners.map((banner, index) => (<div className="Banner" key={index}>
        <img src={banner.image}  className="Banner__image" />
        <div className="Banner__text">
          <span>{banner.category}</span>
          <h3>{banner.title}</h3>
          <Button type="primary">Buy Now</Button>
        </div>
      </div>))}
  </Carousel>
}
