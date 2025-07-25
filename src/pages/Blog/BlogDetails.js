import { Link } from "react-router-dom";
import "./Css/Blog.css";

export const BlogDetails = () => {
  return (
    <div className="blog-wrapper py-5">
      <div className="diewhrnweirwer">
        <div className="row">       
          <div className="col-lg-8">          
            <article className="mb-5 article-card">
              <img
                src="/images/3782.jpg"
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

              <p className="article-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt mollitia nobis voluptas quasi doloremque, quidem tempore. Nostrum consequuntur magni distinctio perspiciatis, quae similique laborum vero nam ratione laudantium cumque blanditiis reiciendis voluptatum illum assumenda suscipit! Ratione quidem nesciunt possimus reprehenderit error modi accusantium fugit repellat perspiciatis qui soluta porro molestiae quasi quo, rem maiores ipsa earum cum vero pariatur temporibus molestias quas reiciendis voluptatum. Illum autem facere maiores eos, consequatur animi amet et totam aliquid sit iste laborum ipsam necessitatibus libero obcaecati, consectetur, sunt accusamus asperiores perferendis.</p>
             
              <p className="article-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt mollitia nobis voluptas quasi doloremque, quidem tempore. Nostrum consequuntur magni distinctio perspiciatis, quae similique laborum vero nam ratione laudantium cumque blanditiis reiciendis voluptatum illum assumenda suscipit! Ratione quidem nesciunt possimus reprehenderit error modi accusantium fugit repellat perspiciatis qui soluta porro molestiae quasi quo, rem maiores ipsa earum cum vero pariatur temporibus molestias quas reiciendis voluptatum. Illum autem facere maiores eos, consequatur animi amet et totam aliquid sit iste laborum ipsam necessitatibus libero obcaecati, consectetur, sunt accusamus asperiores perferendis.</p>
              
              <p className="article-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt mollitia nobis voluptas quasi doloremque, quidem tempore. Nostrum consequuntur magni distinctio perspiciatis, quae similique laborum vero nam ratione laudantium cumque blanditiis reiciendis voluptatum illum assumenda suscipit! Ratione quidem nesciunt possimus reprehenderit error modi accusantium fugit repellat perspiciatis qui soluta porro molestiae quasi quo, rem maiores ipsa earum cum vero pariatur temporibus molestias quas reiciendis voluptatum. Illum autem facere maiores eos, consequatur animi amet et totam aliquid sit iste laborum ipsam necessitatibus libero obcaecati, consectetur, sunt accusamus asperiores perferendis.</p>
              
              <p className="article-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos doloremque voluptatem nostrum! Eveniet, voluptas? Expedita temporibus, inventore iste quos blanditiis at modi porro consequatur quod magnam sint delectus iusto nulla ea eius eveniet aliquam, iure commodi adipisci fugiat. Doloribus, accusantium voluptates excepturi, fugiat veritatis, quas ab ut itaque animi sapiente est? Corporis amet rem dignissimos nobis? Quidem sed accusantium repudiandae incidunt dolorum sit ducimus expedita asperiores. Natus similique quisquam harum, illum, dolor, reprehenderit porro nostrum pariatur itaque laboriosam eveniet optio incidunt veniam esse eligendi ipsam doloremque ex? Magnam, accusamus libero eos incidunt sunt ea nesciunt ipsa! Odit laboriosam vitae illum nam id? Sapiente minima expedita iusto in vel doloribus dignissimos numquam earum labore aliquid quisquam, consequatur maiores cumque nisi saepe nobis deserunt vitae quam laborum veritatis dolor molestiae. Assumenda quas ducimus saepe nostrum odio. Modi, reiciendis fugiat, recusandae nemo quisquam adipisci id ipsum, a corrupti perspiciatis saepe et odit quas?</p>
            </article>
          </div>

          <aside className="col-lg-4">
            <div className="sticky-top">              
              <div className="sidebar-block border rounded p-3 mb-4 shadow-sm">
                <h5 className="mb-3">Popular Posts</h5>
                <ul className="csdvfgherdfvsdf list-unstyled">
                  <li className="mb-3 d-flex align-items-center">
                    <img
                      src="/images/17550.jpg"
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
                      src="/images/17550.jpg"
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
                      src="/images/17550.jpg"
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