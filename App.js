import React from 'react'
import About from './components/About/about'
import Experience from './components/Experience/experience'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import Nav from './components/Nav/nav'
import Project from './components/Projects/project'
import './index.css'
 

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <Experience/>
    <About/>
    <Project/>
    <Footer/>

    </>
  )
}

export default App