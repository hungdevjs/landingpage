import React from "react"
import { Row, Col } from "reactstrap"

import Title from "./Title"
import Plan from "./Plan"

const plans = [
    { name: "Economy", price: 17, storage: 50, support: "No" },
    { name: "Premium", price: 29, storage: 100, support: "No" },
    { name: "Developer", price: 39, storage: 200, support: "Yes" }
]

export default () => <div className="p-4 pb-5" style={{ backgroundColor: "#eee" }} id="plans">
    <Title
        title="PRICING"
        detail="Choose your plan"
        description="We have 3 plans for you"
    />

    <Row>
        <Col md={4}>
            <Plan item={plans[0]} />
        </Col>
        <Col md={4}>
            <Plan item={plans[1]} />
        </Col>
        <Col md={4}>
            <Plan item={plans[2]} />
        </Col>
    </Row>
</div>