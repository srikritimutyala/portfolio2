'use client';

import { Button, Navbar } from 'flowbite-react';

export default function Nav() {
  return (
    
    <Navbar fluid rounded>
      
     
      <Navbar.Collapse>
      <div className="flex">
      <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#" active className="white-text">About</Navbar.Link>
        <Navbar.Link href="#" active className="white-text">Services</Navbar.Link>
        <Navbar.Link href="#" active className="white-text">Pricing</Navbar.Link>
        <Navbar.Link href="#" active className="white-text">Contact</Navbar.Link>
      </div>
        
      </Navbar.Collapse>
    </Navbar>
  )
}


