import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import{VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id="about">
        <h2>Why use CATALYST</h2>
        <div className='container about__container'>
        <div className='about__content'>
            <h1>FOR IMAGE PROCESSING</h1>
            <p>
            CATALYST delivers sensor and cloud agnostic image processing SaaS solutions for the entire Earth Observation value chain. Our capabilities are embedded in thousands of workflows worldwide, helping businesses deliver higher quality imagery products, while cost-effectively scaling their production in near real-time with demand.
                    </p>
        </div>
        <div className='about__content'>
            <h1>FOR RISK MITIGATION</h1>
            <p>
            CATALYST enables businesses to easily integrate satellite data into their existing technology stack and reliably monitor and identify risk in their assets and critical infrastructure. Using the same trusted algorithms in our image processing solutions, businesses can generate new analytics from our DaaS solutions to make better, sustainable decisions, faster.
                    </p>
        </div>
        </div>
    </section>
    
  )
}

export default About