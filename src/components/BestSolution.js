import React from "react"
import { Row, Col } from "reactstrap"

import BestSolutionItem from "./BestSolutionItem"

const listBestSolution = [
    { icon: "fas fa-user", detail: "Clients", number: 803 },
    { icon: "fas fa-server", detail: "Servers", number: 13 },
    { icon: "fas fa-database", detail: "GB data", number: 2345 },
    { icon: "fas fa-award", detail: "Awards", number: 12 },

]

export default () => <div className="d-flex flex-column align-items-center py-5" style={{ backgroundColor: "#2f55d4" }}>
    <p className="text-center text-white" style={{ fontWeight: 700, fontSize: "1.7rem" }}>
        Best Solutions for your Business
    </p>
    <p
        className="text-center mb-4"
        style={{ fontWeight: 600, fontSize: "1.1rem", color: "#bbb" }}
    >
        Your company will never have to think about storage, we will do it for you
    </p>

    <Row className="w-100 pt-5">
        <Col md={3}>
            <BestSolutionItem item={listBestSolution[0]} />
        </Col>
        <Col md={3}>
            <BestSolutionItem item={listBestSolution[1]} />
        </Col>
        <Col md={3}>
            <BestSolutionItem item={listBestSolution[2]} />
        </Col>
        <Col md={3}>
            <BestSolutionItem item={listBestSolution[3]} />
        </Col>
    </Row>
</div >