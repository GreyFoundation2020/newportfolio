import React from 'react'
import './about.css'            
import Aboutimg from "../../../assets/aboutimg.JPG"  
import CV from "../../../assets/CV.pdf" 
import Info from './Info';


g
export default function About() {
  return (
    <section className="about section" id='about'>
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>
        <div className="about__container container grid">
            <img src={Aboutimg} alt="img" className="about__img" />
            <div className="about__data">
              <Info/>
              <p className="about__description"> I graduated from Far Cross River University of Technology and I got a bachelor's degree in Electrical Electronics Engineering. I have both experience in working in office and remotely. My major skills are Html, Css, javascript,Tailwind,Bootstrap, React,TypeScript and Blockchain technology.
In the meantime, I worked on  several projects including Financial and E-commerce and so on, and gained a good experience and skills of web development. And I received good reviews from several clients and put up my name on team section of websites.

It can be said that the strengths that I can see are the simultaneous guarantee of project speed and quality, accurate time management, and sincerity.

I will work harder and harder for your company with all my heart and ability. If there is anything I don't know, I will learn from my team members and I will focus all in the success of company.

Let's work together! THANKS!
              </p>   
              <a download='' href={CV} className="button button--flex">
                Download CV
              </a>
            </div>

        </div>
    </section>
    
  )
}
