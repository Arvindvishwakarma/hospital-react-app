import logo from '../logo.png';
import {Navbar,Nav} from 'react-bootstrap';

function NavbarMenu() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#home"><img
                                src={logo}
                                width="40"
                                height="40"
                                className="d-inline-block align-top"
                                alt="logo"
                                style={{marginRight:'5px'}}
                            />HOSPITAL</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#objective">Objectives</Nav.Link>
                        <Nav.Link href="#guide">Guide</Nav.Link>
                        <Nav.Link href="#about">About Us</Nav.Link>
                        <Nav.Link href="#contact">Contact Us</Nav.Link>
                        <Nav.Link href="login">Login</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavbarMenu;