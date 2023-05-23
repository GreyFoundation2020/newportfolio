import React from 'react'
import './qualification.css'

export default function Qualification() {
    
  return (
  <section className="qualification section">
    <h2 className="section__title">Qualification</h2>
    <span className="section__subtitle">My Personal Journey</span>

    <div className="qualification__container container">
        <div className="qualification__tabs">
            <div className="qualification__button qualification__active button--flex">
                <i className="uil uil_graduation-cap"></i>
                {""}Education
             </div>

               <div className="qualification__button button--flex">
                <i className="uil uil_briefcase-alt"></i>
                {""}Experiences.
             </div>
        </div>
        <div className="qualification__sections">
            <div className="qualification__content qualification__content-active ">
                <div className="qualification__data">
                    <div className="">
                        <h3 className="qualifcation__title">Computer Hardware</h3>
                        <span className="qualification__subtitle">Methodist College</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>
                            2009 - 2015
                        </div>
                    </div>
                    <div className="">
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div>
                         <div className="">
                        <h3 className="qualifcation__title">Electrical Electronices Engineering</h3>
                        <span className="qualification__subtitle">Cross River University of Technology</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>
                         2016 - 2021
                        </div>
                    </div>

                    </div>
                        
                   
                        <div className="">
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
            
                </div>

                <div className="qualification__data">
                    <div></div>
                        <div className="">
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                    <div className="">
                        <h3 className="qualifcation__title">Web Development</h3>
                        <span className="qualification__subtitle">Nugi Technology Innovation Center</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>
                         2021 - 2022
                        </div>
                    </div>
            
                </div>


            </div>

            <div className="qualification__content qualification__content-active">
                <div className="qualification__data">
                    <div className="">
                        <h3 className="qualifcation__title">Web Developer</h3>
                        <span className="qualification__subtitle">NugiTech</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>
                            2022 - 2022
                        </div>
                    </div>
                    <div className="">
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>
                        <div className="">
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                    <div className="">
                        <h3 className="qualifcation__title">Product Manager</h3>
                        <span className="qualification__subtitle">Cross River University of Technology</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>
                         2021 - present
                        </div>
                    </div>
            
                </div>

                <div className="qualification__data">
                    <div></div>
                        <div className="">
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                    <div className="">
                        <h3 className="qualifcation__title">Figma Designer</h3>
                        <span className="qualification__subtitle">Nugi Technology Innovation Center</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>
                         2021 - Present
                        </div>
                        
                    </div>
                    
            
                </div>


            </div>
        </div>
    </div>

  </section>
  )
}
