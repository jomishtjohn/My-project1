import React from 'react'
import './project.css'
import {BiCheck} from 'react-icons/bi'
import NE from '../../assets/ne.JPG'
const Project = () => {
  return (
    <section id="projects">
      <div className='container projects__container'>
        <article className='project'>
          <div className='project__head'>
          <h1>HOW WE WORK WITH YOU</h1>
          </div>
          <p style={{marginTop:"2%",marginBottom:"2%",marginLeft:"2%"}}>
          <h3 style={{marginTop:"2%",marginBottom:"2%",marginLeft:"2%"}}>How we start</h3>
We always start with our client’s business challenges. By mapping your needs to our capabilities, we deliver desired business value.
<h3 style={{marginTop:"2%",marginBottom:"2%",marginLeft:"2%"}}>HOW WE DELIVER</h3>
We leverage the latest in cloud technology, web-apps, APIs and partner platforms to easily integrate our SaaS and DaaS solutions.
<h3 style={{marginTop:"2%",marginBottom:"2%",marginLeft:"2%"}}>HOW WE PRICE</h3>
Flexible subscription and consumption models help de-risk your business by making it easy to scale up and down based on your need and demand.
<h3 style={{marginTop:"2%",marginBottom:"2%",marginLeft:"2%"}}>HOW WE ENSURE SUCCESS</h3>
Our Customer Success team provides industry leading technical support and regular business reviews to ensure we remain aligned and continue to add value.
          </p>
        </article>

        {/* End of IVR */}


        <article >
        <img src={NE} style={{width:"30rem",height:"30rem"}}alt="me"/>
        </article>
      </div>
    </section>
  )
}

export default Project