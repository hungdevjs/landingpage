import React from "react"
import styled from "styled-components"
import { Input, Label, Form, FormGroup, Button } from "reactstrap"

const InfoContainer = styled.div`
    width: 80%; 
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    box-shadow: 0 8px 35px 0 rgba(73,80,87,.05);
    @media (max-width: 768px) {
        width: 100%
    }
`

const infos = ["Your name", "Your email", "Your password"]

export default () => <InfoContainer>
    <p className="text-secondary mb-2" style={{ fontWeight: "600" }}>WELCOME TO INFINITY CLOUD</p>
    <p style={{ fontSize: "1.25rem", fontWeight: 650 }}>Get 30 days free trial</p>
    <Form style={{ width: "90%" }}>
        <>
            {infos.map((item, index) => <FormGroup key={index}>
                <Label className="text-muted" style={{ fontWeight: 650 }}>{item} <span className="text-danger">*</span></Label>
                <Input required />
            </FormGroup>)}
        </>
        <Button block color="primary" className="mt-3">Get started</Button>
    </Form>
</InfoContainer>