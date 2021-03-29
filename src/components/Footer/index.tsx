/** @jsxRuntime classic */
/** @jsx jsx */
import Link from "next/link";
import { jsx } from "theme-ui";
import { Layout, Divider } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { Footer } = Layout

export default function FooterComponent() {
  return (
    <Footer>
      <div className="row">
        <Divider />
        <div className="col-md-4 p-4">
          <p>
          <img
              sx={{ width: "25%", height: "auto" }}
              src="./logo_transparent.png"
              alt=""
          />
          </p>
          <p><FontAwesomeIcon icon={['fas', 'phone-alt']} style={{ marginRight: 10}}/> 083 668 5785</p>
          <p><FontAwesomeIcon icon={['fas', 'envelope']} style={{ marginRight: 10}}/>sales@maruapula.store</p>
          <p><FontAwesomeIcon icon={['fas', 'map-marker-alt']} style={{ marginRight: 10}}/>921 Moss Street, Weltevredenpark</p>
          
          <p>
            <a><FontAwesomeIcon icon={['fab', 'facebook']} style={{ marginRight: 10}}/></a>
            <a><FontAwesomeIcon icon={['fab', 'twitter']} style={{ marginRight: 10}}/></a>
            <a><FontAwesomeIcon icon={['fab', 'instagram']} style={{ marginRight: 10}}/></a>
          </p>
        </div>
        <div className="col-md-4 p-5">
          <p><Link href="/about"><a>About Us</a></Link></p>
          <p><Link href="/contacts"><a>Contact Us</a></Link></p>
          <p><Link href="/support"><a>Help and FAQs</a></Link></p>
          
          <p><Link href="/legal/terms-conditions"><a>Terms and Conditions</a></Link></p>
          <p><Link href="/legal/terms-use"><a>Terms of Use</a></Link></p>
          <p><Link href="/legal/refunds-returns"><a>Refunds and Returns</a></Link></p>
        </div>
        <div className="col-md-4 p-5">
          <p><FontAwesomeIcon icon={['fas', 'business-time']} style={{ marginRight: 10}}/>Monday to Saturday (08H00 to 18H00)</p>
          <p><FontAwesomeIcon icon={['fas', 'business-time']} style={{ marginRight: 10}}/>Deliveries from 10H00 to 18H00, daily.</p>
          <p><FontAwesomeIcon icon={['fas', 'business-time']} style={{ marginRight: 10}}/>No deliveries on Sundays and Public Holidays</p>
        </div>
      </div>
    </Footer>
  )
}
