import React from 'react' ;
import { FaBars } from 'react-icons/fa' ;
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink  } from './NavBarElements' ;

// This is the component of the navBar : 

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo > <NavLinks to='home'> JCI KENITRA </NavLinks> </NavLogo> 
                    <MobileIcon onClick={toggle}> 
                        <FaBars /> 
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks> 
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'>Discover</NavLinks> 
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>Services</NavLinks> 
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'>Contact</NavLinks> 
                        </NavItem>
                        <NavItem>
                            <NavLinks to='sign_up'></NavLinks> 
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar ;
