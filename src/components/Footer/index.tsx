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
                            src="https://res.cloudinary.com/mmogomedia/image/upload/v1617880681/maruapula/assets/maruapula_export2_jsmt1d.svg"
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

                    {/* <p>
            <a><FontAwesomeIcon icon={['fab', 'facebook']} style={{ marginRight: 10}}/></a>
            <a><FontAwesomeIcon icon={['fab', 'twitter']} style={{ marginRight: 10}}/></a>
            <a><FontAwesomeIcon icon={['fab', 'instagram']} style={{ marginRight: 10}}/></a>
          </p> */}
                </div>
                <div className="col-md-4 p-5">
                    <p>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </p>
                    <p>
                        <Link href="/contacts">
                            <a>Contact</a>
                        </Link>
                    </p>
                    <p>
                        <Link href="/support">
                            <a>Help and FAQs</a>
                        </Link>
                    </p>

                    <p>
                        <Link href="/legal/terms-conditions">
                            <a>Terms and conditions</a>
                        </Link>
                    </p>
                </div>
                <div className="col-md-4 p-2">
                    <h3>Operating Hours</h3>
                    <p>Monday to Saturday: 08H00 to 17H00</p>
                    <p>Deliveries daily, from 09H00 to 17H00</p>
                    <p>No deliveries on Sundays and Public Holidays</p>
                </div>
            </div>
        </Footer>
    );
}
