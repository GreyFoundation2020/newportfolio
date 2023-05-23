import React from 'react'
import './testimonial.css'

import {Data} from './Data'




export default function Testimonial() {
  return (
   <section className='testimonial container section'>
        <h2 className="section__title">My clients Say</h2>
        <span className="section__subtitle">Testimonial</span>
        <div className="testimonial__container">
            {Data.map(({ id, image, title, description}) => {
                return(
                    <div className="testimonial__card" key={id}>
                        <img src={image} alt="" className='testimonial__image' />
                        <h3 className="testimonial__name">{title}</h3>
                        <p className="testimonial__description">{description}</p>
                    </div>

                )
            }

            )} 
        </div>


   </section>
  )
}
