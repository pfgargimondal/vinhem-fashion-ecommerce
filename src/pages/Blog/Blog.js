// eslint-disable-next-line
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Css/Blog.css";


export const Blog = () => {
  // eslint-disable-next-line
  const [blogs, setBlogs] = useState([{
    id: 15879,
    image: "./images/3782.jpg",
    title: "Taking Over Street Fashion",
    description: "The street fashion scene never sleeps. Every day, new looks emerge, inspired by the world around us. From bold colors to understated minimalism, the streets have it all. Designers and influencers alike draw inspiration from everyday life, creating a unique blend of culture and style that is impossible to ignore. This season, expect to see a fusion of classic and contemporary styles, where heritage meets innovation in unexpected ways."
  },
  {
    id: 15880,
    image: "./images/ewrwer.jpg",
    title: "Knowledge elegantly",
    description: "The street fashion scene never sleeps. Every day, new looks emerge, inspired by the world around us. From bold colors to understated minimalism, the streets have it all. Designers and influencers alike draw inspiration from everyday life, creating a unique blend of culture and style that is impossible to ignore. This season, expect to see a fusion of classic and contemporary styles, where heritage meets innovation in unexpected ways."
  },
  {
    id: 15881,
    image: "./images/17550.jpg",
    title: "Livesaving Apps & Websites",
    description: "The street fashion scene never sleeps. Every day, new looks emerge, inspired by the world around us. From bold colors to understated minimalism, the streets have it all. Designers and influencers alike draw inspiration from everyday life, creating a unique blend of culture and style that is impossible to ignore. This season, expect to see a fusion of classic and contemporary styles, where heritage meets innovation in unexpected ways."
  }]);

  // useEffect(() => {
  //   const fetchBlog = async() => {
  //     const response = await fetch("http://localhost:8000/blogs");
  //     const data = await response.json();
  //     setBlogs(data);
  //   }

  //   fetchBlog();
  // }, []);

  return (
    <div className="blog-wrapper">
      <section className="dfgvswrfcxcfsrfsddf mb-5">
        <div id="topCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner rounded-2 shadow-sm">
            <div className="carousel-item active">
              <img
                src="./images/23653.jpg"
                className="d-block w-100"
                alt="Young fashionable woman passionately posing with leather jacket"
                onerror="this.style.display='none'"
              />
              <div className="carousel-caption text-start">
                <h5>It Burns With New Desire</h5>
                <p>Fashion insights to keep you inspired.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="./images/23653.jpg"
                className="d-block w-100"
                alt="Black shoes, leather bag and stylish accessories displayed artistically on dark background"
                onerror="this.style.display='none'"
              />
              <div className="carousel-caption text-start">
                <h5>Life That Shape The Soul</h5>
                <p>Essentials for a refined look.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="./images/23653.jpg"
                className="d-block w-100"
                alt="Woman modeling a stylish modern denim jacket in urban street setting"
                onerror="this.style.display='none'"
              />
              <div className="carousel-caption text-start">
                <h5>The Spirit of New Design</h5>
                <p>Breaking boundaries and trends.</p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#topCarousel"
            data-bs-slide="prev"
            aria-label="Previous Slide"
          >
            <span className="carousel-control-prev-icon" />
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#topCarousel"
            data-bs-slide="next"
            aria-label="Next Slide"
          >
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      </section>

      <div className="diewhrnweirwer">
        <div className="row">       
          <div className="col-lg-8">          
            {blogs.map(blog => (
              <article className="mb-5 article-card" key={blog.id}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="img-fluid rounded mb-3"
                />

                <h2 className="article-title">{blog.title}</h2>

                <p className="article-text">
                  {blog.description}
                </p>

                <Link to="/blog/mdlkjea" className="btn btn-main mt-2">
                  Read More
                </Link>
              </article>
            ))}
          </div>

          <aside className="col-lg-4">
            <div className="sticky-top">              
              <div className="sidebar-block border rounded p-3 mb-4 shadow-sm">
                <h5 className="mb-3">Popular Posts</h5>
                <ul className="csdvfgherdfvsdf list-unstyled">
                  <li className="mb-3 d-flex align-items-center">
                      {/* eslint-disable-next-line */}
                    <img
                      src="./images/17550.jpg"
                      alt="Thumbnail of woman wearing avant-garde hairstyle"
                      className="me-3 rounded"
                    />
                    <div>
                      <Link to="/" className="text-decoration-none fw-semibold">
                        Avant-Garde Hairstyles
                      </Link>
                      <p className="mb-0 small text-muted">
                        Exploring bold hair trends.
                      </p>
                    </div>
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                      {/* eslint-disable-next-line */}
                    <img
                      src="./images/17550.jpg"
                      alt="Thumbnail of detailed leather handbag on display"
                      className="me-3 rounded"
                    />
                    <div>
                      <Link to="/" className="text-decoration-none fw-semibold">
                        Luxury Leather Bags
                      </Link>
                      <p className="mb-0 small text-muted">Timeless craftsmanship.</p>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                      {/* eslint-disable-next-line */}
                    <img
                      src="./images/17550.jpg"
                      alt="Thumbnail of runway model in futuristic fashion wear"
                      className="me-3 rounded"
                    />
                    <div>
                      <Link to="/" className="text-decoration-none fw-semibold">
                        Runway Highlights
                      </Link>
                      <p className="mb-0 small text-muted">
                        Best moments from fashion week.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="sidebar-block border rounded p-3 mb-4 shadow-sm">
                <h5 className="mb-3">Newsletter</h5>
                <p>
                  Subscribe to get the latest stories, fashion tips, and exclusive
                  offers straight to your inbox.
                </p>
                <form>
                  <div className="mb-3">
                    <label
                      htmlFor="newsletterEmail"
                      className="form-label visually-hidden"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="newsletterEmail"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button type="submit" className="btn btn-main w-100">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}