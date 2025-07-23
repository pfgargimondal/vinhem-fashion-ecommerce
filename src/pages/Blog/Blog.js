import { Link } from "react-router-dom";
import "./Css/Blog.css";

export const Blog = () => {
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
            <article className="mb-5 article-card">
              <div className="article-number">1</div>
              <img
                src="./images/3782.jpg"
                alt="Stylish woman with short hair and fashionable accessories posing defiantly in studio with dark background"
                className="img-fluid rounded mb-3"
                onerror="this.style.display='none'"
              />
              <h2 className="article-title">Taking Over Street Fashion</h2>
              <p className="article-subtitle d-none fst-italic text-muted">
                New trends and bold statements
              </p>
              <p className="article-text">
                The street fashion scene never sleeps. Every day, new looks emerge,
                inspired by the world around us. From bold colors to understated
                minimalism, the streets have it all. Designers and influencers alike
                draw inspiration from everyday life, creating a unique blend of
                culture and style that is impossible to ignore.
              </p>
              <p className="article-text">
                This season, expect to see a fusion of classic and contemporary
                styles, where heritage meets innovation in unexpected ways.
              </p>
              <Link to="/" className="btn btn-main mt-2">
                Read More
              </Link>
            </article>
    
            <article className="mb-5 article-card">
              <div className="article-number">2</div>
              <img
                src="./images/ewrwer.jpg"
                alt="Black and white photo of woman in geometric patterned dress posing dramatically"
                className="img-fluid rounded mb-3"
                onerror="this.style.display='none'"
              />
              <h2 className="article-title">
                Knowledge <span className="fst-italic">elegantly</span>
              </h2>
              <p className="article-subtitle d-none fst-italic text-muted">
                Fashion wisdom that lasts
              </p>
              <p className="article-text">
                Fashion is an endless journey of learning and creativity. Behind
                every garment lies a rich story — of craftsmanship, culture, and
                evolving styles. As we delve deeper into the history and meaning of
                fashion, we uncover the timeless elegance that elevates personal
                expression to an art form.
              </p>
              <p className="article-text">
                Join us as we decode the secrets and celebrate the brilliance of
                true sophistication.
              </p>
              <Link to="/" className="btn btn-main mt-2">
                Read More
              </Link>
            </article>
  
            <article className="mb-5 article-card">
              <div className="article-number">3</div>
              <img
                src="./images/17550.jpg"
                alt="Woman lying amid sharp volcanic rocks wearing elegant black dress with sheer fabric"
                className="img-fluid rounded mb-3"
                onerror="this.style.display='none'"
              />
              <h2 className="article-title">Livesaving Apps &amp; Websites</h2>
              <p className="article-subtitle d-none fst-italic text-muted">
                Tech meets fashion for a modern lifestyle
              </p>
              <p className="article-text">
                In a world increasingly driven by technology, fashion and lifestyle
                have found innovative digital allies. From apps that streamline
                wardrobe management to websites connecting global designers and
                trendsetters, these tools transform the industry and daily lives.
              </p>
              <p className="article-text">
                Discover the most powerful digital platforms reshaping how we dress,
                shop, and connect.
              </p>
              <Link to="/" className="btn btn-main mt-2">
                Read More
              </Link>
            </article>
    
            <article className="mb-5 article-card">
              <div className="article-number">1</div>
              <img
                src="./images/3782.jpg"
                alt="Stylish woman with short hair and fashionable accessories posing defiantly in studio with dark background"
                className="img-fluid rounded mb-3"
                onerror="this.style.display='none'"
              />
              <h2 className="article-title">Taking Over Street Fashion</h2>
              <p className="article-subtitle d-none fst-italic text-muted">
                New trends and bold statements
              </p>
              <p className="article-text">
                The street fashion scene never sleeps. Every day, new looks emerge,
                inspired by the world around us. From bold colors to understated
                minimalism, the streets have it all. Designers and influencers alike
                draw inspiration from everyday life, creating a unique blend of
                culture and style that is impossible to ignore.
              </p>
              <p className="article-text">
                This season, expect to see a fusion of classic and contemporary
                styles, where heritage meets innovation in unexpected ways.
              </p>
              <Link to="/" className="btn btn-main mt-2">
                Read More
              </Link>
            </article>
    
            <article className="mb-5 article-card">
              <div className="article-number">2</div>
              <img
                src="./images/ewrwer.jpg"
                alt="Black and white photo of woman in geometric patterned dress posing dramatically"
                className="img-fluid rounded mb-3"
                onerror="this.style.display='none'"
              />
              <h2 className="article-title">
                Knowledge <span className="fst-italic">elegantly</span>
              </h2>
              <p className="article-subtitle d-none fst-italic text-muted">
                Fashion wisdom that lasts
              </p>
              <p className="article-text">
                Fashion is an endless journey of learning and creativity. Behind
                every garment lies a rich story — of craftsmanship, culture, and
                evolving styles. As we delve deeper into the history and meaning of
                fashion, we uncover the timeless elegance that elevates personal
                expression to an art form.
              </p>
              <p className="article-text">
                Join us as we decode the secrets and celebrate the brilliance of
                true sophistication.
              </p>
              <Link to="/" className="btn btn-main mt-2">
                Read More
              </Link>
            </article>
  
            <article className="mb-5 article-card">
              <div className="article-number">3</div>
              <img
                src="./images/17550.jpg"
                alt="Woman lying amid sharp volcanic rocks wearing elegant black dress with sheer fabric"
                className="img-fluid rounded mb-3"
                onerror="this.style.display='none'"
              />
              <h2 className="article-title">Livesaving Apps &amp; Websites</h2>
              <p className="article-subtitle d-none fst-italic text-muted">
                Tech meets fashion for a modern lifestyle
              </p>
              <p className="article-text">
                In a world increasingly driven by technology, fashion and lifestyle
                have found innovative digital allies. From apps that streamline
                wardrobe management to websites connecting global designers and
                trendsetters, these tools transform the industry and daily lives.
              </p>
              <p className="article-text">
                Discover the most powerful digital platforms reshaping how we dress,
                shop, and connect.
              </p>
              <Link to="/" className="btn btn-main mt-2">
                Read More
              </Link>
            </article>
          </div>

          <aside className="col-lg-4">
            <div className="sticky-top">              
              <div className="sidebar-block border rounded p-3 mb-4 shadow-sm">
                <h5 className="mb-3">Popular Posts</h5>
                <ul className="csdvfgherdfvsdf list-unstyled">
                  <li className="mb-3 d-flex align-items-center">
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