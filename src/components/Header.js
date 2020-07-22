import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap'

import styled from "styled-components"

const HeaderContainer = styled.div`
    height: 75px;
    padding: 8px 16px;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #f8f9fa;
    box-shadow: 0 10px 33px -14px rgba(0,0,0,.1);
    z-index: 9999999;
`

const links = [
    { href: '#home', text: 'Home' },
    { href: '#services', text: 'Services' },
    { href: '#clients', text: 'Clients' },
    { href: '#plans', text: 'Plans' }
]

const createNavItem = ({ href, text }) => (
    <NavItem>
        <NavLink className="mr-3" style={{ fontWeight: 600 }} href={href}>{text}</NavLink>
    </NavItem>
);

export default () => {
    const [isOpen, setOpen] = useState(false)

    const toggle = () => setOpen(!isOpen)

    return (
        <HeaderContainer>
            <Navbar expand="md" color="light" light style={{ width: "100%" }}>
                <NavbarBrand href="/">
                    Infinity Cloud
                </NavbarBrand>
                <NavbarToggler onClick={toggle} size="sm" />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {links.map(createNavItem)}
                    </Nav>
                </Collapse>
            </Navbar >
        </HeaderContainer >
    )
}