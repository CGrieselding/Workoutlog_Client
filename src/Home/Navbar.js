import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button
} from 'reactstrap';

const Sitebar = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        let newIsOpen = !isOpen
        setIsOpen(newIsOpen)
    }

    return (
        <Navbar color='faded' light expand='md'>
            <NavbarBrand href='/' style={{margin: '10px', fontSize: '30px' }}>Workout Log</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className= "ms-auto" navbar>
                    <NavItem>
                        <Button onClick={props.clickLogout} style={{margin: '10px'}}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
};

export default Sitebar;