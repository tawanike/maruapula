import { Collapse, Steps, Popover } from 'antd';

const { Step } = Steps;

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);


export default function Support() {
  return (
    <div className="p-3">
      <div className="pb-3">
        <h1>Support</h1>
      </div>

      <div>
        <h3>Frequently asked questions</h3>
        <Collapse ghost>
            <Collapse.Panel header="Delivery times?" key="1">
              <p>All orders received before 14:00, will be delivered in 2 days.<br />
              No deliveries on Sundays and public holidays<br />
              Deliveries are done between 10:00 and 18:00</p>
            </Collapse.Panel>
            <Collapse.Panel header="Why are certain fruits not available?" key="2">
              <p>Because fruits and veg are seasonal, we will ensure to supply the best quality in season.</p>
            </Collapse.Panel>
            <Collapse.Panel header="What is the minimum order amount required?" key="3">
              <p>A minimum of R250.00 </p>
            </Collapse.Panel>
            <Collapse.Panel header="What payments methods are available?" key="4">
              <p>EFT, we are currently working on introducing speed point and online payment, and direct payments via our website in the next 3 months.</p>
            </Collapse.Panel>
            <Collapse.Panel header="What areas do we deliver to?" key="5">
              <p>Johannesburg and Pretoria ?? all areas of Gauteng</p>
            </Collapse.Panel>
            <Collapse.Panel header="Can I add items after placing my order online" key="6">
              <p>Customers who want to add items after placing orders online. Please contact us via email at sales@maruapula.store we will amend and send an updated Invoice </p>
            </Collapse.Panel>
            <Collapse.Panel header="What if a product is damaged or need to be replaced??" key="7">
              <p>Please mail the office the damaged or the product that need to be replaced and order number within 48 hours of order being delivered at sales@maruapula.store
              </p>
            </Collapse.Panel>
            <Collapse.Panel header="Where do you source your fresh produce products?" key="8">
              <p>We source all our fresh fruits and vegetables from various local farmers. We may only buy for the orders that we have and don’t hold stock.</p>
            </Collapse.Panel>
          </Collapse>
      </div>

      <div className="pt-3">
        <h3>How to buy</h3>
        <div className="mission-section col-12">
          <div className="how-it-works col-md-12 mx-5">
    <Steps direction="vertical" current={5} progressDot={customDot}>
    <Step title="Shop" description="Browse our fresh food product listing." />
    <Step title="Cart" description="Review, amend and/or confirm your order in the cart." />
    <Step title="Invoice" description="Receive & review the Maruapula order confirmation invoice." />
    <Step title="Payment" description="Make an EFT payment of the invoiced amount" />
    <Step title="Delivery" description="Expect your delivery within 2 days." />
  </Steps>
  </div>
  </div>
      </div>
    </div>
  )
}
