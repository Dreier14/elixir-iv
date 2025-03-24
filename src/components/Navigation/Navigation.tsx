import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // Track if the navbar is open
  const navbarRef = useRef<HTMLDivElement | null>(null); // Ref for detecting click outside

  // Handle clicks outside of the navbar to close the menu
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
      setIsOpen(false); // Close the navbar if clicked outside
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside); // Listen for clicks anywhere
    return () => {
      document.removeEventListener('click', handleClickOutside); // Cleanup the event listener
    };
  }, [handleClickOutside]);

  return (
    <Navbar bg="light" expand="lg" ref={navbarRef}> {/* Apply ref to the entire navbar */}
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: '#E4B7C2' }}>
          ELIXIR IV
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setIsOpen(prevState => !prevState)} // Toggle the menu
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={isOpen ? 'show' : ''} // Add 'show' class when the menu is open
        >
          <Nav className="ml-auto">
            <Nav.Link href="/" style={{ color: '#E4B7C2' }}>
              Home
            </Nav.Link>
            <Nav.Link href="/about" style={{ color: '#E4B7C2' }}>
              About
            </Nav.Link>
            <Nav.Link href="/contact" style={{ color: '#E4B7C2' }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
