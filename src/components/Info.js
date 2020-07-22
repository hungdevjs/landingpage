import React from "react"
import { Row, Col } from "reactstrap"

import Button from "./Button"
import FreeTrial from "./FreeTrial"

export default () => <div className="container" id="home">
    <Row className="p-5">
        <Col md={6} className=" mb-4 d-flex flex-column align-items-center justify-content-center">
            <div className="w-100">
                <p className="text-secondary mb-4" style={{ fontWeight: "600" }}>INFINITY CLOUD</p>
            </div>
            <h1 style={{ fontWeight: "600" }} className="mb-4">Make your cloud storage & no limit with <span style={{ color: "#2f55d4" }}>Infinity Cloud</span></h1>
            <p
                className="text-secondary mb-4"
                style={{ fontWeight: "650" }}
            >
                We make your storage problem be solved with infinity cloud storage
            </p>

            <div className="d-flex w-100">
                <Button title="Get started" mr="8px" />
                <Button title="Learn more" color="#34d1bf" />
            </div>
        </Col>
        <Col md={6} className="mb-4 d-flex align-items-center justify-content-center">
            <FreeTrial />
        </Col>
    </Row>
</div>