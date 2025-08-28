import React from 'react'
import './MainBar.css'
import { MenuIcon } from 'lucide-react'
import { Bell } from 'lucide-react'
import { ListTodo } from 'lucide-react'
import { Mail } from 'lucide-react'
import { SunIcon } from 'lucide-react'
import user from '../assets/me.jpg'

const MainBar = () => {
  return (
    <div>
        <div className="nav-bar">
            <div className="menu"> <MenuIcon size={25} className='btn' /> <MenuIcon size={25} className='btn' /> <span>Home  </span> <span>/</span> <span>Dashboard</span></div>

            <div className="user">
                <span><Bell /></span>
                <span><ListTodo /></span>
                <span><Mail/></span>
                <span><SunIcon /></span>
                <span><img src={user} alt="user profile" /></span>
            </div>
        </div>
    </div>
  )
}

export default MainBar