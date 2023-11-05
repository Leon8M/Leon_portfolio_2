/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Original Portfolio",
    port_img: "image.jpg",
    description: "Github repo containing all the code for my first instance of a Portfolio.",
    url: "https://github.com/Leon8M/Portfolio",
  },
  {
    title: "My Resume Site",
    port_img: "port.png",
    description: "This is the Github repo containing all code for this site.",
    url: "https://github.com/Leon8M/Leon_portfolio_2",
  },
  {
    title: "Anthony Njeru's Portfolio",
    port_img: "port.png",
    description:
      "Portfolio website for a customer, Anthony, who is an auditor. Contains all infomation required for his hiring.",
    url: "https://anthonykimathi.netlify.app/",
  },
  {
    title: "Mamika Creations Website",
    port_img: "port.png",
    description:
      "Website to cater for the business of Mamika Creations, an art company for all things abstract and acrylic.",
    url: "https://mamikacreations.netlify.app/",
  },
  {
    title: "The Lazy Revolution: How Innovation Shapes Our Lives and Our Laziness",
    port_img: "port.png",
    description: "Blog on how the rise in technological innovation influences our way of life.",
    url: "https://medium.com/@Leonmunene/the-lazy-revolution-how-innovation-shapes-our-lives-and-our-laziness-5df9239b8cee",
  },
  {
    title:
      "How Software engineers can decrease the chance of ones job being replaced by AI in the near or far future",
    port_img: "port.png",
    description:
      "Blog on how software engineers can secure their jobs during this technological age.",
    url: "https://medium.com/@Leonmunene/how-software-engineers-can-decrease-the-chance-of-ones-job-being-replaced-by-ai-in-the-near-or-far-4d0fb84dc0a1",
  },
];
const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              {
                //<img
                  //src={`../images/${project.image}`}
                 // style={{
                   // height: "90%",
                   // width: "100%",
                   // objectFit: "cover",
                   // animation: "1s ease-out 0s 1 slideIn",
                 // }}
                 // alt=""
               // />
              }
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
