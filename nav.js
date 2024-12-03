import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiBookOpen} from 'react-icons/bi'
import {BiMessageAltDetail} from 'react-icons/bi'
import {BsBriefcase} from 'react-icons/bs'
import { useState } from 'react'
const Nav = () => {
    const [activeNav,setActiveNav]=useState('#')
  return (
    <nav>
        <a href='#' onClick={()=>setActiveNav('#')} className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
        <a href='#about' onClick={()=>setActiveNav("#about")} className={activeNav==="#about"?"active":""}><BiUser/></a>
        <a href='#experience' onClick={()=>setActiveNav("#experience")} className={activeNav==="#experience"?"active":""}><BsBriefcase/></a>
        <a href='#projects' onClick={()=>setActiveNav("#projects")} className={activeNav==="#projects"?"active":""}><BiBookOpen/></a>
        <a href='#contact'onClick={()=>setActiveNav("#contact")}  className={activeNav==="#contact"?"active":""}><BiMessageAltDetail/></a>
    </nav>
  )
}

export default Nav