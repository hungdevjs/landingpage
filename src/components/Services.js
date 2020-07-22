import React from "react"
import { Row, Col } from "reactstrap"

import ServiceItem from "./ServiceItem"
import Button from "./Button"

const services = [
    { name: "No limit", description: "Our cloud storage is no limit, you can upload anything you want", icon: "fas fa-infinity" },
    { name: "Easy to control", description: "You can create folders like Google Drive to manage your storage", icon: "fas fa-file-alt" },
    { name: "Awesome support", description: "Our customers are supported 24 hours a day", icon: "fas fa-phone-volume" },
    { name: "Creative design", description: "You can find out that the UI is pretty good", icon: "fas fa-layer-group" },
    { name: "Responsive layout", description: "No matter what is your device, the UI is still perfect", icon: "fas fa-mobile-alt" },
    { name: "Better sercurity", description: "Never remove your files without your permission", icon: "fas fa-lock" }
]

export default () => <div className="p-4" style={{ backgroundColor: "#f8fafe" }} id="services">
    <p className="text-center" style={{ color: "#2f55d4", fontWeight: 700 }}>SERVICES</p>
    <p className="text-center font-weight-bold" style={{ fontSize: "1.5rem", marginBottom: "48px" }}>Services We Provide</p>

    <Row className="mb-4">
        {services.map((item, index) => <Col md={6} lg={4} key={index}>
            <ServiceItem item={item} />
        </Col>)}
    </Row>
    <div className="d-flex justify-content-center">
        <Button title="View more" color="#34d1bf" />
    </div>
</div>