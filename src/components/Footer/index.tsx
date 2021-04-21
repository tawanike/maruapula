/** @jsxRuntime classic */
/** @jsx jsx */
import Link from "next/link";
import { jsx } from "theme-ui";
import { Layout, Divider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { Footer } = Layout;

export default function FooterComponent() {
    return (
        <Footer>
            <div className="row">
                <Divider />
                <div className="col-md-4 p-2">
                    <p>
                        <img
                            sx={{ width: "60%", height: "auto" }}
                            src="https://res.cloudinary.com/maruapula/image/upload/v1618326830/assets/maruapula_landscape_uh0orm.svg"
                            alt="" 
                        />
                    </p>
                    <p>
                        <FontAwesomeIcon
                            icon={["fas", "phone-alt"]}
                            style={{ marginRight: 10 }}
                        />{" "}
                        083 668 5785
                    </p>
                    <p>
                        <FontAwesomeIcon
                            icon={["fas", "envelope"]}
                            style={{ marginRight: 10 }}
                        />
                        sales@maruapula.store
                    </p>
                    <p>
                        <FontAwesomeIcon
                            icon={["fas", "map-marker-alt"]}
                            style={{ marginRight: 10 }}
                        />
                        921 Moss Street, Weltevredenpark
                    </p>

                    <p>
            <a href="https://www.facebook.com/Maruapula-Fresh-Produce-105126261719915/" 
                target="_blank"><FontAwesomeIcon icon={['fab', 'facebook']} style={{ marginRight: 10}} size="2x" /></a>
            {/* <a><FontAwesomeIcon icon={['fab', 'twitter']} style={{ marginRight: 10}}/></a>
            <a><FontAwesomeIcon icon={['fab', 'instagram']} style={{ marginRight: 10}}/></a>*/}
          </p> 
                </div>
                <div className="col-md-4 p-5" >
                    <p className="pt-4">
                        <Link href="/about" sx={{textDecoration: "none"}}>
                            <a sx={{textDecoration: "none"}}>About</a>
                        </Link>
                    </p>
                    <p>
                        <Link href="/contacts" sx={{textDecoration: "none"}}>
                            <a sx={{textDecoration: "none"}}>Contact</a>
                        </Link>
                    </p>
                    <p>
                        <Link href="/support" sx={{textDecoration: "none"}}>
                            <a sx={{textDecoration: "none"}}>Help and FAQs</a>
                        </Link>
                    </p>

                    <p>
                        <Link href="/legal/terms-conditions" sx={{textDecoration: "none"}}>
                            <a sx={{textDecoration: "none"}}>Terms and conditions</a>
                        </Link>
                    </p>
                </div>
                <div className="col-md-4 p-2 pt-5">
                    <h3 className="pt-3">Operating Hours</h3>
                    <p>Monday to Saturday: 08H00 to 17H00</p>
                    <p>Deliveries daily, from 09H00 to 17H00</p>
                    <p>No deliveries on Sundays and Public Holidays</p>
                </div>
            </div>
            <div className="row">
                <p className="col-8 small">&copy; 2021 Maruapula Store.
                Developed by <a href="https://www.mmogomedia.com" target="_blank">Mmogo Media</a></p>
            </div>
        </Footer>
    );
}
