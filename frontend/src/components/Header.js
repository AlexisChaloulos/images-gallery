import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const navbartStyle = {
    backgroundColor: 'lightblue'
};

const Header = ({title}) => {
    return (
        <Navbar style={navbartStyle} variant="light">
            <Container>
                <Navbar.Brand href="/">{title}</Navbar.Brand>

            </Container>
        </Navbar>
    )
};

export default Header;