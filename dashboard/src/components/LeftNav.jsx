import React from 'react'
import './LeftNav.css'
import { LucideHexagon } from 'lucide-react'

const LeftNav = () => {
  return (
    <div>
        <div className="left-nav">
            <div className="logo">
                <LucideHexagon size={50} /> <h2> CORE<span className='ui'>UI</span> <span className='react'>React.JS</span></h2>
            </div>
        </div>
    </div>
  )
}

export default LeftNav