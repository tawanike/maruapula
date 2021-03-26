import { Carousel } from 'antd';

export default function Banners(props) {

  return <Carousel>
      {props.banners.map((banner, index) => (<div key={index}>
        <a><img
          style={{width: '100%', height: '40%'}}
          src={banner.image}
          alt={banner.title}
        /></a>
      </div>))}
  </Carousel>
}
