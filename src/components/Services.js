import React from "react"
import { Row, Col } from "reactstrap"

import ServiceItem from "./ServiceItem"
import Button from "./Button"
import Title from "./Title"

const services = [
    { name: "No limit", description: "Our cloud storage is no limit, you can upload anything you want", icon: "fas fa-infinity" },
    { name: "Easy to control", description: "You can create folders like Google Drive to manage your storage", icon: "fas fa-file-alt" },
    { name: "Awesome support", description: "Our customers are supported 24 hours a day", icon: "fas fa-phone-volume" },
    { name: "Creative design", description: "You can find out that the UI is pretty good", icon: "fas fa-layer-group" },
    { name: "Responsive layout", description: "No matter what is your device, the UI is still perfect", icon: "fas fa-mobile-alt" },
    { name: "Better sercurity", description: "Never remove your files without your permission", icon: "fas fa-lock" }
]

export default () => <div className="px-4 py-5" style={{ backgroundColor: "#f8fafe" }} id="services">
    <Title
        title="SERVICES"
        detail="Services We Provide"
        description="We provide you a good solution for storage"
    />

    <Row className="mb-4">
        {services.map((item, index) => <Col md={6} lg={4} key={index}>
            <ServiceItem item={item} />
        </Col>)}
    </Row>
    <div className="d-flex justify-content-center">
        <Button title="View more" color="#34d1bf" />
    </div>
</div>