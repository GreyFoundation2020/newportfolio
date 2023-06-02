import React, { useState } from 'react'
import './services.css'

export default function Services() {
  const [toggleState, setToggleState] =useState(0)
  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <section className="services section" id='service'>
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What Am Into</span>

        <div className="services__container container grid">
            <div className="services__content">
              <div>
                <i className='uil uil-web-grid services__icon'></i>
                <h3 className="services__title">
                  Product <br />Designer
                </h3>
              </div>   
            <span className="services__button" onClick={()=>
            toggleTab(1)}>View More.......
            <i className='uil uil-arrowr-right'></i>
            </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                <h3 className="services__modal-title">Product Designer</h3>
                <p className="services__modal-description">
                  Am into web development with more than 2 years of experience. Providing quality work to clients and companies

                </p>
                <ul className="services__modal-servicee grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>
                   <li className="services__modal-service">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    <p className="services__modal-info">
                      Web page development.
                    </p>
                  </li>
                   <li className="services__modal-service">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    <p className="services__modal-info">
                      I create ux element interactions.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    <p className="services__modal-info">
                      I position your company brand.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    <p className="services__modal-info">
                      Design mockups of products for companies.
                    </p>
                  </li>
                </ul>
              </div>
              </div>
            </div>
             <div className="services__content">
              <div>
                <i className='uil uil-arrow services__icon'></i>
                <h3 className="services__title">
                  Ui/Ux <br />Designer
                </h3>
              </div>   
            <span className="services__button" onClick={()=>
            toggleTab(2)}>View More........
            <i className='uil uil-arrowr-right'></i>
            </span>

            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <i  onClick={() => toggleTab(0)}  className='uil uil-times services__modal-close'></i>
                <h3 className="services__modal-title">Ui/Ux Designer</h3>
                <p className="services__modal-description">
                  Am into web development with more than 2 years of experience. Providing quality work to clients and companies

                </p>
                <ul className="services__modal-servicee grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>
                   <li className="services__modal-service">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    <p className="services__modal-info">
                      Web page development.
                    </p>
                  </li>
                   <li className="services__modal-service">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    <p className="services__modal-info">
                      I create ux element interactions.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    <p className="services__modal-info">
                      I position your company brand.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    <p className="services__modal-info">
                      Design mockups of products for companies.
                    </p>
                  </li>
                </ul>
              </div>
              </div>
            </div>
         <div className="services__content">
              <div>
                <i className='uil uil-edit services__icon'></i>
                <h3 className="services__title">
                Web <br />Development
                </h3>
              </div>   
            <span className="services__button" onClick={()=>
            toggleTab(3)}>View More.........
            <i className='uil uil-arrowr-right'></i>
            </span>

            <div  className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <i  onClick={() => toggleTab(0)}  className='uil uil-times services__modal-close'></i>
                <h3 className="services__modal-title">Web Development</h3>
                <p className="services__modal-description">
                  Am into web development with more than 2 years of experience. Providing quality work to clients and companies

                </p>
                <ul className="services__modal-servicee grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop dynamics web app.
                    </p>
                  </li>
                   <li className="services__modal-service">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    <p className="services__modal-info">
                      I use React to create navigating style component.
                    </p>
                  </li>
                   <li className="services__modal-service">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    <p className="services__modal-info">
                      I use router for prefect interlink.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    <p className="services__modal-info">
                      I position your company brand.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle service__modal-icon"></i>
                    <p className="services__modal-info">
                      Design mockups of products for companies.
                    </p>
                  </li>
                </ul>
              </div>
              </div>
            </div>                                   
        </div>
    </section>
  )
}
