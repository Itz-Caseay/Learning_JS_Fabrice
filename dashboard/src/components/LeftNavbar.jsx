import React from 'react'
import './styles/LeftNavbar.css';
import { Hexagon } from 'lucide-react';


const LeftNavbar = () => {
  return (
    <div>
        <div className="navbar">
                <div className="logo"> <Hexagon /> Let's Bleed</div>
        </div>
    </div>
  )
}

export default LeftNavbar