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

  // Listing page logic:
  // Find the featured blog (featured === true)
  const featuredBlog = blogsList.find((blog) => blog.featured);
  // Remaining blogs as latest blogs
  const latestBlogs = blogsList.filter((blog) => !blog.featured);

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
                
                <div className="detailsPostMeta">
                  <span className="detailsMetaItem">
                    By <span className="metaAuthor">{currentBlog.author}</span>
                  </span>
                  <span className="detailsMetaDivider">|</span>
                  <span className="detailsMetaItem">
                    <FaCalendarAlt /> {currentBlog.publishedDate || currentBlog.date}
                  </span>
                  <span className="detailsMetaDivider">|</span>
                  <span className="detailsMetaItem">
                    {currentBlog.readTime}
                  </span>
                </div>
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
                    <img 
                      src={currentBlog.image || currentBlog.coverImage} 
                      alt={currentBlog.title} 
                      className="blogFeaturedImage"
                    />
                  </div>
                </div>

                {/* Right Column: Article Details */}
                <div className="blogDetailsRight">
                  <div className="blogDetailsAuthorMeta">
                    <span className="blogAuthorInfo">
                      By <strong className="blogAuthorName">{currentBlog.author}</strong>
                    </span>
                    <span className="blogMetaSeparator">•</span>
                    <span className="blogReadTime">{currentBlog.readTime}</span>
                  </div>

                  <article className="blogArticleContent">
                    {currentBlog.content && Array.isArray(currentBlog.content) ? (
                      currentBlog.content.map((block, idx) => {
                        if (block.type === "paragraph") {
                          return <p key={idx} className="detailParagraph">{block.text}</p>;
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
          <section className="blogHeroSection">
            <div className="blogHeroOverlay"></div>
            <div className="blogHeroContent">
              <span className="blogHeroBadge">BLOG</span>
              <h1 className="blogHeroHeading">Stories from Happy Travelers</h1>
              <p className="blogHeroDescription">
                Real experiences and travel diaries from our amazing clients who explored the beauty of India with Krishna Tour India.
              </p>
              <a href="#featured-story" className="blogBtn blogBtn-primary heroBtn">
                Explore Stories
              </a>
            </div>
          </section>

          {/* 2. Featured Story Section */}
          {featuredBlog && (
            <section id="featured-story" className="featuredBlogSection">
              <div className="blogContainer">
                <span className="blogSectionPretitle">FEATURED STORY</span>
                <h2 className="blogSectionHeading">Highlight of the Month</h2>
                
                <div className="featuredBlogCard">
                  <div className="featuredBlogImageWrapper">
                    <img
                      src={featuredBlog.image}
                      alt={featuredBlog.title}
                      className="featuredBlogImage"
                    />
                    <span className="blogCategoryBadge">
                      {featuredBlog.category || "Featured Travel"}
                    </span>
                  </div>
                  
                  <div className="featuredBlogContent">
                    <div className="blogMeta">
                      <span className="blogMetaItem">
                        <FaCalendarAlt className="blogMetaIcon" /> {featuredBlog.date}
                      </span>
                      <span className="blogMetaItem">
                        <span className="blogMetaIcon">📁</span> {featuredBlog.category || "Travel"}
                      </span>
                    </div>
                    
                    <h3 className="featuredBlogTitle">{featuredBlog.title}</h3>
                    <p className="featuredBlogDesc">{featuredBlog.description}</p>
                    
                    <Link
                      to={`/blog/${featuredBlog.id}`}
                      className="blogBtn blogBtn-primary"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* 3. Latest Stories Section */}
          <section className="latestStoriesSection">
            <div className="blogContainer">
              <span className="blogSectionPretitle">LATEST STORIES</span>
              <h2 className="blogSectionHeading">Travel Diaries & Updates</h2>
              
              <div className="latestStoriesGrid">
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
                          <FaCalendarAlt className="blogMetaIcon" /> {blog.date}
                        </span>
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
                        Read More
                      </Link>
                    </div>
                  </div>
                ))}
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