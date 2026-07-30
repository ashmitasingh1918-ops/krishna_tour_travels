import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaCalendarAlt,
  FaUsers,
  FaCarSide,
  FaShieldAlt,
  FaHeadset,
  FaArrowLeft,
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import blogData from "./Blog_api";

import "./Blog.css";

const Blog = () => {
  const { id } = useParams();

  // Normalize blogData to handle different export formats
  const blogsList = Array.isArray(blogData)
    ? blogData
    : (blogData && Array.isArray(blogData.blogs)
      ? blogData.blogs
      : (blogData && blogData.default && Array.isArray(blogData.default)
        ? blogData.default
        : []));

  // Determine if we should show the details page or listing page
  const isDetailsView = id !== undefined;

  // Find the current blog for details view
  const currentBlog = isDetailsView
    ? blogsList.find((blog) => blog.id === Number(id))
    : null;

  const [activeSlideIdx, setActiveSlideIdx] = useState(0);

  // Julio B card slideshow
  const julioImages = [
    `${import.meta.env.BASE_URL}images/Julio.jpg`,
    `${import.meta.env.BASE_URL}images/Julio1.jpg`,
    `${import.meta.env.BASE_URL}images/Julio2.jpg`,
  ];
  const [julioIdx, setJulioIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setJulioIdx((p) => (p + 1) % julioImages.length), 3000);
    return () => clearInterval(t);
  }, []);

  // Auto-play the blog details slideshow if multiple images exist
  useEffect(() => {
    setActiveSlideIdx(0);
    if (currentBlog && currentBlog.images && currentBlog.images.length > 1) {
      const interval = setInterval(() => {
        setActiveSlideIdx((prev) => (prev + 1) % currentBlog.images.length);
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [currentBlog]);

  // Only render original blog posts in the map — review entries are rendered as hardcoded cards below
  const latestBlogs = blogsList.filter((b) => b.category !== "Guest Review");

  // Details page logic:
  // Find previous and next blogs for navigation
  const currentIdx = currentBlog
    ? blogsList.findIndex((blog) => blog.id === currentBlog.id)
    : -1;
  const prevBlog = currentIdx > 0 ? blogsList[currentIdx - 1] : null;
  const nextBlog = currentIdx < blogsList.length - 1 ? blogsList[currentIdx + 1] : null;

  // Related blogs (exclude current blog)
  const relatedBlogs = currentBlog
    ? blogsList.filter((blog) => blog.id !== currentBlog.id).slice(0, 3)
    : [];

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="blogPageWrapper">
      <Navbar />

      {/* RENDER VIEW: 1. BLOG NOT FOUND */}
      {isDetailsView && !currentBlog && (
        <section className="blogNotFoundSection">
          <div className="blogContainer">
            <div className="notFoundWrapper">
              <h2>Post Not Found</h2>
              <p>The travel story you are looking for might have been moved or doesn't exist.</p>
              <Link to="/blog" className="blogBtn blogBtn-primary">
                Return to Blogs
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* RENDER VIEW: 2. BLOG POST DETAILS */}
      {isDetailsView && currentBlog && (
        <div className="blogDetailsView">
          {/* Hero Section */}
          <section
            className="blogDetailsHero"
            style={{
              backgroundImage: `linear-gradient(rgba(11, 25, 65, 0.75), rgba(11, 25, 65, 0.75)), url('${currentBlog.coverImage || currentBlog.image}')`
            }}
          >
            <div className="blogContainer">
              <div className="detailsHeroContent">
                <span className="blogCategoryBadge detailsCategoryBadge">
                  {currentBlog.category}
                </span>
                <h1 className="detailsPostTitle">{currentBlog.title}</h1>
              </div>
            </div>
          </section>

          {/* Article Content Section */}
          <section className="blogArticleSection">
            <div className="blogContainer">
              <div className="blogDetailsLayout">
                {/* Left Column: Large Featured Image */}
                <div className="blogDetailsLeft">
                  <div className="blogFeaturedImageWrapper">
                    {currentBlog.images && currentBlog.images.length > 0 ? (
                      <div className="blog-detail-slider">
                        {currentBlog.images.map((imgUrl, index) => (
                          <img
                            key={index}
                            src={imgUrl}
                            alt={`${currentBlog.title} slide ${index + 1}`}
                            className={`blogFeaturedImage slider-image ${index === activeSlideIdx ? 'active' : ''}`}
                            style={{
                              opacity: index === activeSlideIdx ? 1 : 0,
                              visibility: index === activeSlideIdx ? 'visible' : 'hidden',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transition: 'opacity 0.5s ease-in-out'
                            }}

                          />
                        ))}
                        {currentBlog.images.length > 1 && (
                          <>
                            <button
                              className="slider-btn prev-btn"
                              onClick={(e) => {
                                e.preventDefault();
                                setActiveSlideIdx((prev) => (prev - 1 + currentBlog.images.length) % currentBlog.images.length);
                              }}
                            >
                              ‹
                            </button>
                            <button
                              className="slider-btn next-btn"
                              onClick={(e) => {
                                e.preventDefault();
                                setActiveSlideIdx((prev) => (prev + 1) % currentBlog.images.length);
                              }}
                            >
                              ›
                            </button>
                            <div className="slider-dots">
                              {currentBlog.images.map((_, index) => (
                                <span
                                  key={index}
                                  className={`slider-dot ${index === activeSlideIdx ? 'active' : ''}`}
                                  onClick={() => setActiveSlideIdx(index)}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    ) : (
                      <img
                        src={currentBlog.image || currentBlog.coverImage}
                        alt={currentBlog.title}
                        className="blogFeaturedImage"
                      />
                    )}
                  </div>
                </div>

                <div className="blogDetailsRight">

                  <article className="blogArticleContent">
                    {currentBlog.content && Array.isArray(currentBlog.content) ? (
                      currentBlog.content.map((block, idx) => {
                        if (block.type === "paragraph") {
                          const parts = block.text.split(/(\*\*.*?\*\*)/g);
                          return (
                            <p key={idx} className="detailParagraph">
                              {parts.map((part, i) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                  return <strong key={i}>{part.slice(2, -2)}</strong>;
                                }
                                return part;
                              })}
                            </p>
                          );
                        }
                        if (block.type === "heading") {
                          return <h3 key={idx} className="detailSubheading">{block.text}</h3>;
                        }
                        if (block.type === "tip") {
                          return (
                            <div key={idx} className="detailTipBox">
                              <span className="tipBoxIcon">💡</span>
                              <div className="tipBoxText">
                                <h5>Travel Tip</h5>
                                <p>{block.text}</p>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      })
                    ) : (
                      <p className="detailParagraph">{currentBlog.description}</p>
                    )}

                    {/* Tags */}
                    {currentBlog.tags && (
                      <div className="articleTagsContainer">
                        <span className="tagsLabel">Tags:</span>
                        <div className="articleTagsList">
                          {currentBlog.tags.map((tag, idx) => (
                            <span key={idx} className="articleTag">#{tag}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </article>
                </div>
              </div>

              <div className="articleMainWrapper">

                {/* Article Footer: Navigation & Share */}
                <div className="detailNavigation">
                  <div className="prevNextLinks">
                    {prevBlog ? (
                      <Link to={`/blog/${prevBlog.id}`} className="prevBlogLink">
                        <FaArrowLeft className="navArrow" />
                        <div className="navLinkText">
                          <span className="navLinkSub">Previous Post</span>
                          <span className="navLinkTitle">{prevBlog.title}</span>
                        </div>
                      </Link>
                    ) : (
                      <div className="emptyNavSpacer" />
                    )}

                    {nextBlog ? (
                      <Link to={`/blog/${nextBlog.id}`} className="nextBlogLink">
                        <div className="navLinkText text-end">
                          <span className="navLinkSub">Next Post</span>
                          <span className="navLinkTitle">{nextBlog.title}</span>
                        </div>
                        <FaArrowRight className="navArrow" />
                      </Link>
                    ) : (
                      <div className="emptyNavSpacer" />
                    )}
                  </div>

                  <div className="shareAndBackRow">
                    <Link to="/blog" className="blogBtn blogBtn-secondary backToBlogsBtn">
                      <FaArrowLeft /> Back to Blogs
                    </Link>

                    <div className="shareContainer">
                      <span className="shareLabel">Share Article:</span>
                      <div className="shareButtons">
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shareIcon fbShare"
                        >
                          <FaFacebookF />
                        </a>
                        <a
                          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(currentBlog.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shareIcon twitterShare"
                        >
                          <FaTwitter />
                        </a>
                        <a
                          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shareIcon linkedinShare"
                        >
                          <FaLinkedinIn />
                        </a>
                        <a
                          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(currentBlog.title + ' - ' + currentUrl)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shareIcon whatsappShare"
                        >
                          <FaWhatsapp />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Related Blogs Section */}
                {relatedBlogs.length > 0 && (
                  <div className="relatedBlogsSection">
                    <h3 className="relatedBlogsHeading">Related Travel Stories</h3>
                    <div className="relatedBlogsGrid">
                      {relatedBlogs.map((rBlog) => (
                        <div className="relatedBlogCard" key={rBlog.id}>
                          <div className="relatedBlogImageWrapper">
                            <img src={rBlog.image} alt={rBlog.title} className="relatedBlogImage" />
                            <span className="blogCategoryBadge">{rBlog.category}</span>
                          </div>
                          <div className="relatedBlogContent">
                            <h4 className="relatedBlogTitle">{rBlog.title}</h4>
                            <p className="relatedBlogDesc">{rBlog.description}</p>
                            <Link to={`/blog/${rBlog.id}`} className="blogBtn blogBtn-secondary relatedCardBtn">
                              Read More
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* RENDER VIEW: 3. BLOG POSTS LISTING */}
      {!isDetailsView && (
        <div className="blogListingView">
          {/* 1. Hero Section */}
          <section
            className="blogHeroSection"
            style={{
              backgroundImage: `url('${import.meta.env.BASE_URL}images/b.png')`
            }}
          >
            <a
              href="#travel-stories"
              className="blogBtn blogBtn-primary heroBtn"
            >
              Explore Stories
            </a>
          </section>

          {/* TripAdvisor Banner */}
          <div className="tripBannerWrapper">
            <div className="tripBannerInner">
              {/* Left: logo */}
              <div className="tripBannerLogo">
                <svg viewBox="0 0 64 64" className="tripOwlSvg" fill="#00AA6C" aria-hidden="true">
                  <path d="M39.1 13.516a50.1 50.1 0 0 1 5.3 1.209 32.624 32.624 0 0 1 8.492 3.929 1.435 1.435 0 0 0 .7.2h10.189v.1a4.39 4.39 0 0 0-.4.705 16.853 16.853 0 0 0-2.5 5.239.477.477 0 0 0 .1.6 15.734 15.734 0 0 1 2.5 13.3 15.315 15.315 0 0 1-7.094 9.772 15.97 15.97 0 0 1-8.487 2.422 15.691 15.691 0 0 1-3.8-.5 16.211 16.211 0 0 1-7.893-4.634 9.057 9.057 0 0 1-.9-1.007c-1.1 1.713-2.3 3.425-3.4 5.138-1.2-1.713-2.3-3.425-3.4-5.037-.1 0-.1 0-.1.1l-.1.1a15.544 15.544 0 0 1-9.891 5.641 14.656 14.656 0 0 1-6.594-.4 15.314 15.314 0 0 1-7.793-4.936 15.784 15.784 0 0 1-3.8-8.16 13.951 13.951 0 0 1 .3-6.347 13.547 13.547 0 0 1 2.4-5.339.76.76 0 0 0 .1-.5 21.114 21.114 0 0 0-2.2-4.836 7.687 7.687 0 0 0-.8-1.108v-.1h9.9c.1 0 .3-.1.4-.1a34.036 34.036 0 0 1 7.194-3.526 50.8 50.8 0 0 1 5.6-1.511 33.995 33.995 0 0 1 5.6-.705 41.028 41.028 0 0 1 10.377.291zm-4 21.458a12.789 12.789 0 1 0 12.6-12.895 12.8 12.8 0 0 0-12.593 12.895zM15.924 22.079a12.846 12.846 0 1 0 12.788 12.895 12.706 12.706 0 0 0-12.788-12.895zm.7-3.324a15.746 15.746 0 0 1 10.091 4.231 16.211 16.211 0 0 1 5.2 9.772A16.351 16.351 0 0 1 37 23.087a15.491 15.491 0 0 1 10-4.231 36.237 36.237 0 0 0-14.187-3.022 38.507 38.507 0 0 0-16.19 2.921z" />
                </svg>
                <span className="tripLogoText">Tripadvisor</span>
              </div>

              {/* Divider */}
              <div className="tripBannerDivider" />

              {/* Centre: stars + text */}
              <div className="tripBannerCenter">
                <div className="tripStars">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} viewBox="0 0 24 24" fill="#00AA6C" width="22" height="22" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="tripBannerTitle">Read Our Traveler Reviews</p>
                <p className="tripBannerSub">See what our guests say about their journeys with Krishna Tour India.</p>
              </div>

              {/* Right: CTA button */}
              <a
                href="https://www.tripadvisor.in/Attraction_Review-g304551-d33496890-Reviews-Krishna_Tour_India-New_Delhi_National_Capital_Territory_of_Delhi.html"
                target="_blank"
                rel="noopener noreferrer"
                className="tripBannerBtn"
              >
                Click here to see our ratings on Tripadvisor&nbsp;↗
              </a>
            </div>
          </div>

          {/* All Stories & Reviews — single grid */}
          <section id="travel-stories" className="latestStoriesSection">
            <div className="blogContainer">
              <span className="blogSectionPretitle">TRAVEL DIARIES & REVIEWS</span>
              <h2 className="blogSectionHeading">Stories & Reviews from Our Guests</h2>

              <div className="latestStoriesGrid">

                {/* Blog card 1 */}
                {latestBlogs.map((blog) => (
                  <div className="latestBlogCard" key={blog.id}>
                    <div className="latestBlogImageWrapper">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="latestBlogImage"
                      />
                      <span className="blogCategoryBadge">
                        {blog.category || "Travel Guide"}
                      </span>
                    </div>

                    <div className="latestBlogCardContent">
                      <div className="blogMeta">
                        <span className="blogMetaItem">
                          <span className="blogMetaIcon">📁</span> {blog.category || "Travel"}
                        </span>
                      </div>

                      <h3 className="latestBlogCardTitle">{blog.title}</h3>
                      <p className="latestBlogCardDesc">{blog.description}</p>

                      <Link
                        to={`/blog/${blog.id}`}
                        className="blogBtn blogBtn-secondary latestCardBtn"
                      >
                        Read Full Review
                      </Link>
                    </div>
                  </div>
                ))}

                {/* Review — Davide P */}
                <div className="latestBlogCard">
                  <div className="latestBlogImageWrapper">
                    <img
                      src={`${import.meta.env.BASE_URL}images/blog3new.png`}
                      alt="Davide P – Perfectly organized"
                      className="latestBlogImage"
                    />
                    <span className="blogCategoryBadge">⭐ 5 / 5 Stars</span>
                  </div>
                  <div className="latestBlogCardContent">
                    <div className="blogMeta">
                      <span className="blogMetaItem">
                        <span className="blogMetaIcon">📁</span> TripAdvisor · Dec 2025
                      </span>
                    </div>
                    <h3 className="latestBlogCardTitle">Perfectly organized — Davide P</h3>
                    <p className="latestBlogCardDesc">
                      We had an amazing experience planning our trip to India with Krishna Tour. Everything was very well organized from start to finish, which allowed us to simply enjoy the journey without worrying about the logistics. Always available to answer our questions, quick to respond, and incredibly helpful.
                    </p>
                    <Link to="/blog/3" className="blogBtn blogBtn-secondary latestCardBtn">
                      Read Full Review
                    </Link>
                  </div>
                </div>

                {/* Review — Annita P */}
                <div className="latestBlogCard">
                  <div className="latestBlogImageWrapper">
                    <img
                      src={`${import.meta.env.BASE_URL}images/blog4new.png`}
                      alt="Annita P – Unforgettable experience"
                      className="latestBlogImage"
                    />
                    <span className="blogCategoryBadge">⭐ 5 / 5 Stars</span>
                  </div>
                  <div className="latestBlogCardContent">
                    <div className="blogMeta">
                      <span className="blogMetaItem">
                        <span className="blogMetaIcon">📁</span> TripAdvisor · Jul 2026
                      </span>
                    </div>
                    <h3 className="latestBlogCardTitle">Unforgettable experience — Annita P</h3>
                    <p className="latestBlogCardDesc">
                      Our trip through Delhi, Varanasi, Khajurao, Orcha & Agra was exceptionally well organized. A special thanks to <strong>Gaurav</strong> for his outstanding professionalism and impeccable organization. I highly recommend <strong>Krishna Tour</strong> to anyone looking for a reliable travel agency. We will certainly travel with them again. 💗
                    </p>
                    <Link to="/blog/4" className="blogBtn blogBtn-secondary latestCardBtn">
                      Read Full Review
                    </Link>
                  </div>
                </div>

                {/* Review — Alberto A */}
                <div className="latestBlogCard">
                  <div className="latestBlogImageWrapper">
                    <img
                      src={`${import.meta.env.BASE_URL}images/agra.jpg`}
                      alt="Alberto A – Excellent experience"
                      className="latestBlogImage"
                    />
                    <span className="blogCategoryBadge">⭐ 5 / 5 Stars</span>
                  </div>
                  <div className="latestBlogCardContent">
                    <div className="blogMeta">
                      <span className="blogMetaItem">
                        <span className="blogMetaIcon">📁</span> TripAdvisor · Jul 2026
                      </span>
                    </div>
                    <h3 className="latestBlogCardTitle">Excellent experience — Alberto A</h3>
                    <p className="latestBlogCardDesc">
                      This tour operator is the best. Mr. Gaurav Gupta organizes everything for you — hotels, transport, guides. The people working for Gaurav are professional, very kind and try their best to help travellers understand Indian culture. Professional, punctual and competitively priced. I really recommend them.
                    </p>
                    <Link to="/blog/5" className="blogBtn blogBtn-secondary latestCardBtn">
                      Read Full Review
                    </Link>
                  </div>
                </div>

                {/* Review — Julio B */}
                <div className="latestBlogCard">
                  <div className="latestBlogImageWrapper">
                    {/* Mini slider */}
                    {julioImages.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`Julio B tour photo ${i + 1}`}
                        className="latestBlogImage"
                        style={{
                          position: 'absolute',
                          top: 0, left: 0,
                          width: '100%', height: '100%',
                          objectFit: 'cover',
                          opacity: i === julioIdx ? 1 : 0,
                          transition: 'opacity 0.6s ease-in-out',
                        }}
                      />
                    ))}
                    {/* Prev / Next arrows */}
                    <button
                      className="julioSliderBtn julioPrev"
                      onClick={(e) => { e.preventDefault(); setJulioIdx((p) => (p - 1 + julioImages.length) % julioImages.length); }}
                    >‹</button>
                    <button
                      className="julioSliderBtn julioNext"
                      onClick={(e) => { e.preventDefault(); setJulioIdx((p) => (p + 1) % julioImages.length); }}
                    >›</button>
                    {/* Dots */}
                    <div className="julioSliderDots">
                      {julioImages.map((_, i) => (
                        <span
                          key={i}
                          className={`julioSliderDot${i === julioIdx ? ' active' : ''}`}
                          onClick={() => setJulioIdx(i)}
                        />
                      ))}
                    </div>
                    <span className="blogCategoryBadge">⭐ 5 / 5 Stars</span>
                  </div>
                  <div className="latestBlogCardContent">
                    <div className="blogMeta">
                      <span className="blogMetaItem">
                        <span className="blogMetaIcon">📁</span> TripAdvisor · 5 contributions
                      </span>
                    </div>
                    <h3 className="latestBlogCardTitle">Perfect tour agency! — Julio B</h3>
                    <p className="latestBlogCardDesc">
                      Wonderful experience with them! We had a beautiful tour in Delhi and Ladakh and everything was fully and perfectly organized. They provided transportation, internal flight, accommodation and guide service in whole tour and everything was perfect — we really enjoy the magnificent of India!!
                    </p>
                    <Link to="/blog/6" className="blogBtn blogBtn-secondary latestCardBtn">
                      Read Full Review
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>
      )}

      {/* 4. Why Choose Krishna Tour India Section */}
      <section className="whyChooseSection">
        <div className="blogContainer">
          <span className="blogSectionPretitle">WHY CHOOSE US</span>
          <h2 className="blogSectionHeading whyChooseHeading">
            Why Our Clients Love Traveling With Us
          </h2>

          <div className="whyChooseGrid">
            <div className="whyChooseCard">
              <div className="whyChooseIconWrapper">
                <FaUsers className="whyChooseIcon" />
              </div>
              <h4 className="whyChooseCardTitle">Professional Chauffeurs</h4>
              <p className="whyChooseCardDesc">
                Experienced, polite and well-trained drivers who know the routes inside out.
              </p>
            </div>

            <div className="whyChooseCard">
              <div className="whyChooseIconWrapper">
                <FaCarSide className="whyChooseIcon" />
              </div>
              <h4 className="whyChooseCardTitle">Luxury Fleet</h4>
              <p className="whyChooseCardDesc">
                Premium well-maintained vehicles catering to all comfort levels and group sizes.
              </p>
            </div>

            <div className="whyChooseCard">
              <div className="whyChooseIconWrapper">
                <FaShieldAlt className="whyChooseIcon" />
              </div>
              <h4 className="whyChooseCardTitle">Safe Journey</h4>
              <p className="whyChooseCardDesc">
                Regularly sanitized cars adhering to strict safety protocols for secure travel.
              </p>
            </div>

            <div className="whyChooseCard">
              <div className="whyChooseIconWrapper">
                <FaHeadset className="whyChooseIcon" />
              </div>
              <h4 className="whyChooseCardTitle">24×7 Support</h4>
              <p className="whyChooseCardDesc">
                Round-the-clock customer support to assist you during your entire itinerary.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;