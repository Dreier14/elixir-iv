import React, { useState, useEffect, useRef, useCallback } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest('.navbar-toggler')) {
      setIsOpen(false);
    }
  }, []);
  
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    // Cleanup function that runs when component unmounts or before re-running the effect
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside, isOpen]);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "#E4B7C2" }}>
          ELIXIR IV
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setIsOpen((prev) => !prev)}
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          ref={menuRef} // Apply ref to collapsible menu
          in={isOpen} // Ensure state controls the menu visibility
        >
          <Nav className="ml-auto">
            <Nav.Link href="/" style={{ color: "#E4B7C2" }}>
              Home
            </Nav.Link>
            <Nav.Link href="/about" style={{ color: "#E4B7C2" }}>
              About
            </Nav.Link>
            <Nav.Link href="/contact" style={{ color: "#E4B7C2" }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
