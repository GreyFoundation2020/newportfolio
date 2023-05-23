import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <footer className=' footer'>
    <div className="footer__container container">
      <di className='tittle__content'>
         <h2 className="footer__title">Greg Gregory </h2>
         <q>Am an amazing web developer that build a lot of web pages with React. share your thoughts to get it done</q>
      </di>
       <div className="lists">
            <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li> <li>
            <a href="#project" className="footer__link">Project</a>
          </li>
           <li>
            <a href="#service" className="footer__link">Service</a>
          </li>
           <li>
            <a href="#blog" className="footer__link">Blog</a>
          </li>
        </ul>
    <div className="footer__social">
      <a href="" className="footer__social-link"target='_blank'>
        <i className="bx bxl-facebook"></i>
      </a>
     <a href="" className="footer__social-link"target='_blank'>
        <i className="bx bxl-instagram"></i>
      </a>
      <a href="" className="footer__social-link"target='_blank'>
        <i className="bx bxl-twitter"></i>
      </a>
      <a href="" className="footer__social-link"target='_blank'>
        <i className="bx bxl-github"></i>
      </a>
    </div>

       </div>
    
    <div className='subscribebtn'>
      <span>Subscribe To <br/> Your Weekly Newscattle.</span>
      <form class="search-wrapper cf">
        <input type="text" placeholder="Enter your email..."/>
        <button type="submit">Subscribe</button>
    </form>
    </div>
   
    </div>
     <span className="footer-copy">©Greg Gregory 2023. All right reserved</span>
    </footer>
  )
}
