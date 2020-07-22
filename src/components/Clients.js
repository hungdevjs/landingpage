import React from "react"
import { Carousel } from 'react-responsive-carousel'
import { Row, Col } from "reactstrap"

import ClientItem from "./ClientItem"

const clients = [
    { name: "Hung Viet Nguyen", role: "Infinity Cloud User", description: "I can't believe that there is a no limit cloud storage with just 5$/month. It's unbelievable but it's real." }
]

export default () => <div><Carousel>
    <div style={{ backgroundColor: "#fff" }} className="p-4">
        <Row className="container mb-5 pt-5" style={{ margin: "0 auto" }}>
            <Col md={6}>
                <ClientItem item={clients[0]} mr />
            </Col>
            <Col md={6}>
                <ClientItem item={clients[0]} ml />
            </Col>
        </Row>
    </div>
    <div style={{ backgroundColor: "#fff" }} className="p-4">
        <Row className="container mb-5 pt-5 d-flex align-items-center" style={{ margin: "0 auto" }}>
            <Col md={6}>
                <ClientItem item={clients[0]} mr />
            </Col>
            <Col md={6}>
                <ClientItem item={clients[0]} ml />
            </Col>
        </Row>
    </div>
    <div style={{ backgroundColor: "#fff" }} className="p-4">
        <Row className="container mb-5 pt-5 d-flex align-items-center" style={{ margin: "0 auto" }}>
            <Col md={6}>
                <ClientItem item={clients[0]} mr />
            </Col>
            <Col md={6}>
                <ClientItem item={clients[0]} ml />
            </Col>
        </Row>
    </div>
</Carousel>
</div >
