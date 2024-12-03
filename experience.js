import React from 'react'
import './experience.css'
import {BsShieldFillCheck} from 'react-icons/bs'
import ME from '../../assets/me.jpg'
const Experience = () => {
  return (
    <section id="experience">
      <div className='container experience__container'>
        <div className='experience__frontend'>
    <h3>IMAGE PROCESSING OPTIMIZATION</h3>
    <h4>CATALYST helps Earth Observation (EO) Image and Analytics providers build new and augment existing workflows to improve quality, accuracy and scalability.</h4>
    <a href='#contact' className='btn btn-primary' style={{marginLeft:"40%",marginTop:"2%"}}>Learn More</a>
    <div className='experience__content'>
    <div className='me'>
                <img src={ME} style={{width:"20rem",height:"10rem"}}alt="me"/>
            </div>
    </div>
        </div>
        <div className='experience__frontend'>
    <h3>RISK MITIGATION SOLUTIONS</h3>
    <h4>CATALYST delivers risk mitigation data-as-a-service (DaaS) solutions across industry applications to enable faster and sustainable business decisions.</h4>
    <a href='#contact' className='btn btn-primary' style={{marginLeft:"40%",marginTop:"2%"}}>Learn More</a>
    <div className='experience__content'>
    <div className='ne' style={{width: "60rem",height:"40rem",position: "absolute",left:"62%",marginTop:"4%"}}>
                <img src={ME} style={{width:"20rem",height:"10rem"}}alt="ww"/>
            </div>
    </div>
        </div>
      </div>
    </section>
  )
}

export default Experience