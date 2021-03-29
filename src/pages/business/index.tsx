import { Button } from "antd";
import Link from "next/link";
import { DoubleRightOutlined} from '@ant-design/icons';



export default function Business() {
    return (
      <div className="container-fluid">
      <div className="hero-story col-12" >
      <h1 className="p-2" style={{ fontWeight: 'bold',}}>Services to corporates, business, public sector and other institution<hr style={{width:'32%', height:"5px", backgroundColor: "var(--theme-ui-colors-muted)"}}/></h1>
 
        <div className="col-12">
        <div className="row">
        <div className="pb-3 col-md-6">
        <img src="https://res.cloudinary.com/mmogomedia/image/upload/v1616862221/maruapula/assets/Business_Tab_Image_3_v4skgy.jpg" 
        style={{ width: '90%', height: "auto", display:'inline-block', float: 'left', }} />
        </div>
          <div className="col-md-4 mx-2 ">
            <h2 className="pb-3">Fruits Trays <hr style={{width:'20%', height:"2px", backgroundColor: "var(--theme-ui-colors-muted)"}}/></h2>
      <p className="pb-2">
      Healthy brain food to the office can boost productivity, improve wellness and help companies improve their bottom lines.
      <ul className="pb-3 mt-3">
        <li className="pb-3 mt-1">Fruits are healthy So, instead of reaching for a chocolate bar when the munchies take hold, give your staff a healthier alternative. </li>
        <li className="pb-3 mt-1">If you want your business to be more fruitful too, think inside the box and treat your staff to premium quality fruit as a healthy office snack.</li>
        <li className="pb-3 mt-1">Our fruit is hand-picked and sourced from local farmers, so it’s always fresh. And because we provide fruit that’s in season, you can be sure you’re getting the best available, 
        delivered on time.</li>  
        </ul> 
        </p>
        </div>
        </div>
        </div>
        
        <div className="mission-section col-12">
        
        <div className="hero-story col-12 mt-5">
     <h2 className="pb-3">Catering Services <hr style={{width:'10%', height:"2px", backgroundColor: "var(--theme-ui-colors-muted)"}}/></h2>
 
        <div className="col-12">
        <div className="row">
          <div className="col-md-4 mx-2">
      <p className="pb-3">
      Maruapula has managed to source qualified staff that have experience in the catering industry. Staff varies from event to event, if the need arises temporary staff is outsourced. Company has sufficient catering equipment to manage all type of events. Maruapula in addition to an assortment of the finest foods and beverages, a knowledgeable and experienced staff. 
     <p className="pb-3 mt-3">
Furthermore, we have strong relationships with the area's best vendors for any additional needs. Our dedicated event planner will work with you to design the best possible menu for your event which will reflect your own personal tastes and preferences. We are confident we can deliver all of these services while staying within your desired catering budge.</p>

        <p className="pb-3 mt-3">
        Services and products include corporate catering, training and conference catering, private functions and through our strategic partners we also offer event management, floral designs, deco, music and entertainment, furniture rental and cakes. We endeavor to reach our targets and grow our markets. 
        </p>
        </p>
        </div>     
        <div className="pb-3 col-md-6">
        <img src="https://res.cloudinary.com/mmogomedia/image/upload/v1616862223/maruapula/assets/Business_Tab_Image_6_cp5tz7.jpg" 
        style={{ width: '92%', height: "auto", display:'inline-block', float: 'none', marginLeft:30}} />
        </div>
        </div>
        </div>
        <div className="mission-section col-12">

          <h3 className="mt-5" style={{ fontWeight: 'bold', textAlign: "center", width:"50%", margin: "auto" }}>We offer</h3>
        <hr className="mt-3" style={{width: "8%", height:"2px", margin: "auto", backgroundColor: "var(--theme-ui-colors-muted)"}}/>
      </div>
      <div className="mission-section col-12 mt-5">
        <div className="row">
          <div className="col-md-4">
            <img src="https://res.cloudinary.com/mmogomedia/image/upload/v1616862223/maruapula/assets/Business_Tab_Image_5_uiyxo6.jpg" 
        style={{ width: '92%', height: "auto", display:'inline-block', float: 'none', marginLeft:30}} />
          </div>
    
         <div className="col-md-4">
         <ul className="mt-2" style={{textAlign: "center", width:"auto", margin: "auto", listStyle: "none"}}>
          <li className="mb-2">Catering for Production companies</li>
          <li className="mb-2">Office Functions Catering</li>
          <li className="mb-2">Corporate Lunch Buffets</li>
          <li className="mb-2">Warm and cold Corporate Lunch Box Options</li>
          <li className="mb-2">Boardroom Catering</li>
          <li className="mb-2">Team Building Menus</li>
          <li className="mb-2">Year-end events</li>
          <li className="mb-2">Corporate Parties</li>
          <li className="mb-2">Drinks options</li>
        </ul>
        </div> 
        <div className="col-md-4">
            <img src="https://res.cloudinary.com/mmogomedia/image/upload/v1616862222/maruapula/assets/Business_Tab_Image_1_cwq1ay.jpg" 
        style={{ width: '92%', height: "auto", display:'inline-block', float: 'none', marginLeft:30}} />
          </div>
          </div>
          </div> 
          <div className="mission-section col-12">

          <h5 className="mt-5" style={{textAlign: "center", width:"50%", margin: "auto" }}>
            
            <Link href="/contacts">
                                <a>Work with us <DoubleRightOutlined style={{fontSize: 32, color: "var(--theme-ui-colors-muted)" }}/>
                                  
                                  <hr className="mt-3" style={{width: "15%", height:"2px", margin: "auto", backgroundColor: "var(--theme-ui-colors-muted)"}}/></a>
                            </Link>
            </h5>
      </div>
         
        </div>

      </div>
    </div>
    </div>
    )
}