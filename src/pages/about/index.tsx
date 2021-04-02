import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Anchor } from 'antd';

export default function About() {
  const router = useRouter();

  useEffect(() => {
    
  })

  const getCurrentAnchor = () => {
    console.log('ROUTER_QUERY', router)
    return ''
  }


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 make-me-sticky">
        <Anchor offsetTop={100}>
          <p><Anchor.Link href="#who-we-are" title="Who we are"/></p>
          <p><Anchor.Link href="#pholosophy" title="Our philosopy" /></p>
          <p><Anchor.Link href="#journey" title="The journey" /></p>
          <p><Anchor.Link href="#customers" title="Individual & family customers" /></p>
          <p><Anchor.Link href="#businesses" title="Corporate, business and institutional customers" /></p>
          <p><Anchor.Link href="#fruit-trays" title="Fruits Trays" /></p>
          <p><Anchor.Link href="#catering" title="Catering service" /></p>
          </Anchor>
        </div>
        <div className="col-10">
          
            <h3 id="who-we-are" className="p-3">Who we are
              <hr style={{width:'15%', height:"5px", backgroundColor: "var(--theme-ui-colors-muted)"}}/>
            </h3>
            <div className="row">
              <div className="col-md-4">
                <p className="pb-3">
                  Maruapula conveniently delivers fruit, veges, poultry and prepared foods that are of high-quality, natural, fresh and healthy. 
                  We also provide catering services. Our customers are individuals, families, corporates, businesses, and institutions.     
                </p>
                <p className="pb-3">
                Our motto <br /><span className="usp">“Serve them fresh, daily”</span> underlies Maruapula’s passion and promise to our customers for food that is:
                <p className="ValueProposition">
                  <ul>
                    <li>Natural</li>
                    <li>Healthy</li>
                    <li>Fresh</li>
                    <li>High-quality</li>
                    <li>Conveniently delivered</li>
                  </ul>
                  </p>
                </p>
              </div>
            
              <div className="pb-5 col-md-8">
                <img src="https://res.cloudinary.com/mmogomedia/image/upload/v1616779237/maruapula/assets/Karabo_Journey_Image_1.jpg" 
                    style={{ width: '90%', height: "auto", display:'inline-block', float: 'none', marginLeft:30}} />
              </div>

            {/* <div className="col-12 pt-5">
              <div className="row">
                <div className="col">
                  <img src="https://res.cloudinary.com/mmogomedia/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1616862223/maruapula/assets/Business_Tab_Image_2_vd0vsd.jpg" 
                    style={{ width: '90%', height: "auto", display:'inline-block', float: 'none', marginLeft:30}} />
                </div>
                <div className="col">
                  <img src="https://res.cloudinary.com/mmogomedia/image/upload/v1616779237/maruapula/assets/Karabo_Journey_Image_1.jpg" 
                    style={{ width: '90%', height: "auto", display:'inline-block', float: 'none', marginLeft:30}} />
                </div>
                <div className="col">
                  <img src="https://res.cloudinary.com/mmogomedia/image/upload/v1616779237/maruapula/assets/Karabo_Journey_Image_1.jpg" 
                    style={{ width: '90%', height: "auto", display:'inline-block', float: 'none', marginLeft:30}} />
                </div>
              </div>
            </div> */}

              <div className="col-12">
                <h3 id="pholosophy" className="mt-5">
                  Maruapula’s natural, healthy fresh food philosophy
                  <hr style={{width:'30%', height:"5px", backgroundColor: "var(--theme-ui-colors-muted)"}}/>
                </h3>
                <div className="row">
                  <div className="col-7">
                    <img src="https://res.cloudinary.com/mmogomedia/image/upload/v1616862223/maruapula/assets/Business_Tab_Image_5_uiyxo6.jpg" 
                      style={{ width: '100%', height: "auto"}} />
                  </div>
                  <div className="col-5">
                  <p>
                    Maruapula’s fresh food products are prepared daily to ensure that customers get the best quality and fresh food products.
                  </p>
                  <p>
                  We supply and deliver hand-picked fruit, vegetables, poultry, and food products sourced from our local farmers, making them always fresh for delivery to your door-step.
                  </p>
                  <p>
                    We deliver fruits and vegetables that are in season, hence you can be sure you are getting the best available products, delivered on time.<br />
                    Being a modest, healthy, fresh produce business that cares about our client’s health, we believe that healthy and sustainability fresh produced products need to be made more accessible.
                  </p>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <h3 id="journey" className="mt-5">
                  How the journey started
                  <hr style={{width:'30%', height:"5px", backgroundColor: "var(--theme-ui-colors-muted)"}}/>
                </h3>
                <div className="row">
                <div className="col-5">
                  <p>
                    A dream for founder Karabo Dlamini for some time, the busines began operating in 2013 as a true black-woman-owned, empowered, 
                    and managed business. Karabo is proud that Maruapula’s family roots, ethos and values remain to this day. Karabo is the Managing 
                    Director of Maruapula responsible for strategy, operations, planning and quality management. Her corporate banking background 
                    in strategic planning, sales, marketing, and the management of a division prepared her well for Maruapula.
                  </p>
                </div>
                <div className="col-7">
                  <img src="https://res.cloudinary.com/mmogomedia/image/upload/v1616779237/maruapula/assets/Karabo_Journey_Image_2.jpg" 
                    style={{ width: '100%', height: "auto", display:'inline-block', float: 'none', marginLeft:30}} />
                </div>
                </div>
                
              </div>

              <div className="col-12">
                <h3 id="customers" className="mt-5">
                  Individual & family customers
                  <hr style={{width:'30%', height:"5px", backgroundColor: "var(--theme-ui-colors-muted)"}}/>
                </h3>
                <div className="row">
                  <div className="col-12"></div>
                  <div className="col-12">
                    <p>
                      We receive orders daily and deliver to individual and family homes, saving you the trouble of shopping for quality fresh products. 
                      We also deliver to family members in different locations: <br />
                      All orders received before 14:00, will be delivered in 2 days. <br />
                      Deliveries from 10H00 to 18H00, daily. <br />
                      No deliveries on Sundays and public holidays. <br />
                    </p>
                    <p><Link href="/shop"><a>Click here to order online from fresh food menu</a></Link></p>
                    
                  </div>
                </div>
              </div>

              <div className="col-12">
                <h3 id="businesses" className="mt-5">
                  Corporate, business and institutional customers
                  <hr style={{width:'30%', height:"5px", backgroundColor: "var(--theme-ui-colors-muted)"}}/>
                </h3>
                <div className="row">
                  <div className="col-5">
                    <img src="https://res.cloudinary.com/mmogomedia/image/upload/v1616862222/maruapula/assets/Business_Tab_Image_1_cwq1ay.jpg" 
                        style={{ width: '90%', height: "auto", display:'inline-block', float: 'none', marginLeft:30}} />
                  </div>
                  <div className="col-7">
                    <p>We receive orders and deliver to corporates, businesses and institutions. Our clients include banks, schools, movie production companies, churches and small, 
                      medium and large manufacturing business – typically we deliver regularly to locations with as few as 10 or up to 2,000 people!!</p>
                    <p>Our corporate, business and institutional customers mostly order fruit trays, chicken pieces and prepared foods. 
                      These orders are delivered to institutions either daily, twice weekly or once weekly.</p> 

                    <p>Due to unique needs, Maruapula is flexible to deliver when, where and how a corporate, business and institutional customer prefers. 
                      Deliveries are made from 10H00 to 18H00, daily excluding Sundays and public holidays. </p>
                    <p>Explore our offering for fruit trays and catering service or contact our sales team to discuss your specific needs.</p>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <h3 id="fruit-trays" className="mt-5">
                  Fruits Trays
                  <hr style={{width:'30%', height:"5px", backgroundColor: "var(--theme-ui-colors-muted)"}}/>
                </h3>
                <div className="row">
                  <div className="col-7">
                    <p>
                      Healthy brain food at the office can boost productivity, and improve staff wellness and morale. Fruits are healthy So, instead of staff reaching for a chocolate bar when the munchies take hold, give your staff a healthier alternative. 
                      If you want your business to be more fruitful too, treat your staff to premium quality fruit as a healthy office snack. 
                      Our fruit is hand-picked and sourced from local farmers, so it’s always fresh. 
                      One fruit tray can be consumed by 10-12 adults or 15-20 kids
                    </p>
                  </div>
                  <div className="col-5">
                    <img src="https://res.cloudinary.com/mmogomedia/image/upload/v1616862221/maruapula/assets/Business_Tab_Image_3_v4skgy.jpg" 
                        style={{ width: '90%', height: "auto", display:'inline-block', float: 'none', marginLeft:30}} />
                  </div>
                </div>
              </div>

              <div className="col-12">
                <h3 id="catering" className="mt-5">
                  Catering service
                  <hr style={{width:'30%', height:"5px", backgroundColor: "var(--theme-ui-colors-muted)"}}/>
                </h3>
                <div className="row">
                  <div className="col-5">
                    <img src="https://res.cloudinary.com/mmogomedia/image/upload/v1617204435/maruapula/assets/Catering_image_2_hepozl.jpg" 
                        style={{ width: '90%', height: "auto", display:'inline-block', float: 'none', marginLeft:30}} />
                  </div>
                  <div className="col-7">
                    <p>Maruapula employs qualified catering staff. We own the equipment to manage all types of events. 
                      Maruapula catering service includes an assortment of the finest foods, beverages, and knowledgeable and experienced staff.
                    </p>
  
                    <p>Our dedicated event planners work with customers to design the best menus that reflects the customers personal 
                    tastes and preferences for an event. We have confidently delivered catering services at many corporate and family 
                    events, all within customer’s catering budgets.</p>
                    <p>Our catering service is typically requested for corporate functions, training, conferences, private functions, 
                      events. We offer:</p>
                    <p>
                      <ul>
                        <li>Catering for Production companies</li>
                        <li>Office Functions Catering</li>
                        <li>Corporate Lunch Buffets</li>
                        <li>Warm and cold Corporate Lunch Box Options</li>
                        <li>Boardroom Catering</li>
                        <li>Team Building Menus</li>
                        <li>Year-end events</li>
                        <li>Corporate Parties</li>
                        <li>Drinks options</li>
                      </ul>
                    </p>
                    <p>When required, through our partners, our catering service includes:</p>
                    <p>
                      <ul>
                        <li>Floral designs</li>
                        <li>Deco</li>
                        <li>Music</li>
                        <li>Entertainment</li>
                        <li>Furniture rental</li>
                        <li>Cake</li>
                      </ul>
                    </p>
                    <p>Contact our sales team to discuss your specific needs.</p>
                  </div>
                  
                </div>
              </div>
          </div>
          
        </div>
    
      </div>

    </div>
    
  )
}
