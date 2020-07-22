import React from "react"
import { Carousel } from 'react-responsive-carousel'
import { Row, Col } from "reactstrap"

import ClientItem from "./ClientItem"
import Title from "./Title"

const clients = [
    { name: "Hung Viet Nguyen", role: "Infinity Cloud User", description: "I can't believe that there is a no limit cloud storage with just 5$/month. It's unbelievable but it's real." }
]

export default () => <div id="clients">
    <div className="py-5">
        <Title
            title="TESTIMONIAL"
            detail="What our 3500+ clients say"
            description="Let see what our clients say about our service"
            mb="0"
        />
    </div>
    <Carousel>
        <div style={{ backgroundColor: "#eee" }} className="p-4">
            <Row className="container mb-5 pt-5" style={{ margin: "0 auto" }}>
                <Col md={6}>
                    <ClientItem item={clients[0]} />
                </Col>
                <Col md={6}>
                    <ClientItem item={clients[0]} />
                </Col>
            </Row>
        </div>
        <div style={{ backgroundColor: "#eee" }} className="p-4">
            <Row className="container mb-5 pt-5 d-flex align-items-center" style={{ margin: "0 auto" }}>
                <Col md={6}>
                    <ClientItem item={clients[0]} />
                </Col>
                <Col md={6}>
                    <ClientItem item={clients[0]} />
                </Col>
            </Row>
        </div>
        <div style={{ backgroundColor: "#eee" }} className="p-4">
            <Row className="container mb-5 pt-5 d-flex align-items-center" style={{ margin: "0 auto" }}>
                <Col md={6}>
                    <ClientItem item={clients[0]} />
                </Col>
                <Col md={6}>
                    <ClientItem item={clients[0]} />
                </Col>
            </Row>
        </div>
    </Carousel>
</div >
