import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Anchor, Button } from "antd";
import { ProductContext } from "src/components/Products/context";
import {
    filterProducts,
    selectedCategory,
} from "src/components/Products/actions";


export default function About() {
    const router = useRouter();

    const productContext = useContext(ProductContext);

    const goTo = (location) => {
        console.log('location', location)
        const defaultCategoryProducts: any[] = productContext.state.products.filter(
            (product) => {
                if (product.category === location) {
                    return product;
                }
            }
        );
        productContext.dispatch(selectedCategory(location));
        productContext.dispatch(filterProducts(defaultCategoryProducts));

        router.push('/shop#top')
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 make-me-sticky d-none d-sm-none d-md-block">
                <Anchor offsetTop={108}>
                        <p>
                            <Anchor.Link
                                href="#who-we-are"
                                title="Who we are"
                            />
                        </p>
                        <p>
                            <Anchor.Link
                                href="#pholosophy"
                                title="Our philosopy"
                            />
                        </p>
                        <p>
                            <Anchor.Link href="#journey" title="The journey" />
                        </p>
                        <p>
                            <Anchor.Link
                                href="#customers"
                                title="Individuals & households"
                            />
                        </p>
                        <p>
                            <Anchor.Link
                                href="#businesses"
                                title="For business"
                            >
                                <p>
                                    <Anchor.Link
                                        href="#catering"
                                        title="Catering service"
                                    />
                                </p>
                                <p>
                                    <Anchor.Link
                                        href="#fruit-trays"
                                        title="Fruits Trays"
                                    />
                                </p>
                            </Anchor.Link>
                        </p>
                    </Anchor>
                </div>
                <div className="col-12 col-md-10">

                    <h3 id="who-we-are" className="p-3">
                        Who we are
                        <hr
                            style={{
                                width: "15%",
                                height: "5px",
                                backgroundColor: "var(--theme-ui-colors-muted)",
                            }}
                        />
                    </h3>
                    <div className="row">
                        <div className="col-md-4">
                            <p className="pb-3">
                                Maruapula conveniently delivers fruit, vegies, poultry and prepared 
                                foods that are of high-quality, natural, fresh and healthy. We also provide 
                                catering services. Our customers are individuals, families, corporates, businesses, and institutions.
                            </p>
                            <p className="pb-3">
                                Our belief to  <br />
                                <span className="usp">
                                    “Serve them fresh, daily”
                                </span>{" "}
                                underlies Maruapula’s passion and promise to our customers for food that is:
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
                            <div >
                                <Button className="btn-cta"
                                onClick={()=> goTo('Fruits')} type="link" size="large">Click here to order online from our fresh food menu</Button>
                            </div>
                        </div>

                        <div className="pb-5 col-md-8">
                            <img
                                src="https://res.cloudinary.com/maruapula/image/upload/v1618326830/assets/About_Us-_Who_we_are_aeuawo.jpg"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>

                        <div className="col-12">
                            <h3 id="pholosophy" className="mt-5">
                                Maruapula’s natural, healthy fresh food
                                philosophy
                                <hr
                                    style={{
                                        width: "30%",
                                        height: "5px",
                                        backgroundColor:
                                            "var(--theme-ui-colors-muted)",
                                    }}
                                />
                            </h3>
                            <div className="row">
                                <div className="col-12 col-md-7 mb-3">
                                    <img
                                        src="https://res.cloudinary.com/maruapula/image/upload/v1618326830/assets/assets/About_Us-_Maruapula_s_natural_healthy_fresh_food_philosophy_o0bcos.jpg"
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </div>
                                <div className="col-12 col-md-5">
                                    <p>
                                        Maruapula’s fresh food products are prepared 
                                        daily to ensure that customers get the best quality 
                                        and fresh food products.
                                    </p>
                                    <p>
                                        We supply and deliver hand-picked fruit and vegetables. 
                                        All our fresh produced products are sourced from our local 
                                        farmers,that ensures fresh delivery to your door-step.
                                    </p>
                                    <p>
                                        We deliver fruits and vegetables that are in season, 
                                        hence you can be sure you are getting the best available 
                                        products, delivered on time.
                                        <br />
                                        Being a modest, healthy, fresh produce business that cares 
                                        about our client’s health, we believe that healthy and 
                                        sustainability fresh produced products need to be made more 
                                        accessible.
                                    </p>
                                    <div >
                                        <Button className="btn-cta"
                                        onClick={()=> goTo('Fruits')} type="link" size="large">Click here to order online from our fresh food menu</Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <h3 id="journey" className="mt-5">
                                How the journey started
                                <hr
                                    style={{
                                        width: "30%",
                                        height: "5px",
                                        backgroundColor:
                                            "var(--theme-ui-colors-muted)",
                                    }}
                                />
                            </h3>
                            <div className="row">
                                <div className="col-12 col-md-5">
                                    <p>
                                        It's been a dream for some time for the founder Karabo Dlamini, 
                                        to start a successful black women owned company that distributes 
                                        fresh products. The business began operating in 2013 fully black 
                                        managed by herself with the assistant of two other managers.
                                    </p>
                                    <p>
                                        She is proud that Maruapula’s family roots, ethos and values 
                                        remain to this day. Karabo is the Managing Director of Maruapula 
                                        who is responsible for strategy, planning management and marketing. 
                                        Her corporate banking experience and her Cost Management studies 
                                        have prepared her for establishing and running this group.
                                    </p>
                                    <div >
                                        <Button className="btn-cta"
                                        onClick={()=> goTo('Fruits')} type="link" size="large">Click here to order online from our fresh food menu</Button>
                                    </div>
                                </div>
                                <div className="col-12 col-md-7">
                                    <img
                                        src="https://res.cloudinary.com/maruapula/image/upload/v1618326830/assets/assets/Karabo_Journey_Image_2.jpg"
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <h3 id="customers" className="mt-5">
                                Individuals & households
                                <hr
                                    style={{
                                        width: "30%",
                                        height: "5px",
                                        backgroundColor:
                                            "var(--theme-ui-colors-muted)",
                                    }}
                                />
                            </h3>
                            <div className="row">
                            <div className="col-12 col-md-5">
                                    <img
                                        src="https://res.cloudinary.com/maruapula/image/upload/v1618332485/assets/About_Us-_Individual___family_customers_iaamnf.jpg"
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </div>
                                <div className="col-7">
                                    <p>
                                        Orders are received daily and delivered to 
                                        individuals and families to their homes. 
                                        Saving them the troubles of shopping for 
                                        quality fresh products and time. We also 
                                        deliver to family members in different locations: {" "}
                                    </p>
                                    <p className="ValueProposition">
                                    <ul>
                                        <li>All orders received before 14:00, will be delivered in 2 days.</li>
                                        <li>Deliveries daily, from 09H00 to 17H00</li>
                                        <li>No deliveries on Sundays and public holidays</li>
                                    </ul>
                                    </p>
                                    <p>

                                        <Button className="btn-cta"
                                        onClick={()=> goTo('Fruits')} type="link" size="large">Click here to order online from our fresh food menu</Button>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <h3 id="businesses" className="mt-5">
                                Corporate, business and government clients
                                <hr
                                    style={{
                                        width: "30%",
                                        height: "5px",
                                        backgroundColor:
                                            "var(--theme-ui-colors-muted)",
                                    }}
                                />
                            </h3>
                            <div className="row">
                                <div className="col-12 col-md-7">
                                    <p>We deliver to corporates, businesses and Government. 
                                        Our clients include banks, schools, production companies, 
                                        small, medium and large businesses.
                                    </p>
                                    <p>
                                    These clients of ours mostly order fruit trays, bulk fresh 
                                    chicken and prepared foods. Orders are delivered either daily,
                                    weekly or twice a week. Due to unique client needs, Maruapula is 
                                    flexible to deliver when, where and how the customer prefers. 
                                    </p>

                                    <p>Explore our offering for:</p>
                                    <p><Link href="#fruit-trays">Fruit trays</Link></p>
                                    <p><Link href="#catering">Catering service</Link></p>
                                    <p>or contact our <Link href="/contacts"><span style={{color: '#7dd181'}}>sales team</span></Link> to discuss your specific needs.</p>
      
                                </div>
                                <div className="col-12 col-md-5">
                                    <img
                                        src="https://res.cloudinary.com/maruapula/image/upload/v1618332484/assets/About_Us-_Corporate_Business_and_Government_Clients_irii6m.jpg"
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <h3 id="catering" className="mt-5">
                                Catering service
                                <hr
                                    style={{
                                        width: "30%",
                                        height: "5px",
                                        backgroundColor:
                                            "var(--theme-ui-colors-muted)",
                                    }}
                                />
                            </h3>
                            <div className="row">
                                <div className="col-12 col-md-5 mb-3">
                                    <img 
                                        src="https://res.cloudinary.com/maruapula/image/upload/v1618326830/assets/assets/About_Us-_Catering_service_jmwqyq.jpg"
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </div>
                                <div className="col-12 col-md-7">
                                    <p>
                                        Maruapula employs qualified catering staff. 
                                        We own the equipment to manage all types of events. 
                                        Maruapula catering service includes an assortment of 
                                        the finest foods, beverages, and knowledgeable and experienced staff.
                                    </p>

                                    <p>
                                        Our dedicated event planners work with customers 
                                        to design the best menus that reflect the customer's 
                                        personal tastes and preferences for an event. We have 
                                        confidently delivered catering services at many corporate 
                                        and family events, all within customer’s catering budgets.
                                    </p>
                                    <p>
                                        Our catering service is typically requested 
                                        for corporate functions, training, conferences, 
                                        private functions, events. We offer: 
                                    </p>
                                    <p>
                                        <ul>
                                            <li>
                                                Catering for Production
                                                companies
                                            </li>
                                            <li>Office Functions Catering</li>
                                            <li>Corporate Lunch Buffets</li>
                                            <li>
                                                Warm and cold Corporate Lunch
                                                Box Options
                                            </li>
                                            <li>Boardroom Catering</li>
                                            <li>Team Building Menus</li>
                                            <li>Year-end events</li>
                                            <li>Corporate Parties</li>
                                            <li>Drinks options</li>
                                        </ul>
                                    </p>
                                    <p>
                                        When required, through our partners, our
                                        catering service includes:
                                    </p>
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
                                    <p>Contact our <Link href="/contacts"><span style={{color: '#7dd181'}}>sales team</span></Link> to discuss your specific needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <h3 id="fruit-trays" className="mt-5">
                                Fruits Trays
                                <hr
                                    style={{
                                        width: "30%",
                                        height: "5px",
                                        backgroundColor:
                                            "var(--theme-ui-colors-muted)",
                                    }}
                                />
                            </h3>
                            <div className="row">
                                <div className="col-12 col-md-7">
                                    <p>
                                    Healthy brain food at the office can boost productivity, 
                                    and improve staff wellness and morale. Fruits are healthy so, 
                                    instead of staff reaching for a chocolate bar when the 
                                    munchies take hold, give your staff a healthier alternative. 
                                    </p> 
                                    <p>
                                    If you want your business to be more fruitful too, treat your staff to premium quality fruit as a healthy office snack.
                                    </p> 
                                    <p>Our fruit is hand-picked and sourced from local farmers, so it’s always fresh.</p>
                                    <p>One fruit tray can be consumed by 10-12 adults or 15-20 kids.
                                    </p>
                                    <p>Contact our <Link href="/contacts"><span style={{color: '#7dd181'}}>sales team</span></Link> to discuss your specific needs.</p>
                                </div>
                                <div className="col-12 col-md-5">
                                    <img
                                        src="https://res.cloudinary.com/maruapula/image/upload/v1618326830/assets/About_Us._Individual___family_customers._Fruit_Tray_normal_xeh27d.png"
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    <div style={{padding: 140}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
