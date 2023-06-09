import React from 'react'
import Backend from './Backend'
import Frontend from './Frontend'
import './skills.css'

export default function Skills() {
  return (
   <section className="skills section" id='skill'>
    <h2 className="section__title">Skills</h2>
    <span className="section__subtitle">My technical level</span>

    <div className="skills__container">
      <Frontend/>
      <Backend/>
    </div>


   </section>
  )
}
