import { Carousel } from 'antd';

export default function Banners(props) {

  return <Carousel>
      {props.banners.map((banner, index) => (<div style={{ height: 500 }} key={index}>
        <a><img
          style={{width: '100%', height: 'auto'}}
          src={banner.image}
          alt={banner.title}
        /></a>
      </div>))}
  </Carousel>
}
