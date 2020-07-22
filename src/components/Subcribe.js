import React from "react"
import { Row, Col } from "reactstrap"

import Title from "./Title"
import Button from "./Button"

import { Input } from "reactstrap"

export default () => <div className="p-4 pb-5">
    <Title
        title="SUBCRIBE"
        detail="Subcribe to our plans"
        description="We will send you information of discount of sale off"
    />

    <div className="container">
        <Row>
            <Col md={2}></Col>
            <Col md={8} className="d-flex">
                <Input className="mr-3" placeholder="Enter your email address" />
                <Button title="Subcribe" />
            </Col>
        </Row>
    </div>
</div>