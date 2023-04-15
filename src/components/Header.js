import React, {Component} from 'react';
import {Button, Container, FormControl, Nav, Navbar, Form} from "react-bootstrap";
import logo from './logo192.png'
import {Route, Router, Routes} from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <>
                <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark" >
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                            src = {logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                            /> Admin panel
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="mr-auto">
                                <Nav.Link href="/"> Home </Nav.Link>
                                <Nav.Link href="/About"> About </Nav.Link>
                                <Nav.Link href="/Contacts"> Contacts </Nav.Link>
                                <Nav.Link href="/Blog"> Blog </Nav.Link>
                            </Nav>
                            <Form inline >
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                />
                            </Form>
                            <Button variant="outline-info">Search</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes >
                    <Route path="/"/>
                    <Route path="users/*"/>
                </Routes>
            </>
        );
    }
}

export default Header;