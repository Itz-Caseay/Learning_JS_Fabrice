import React from 'react'
import './styles/LeftNavbar.css';
import { Hexagon } from 'lucide-react';


const LeftNavbar = () => {
  return (
    <div>
        <div className="navbar">
                <div className="logo"> <Hexagon size={50} /> <span>CORE <span>UI</span> REACT.JS</span></div>
        </div>
    </div>
  )
}

export default LeftNavbar