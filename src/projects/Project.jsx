import React from "react";
import "./Project.css";
import IMG1 from "./../assets/onsell.jpg";
import IMG2 from "./../assets/weather.jpg";
import IMG3 from "./../assets/visita.jpg";
import IMG4 from "./../assets/brochure.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "OnSell",
    github: "https://github.com/Ade-mir/MERN-social-media-platform",
    demo: "https://peaceful-cranachan-56056a.netlify.app/",
    brief:
      "https://www.canva.com/design/DAFapZZx0GI/205p6bLMxmlp8Z4OjkvcMw/view?utm_content=DAFapZZx0GI&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu",
  },
  {
    id: 2,
    image: IMG2,
    title: "Weather App",
    github: "",
    demo: "https://weather-app-eight-flame.vercel.app/",
    brief: "",
  },
  {
    id: 3,
    image: IMG3,
    title: "Visita ",
    github: "",
    demo: "https://vasiti-site.vercel.app/",
    brief:
      "https://github.com/Ade-mir/javascript-calculator/blob/main/README.md",
  },
  {
    id: 4,
    image: IMG4,
    title: "React Brochure Site",
    github: "https://github.com/Ade-mir/brochure-site",
    demo: "https://deluxe-gumption-ef08f4.netlify.app/",
    brief: "https://github.com/Ade-mir/brochure-site/blob/main/README.md",
  },
];


export default function Project(){
  return (
    <section className=' section ' id='contact'>
       <h2 className="section__title">My Recent Work</h2>
        <span className="section__subtitle">Projects</span>
      <div className="container grid portfolio__container">
        {data.map(({ id, image, title, github, demo, brief }) => {
          return (
            <article key={id} className="portfolio__item ">
              
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <div className="projectdata"> 
                <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={brief} className="btn">
                  Project Brief
                </a>
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
              </div> 
            
            </article>
          );
        })}
      </div>
    </section>
  );
};