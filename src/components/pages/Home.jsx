import React, { useEffect, useState } from 'react'
import Footer from '../../layouts/Footer'
import { useNavigate, Link } from 'react-router-dom'

// In app API
import {
  about_contents,
  about_indicators,
  blog_posts,
  hero_slide_contents,
  products_contents,
  reviews_contents,
  services_contents,
  why_choose_us_contents,
} from '../../default_data'

// Styling
import 'primeicons/primeicons.css'
import '../../Styles/Home.css'
import axios from 'axios'
import ProductInforModal from '../../layouts/ProductInforModal'
import { ShowService } from '../../layouts/ShowService'

export const Home = ({ openAppointmentForm }) => {
  return (
    <div>
      <HeroSect />
      <div className='max-w-[85%] mx-auto'>
        <ServiceSect />
        <ProductSect />
        <AboutSect />
        <BlogSect />
        <Why_Choose_Us />
      </div>
      <div className='max-w-[85%] mx-auto'>
        <ReviewsSect />
      </div>
      <Archivement />
      <div className='max-w-[85%] mx-auto'>
        <ContactUsSect openAppointmentForm={openAppointmentForm} />
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export const HeroSect = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNext = () => {
    const nextSlide = (currentSlide + 1) % hero_slide_contents.length

    setCurrentSlide(nextSlide)
  }

  const handlePrev = () => {
    const prevSlide =
      (currentSlide + hero_slide_contents.length - 1) %
      hero_slide_contents.length
    setCurrentSlide(prevSlide)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % hero_slide_contents.length
      setCurrentSlide(nextSlide)
    }, 5000)

    return () => clearInterval(interval)
  }, [currentSlide])
  const slideStyle = {
    transition: `opacity 2s ease-in-out`,
  }

  return (
    <div className='hero-sect-container'>
      {hero_slide_contents.map((slide_content, i) => (
        <div
          key={i}
          className={`hero-slide-container ${
            currentSlide === i ? 'active' : ''
          }`}
          style={slideStyle}
        >
          <div className='hero-slide'>
            <div className='hero-slide-image'>
              <img
                src={slide_content.image_url}
                alt=''
              />
            </div>
            <div className='hero-overlay'></div>
            <div className='hero-slide-content'>
              <h1>{slide_content.header}</h1>
              <p>{slide_content.paragraph}</p>
            </div>
          </div>
        </div>
      ))}
      <button
        className='prev'
        onClick={handlePrev}
      >
        <i className='pi pi-arrow-left'></i>
      </button>
      <button
        className='next'
        onClick={handleNext}
      >
        <i className='pi pi-arrow-right'></i>
      </button>
    </div>
  )
}

export const ServiceSect = () => {
  const [subCat, setSubCat] = useState([])
  const [showSubCat, setShowSubCat] = useState(false)
  const showService = (content) => {
    setSubCat(content)
    setShowSubCat(true)
  }

  const closeModal = () => {
    setShowSubCat(false)
  }
  return (
    <div
      className='service-sect-container'
      id='services'
    >
      <h1 className='section-subhead text-center'>
        OUR <span className='text-pink underline'>SERVICES</span>
      </h1>
      <p className='text-center my-5 w-full md:w-[800px] mx-auto'>
        An experienced and reliable company that offers a wide range of
        technology services from computer to smartphone, to electronics and
        telecommunication. We are committed to providing & delievering high
        quality services solution tailoured to meet your needs/requirements
        while offering quick turnaround times. Explore our top-notch services
        below and find out how we can assist in alleviating your technological
        concern or stress.
      </p>

      <div className='services-container'>
        {services_contents.map((content, index) => (
          <div
            key={index}
            className='service-wrapper'
          >
            <img
              src={content.image_url}
              alt=''
            />
            <div className='overlay-content'>
              <h3>{content.service}</h3>
              <button onClick={() => showService(content)}>
                Check service
              </button>
            </div>
          </div>
        ))}
      </div>
      {showSubCat && (
        <ShowService
          subCat={subCat}
          closeModal={closeModal}
        />
      )}
    </div>
  )
}

export const ProductSect = () => {
  const [productData, setProductData] = useState([])
  const [productInfo, setProductInfo] = useState(null)
  const [showInfo, setShowInfo] = useState(false)

  useEffect(() => {
    const getProducts = async function () {
      try {
        const response = await axios.get(
          'https://techalive.onrender.com/api/v1/product/list-products'
        )

        const data = response.data

        setProductData(data.products)
      } catch (error) {
        console.log('Error:', error)
      }
    }

    getProducts()
  }, [])

  const handleShowInfo = (product) => {
    setShowInfo(true)
    setProductInfo(product)
  }

  const handleCloseInfo = () => {
    setShowInfo(false)
  }

  return (
    <div
      className='product-sect-container'
      id='products'
    >
      <h1 className='section-subhead text-center'>
        OUR <span className='text-pink underline'>PRODUCTS</span>
      </h1>
      <p className='text-center my-5 w-full md:w-[800px] mx-auto'>
        Immerse yourself in the world of productivity and connectivity, explore
        the energy of our sleek, good performance, and versatile laptops
        designed for efficiency & style. Experience the epitome of innovation,
        discover endless possibilities, dive into the realm of our product
        designs, and stay connected effortlessly to enhance your experience.
      </p>
      <div className='product-container'>
        <div className='phase grid grid-cols-5'>
          {productData.slice(5, 10).map((product, index) => (
            <div className='flex flex-col'>
              <div
                key={index}
                className='product-wrapper-card'
              >
                <img
                  src={product.image}
                  alt=''
                />
                <p>{product.category}</p>
                <h4 id='name'>
                  {product.name.length > 20
                    ? product.name.slice(0, 16) + '...'
                    : product.name}
                </h4>
                <h4 id='price'>${product.price}</h4>
                <div className='product-intrested'>
                  <div className='contact-to-get'>
                    <a href='https://wa.me/2348050500466'>
                      <i className='pi pi-whatsapp'></i>
                    </a>
                    <a href='tel:+2348050500466'>
                      <i className='pi pi-phone'></i>
                    </a>
                  </div>
                  <button
                    onClick={() => handleShowInfo(product)}
                    className='description-btn'
                  >
                    <span>Info </span>
                    <i className='pi pi-info-circle'></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='my-[30px]'>
          <h1 className='section-subhead text-center font-medium text-[24px]'>
            LATEST <span className='text-pink underline'>PRODUCTS</span>
          </h1>
        </div>
        <div className='phase grid grid-cols-5'>
          {productData.slice(0, 5).map((product, index) => (
            <div className='flex flex-col'>
              <div
                key={index}
                className='product-wrapper-card'
              >
                <img
                  src={product.image}
                  alt=''
                />
                <p>{product.category}</p>
                <h4 id='name'>
                  {product.name.length > 20
                    ? product.name.slice(0, 16) + '...'
                    : product.name}
                </h4>
                <h4 id='price'>${product.price}</h4>
                <div className='product-intrested'>
                  <div className='contact-to-get'>
                    <a href='https://wa.me/2348050500466'>
                      <i className='pi pi-whatsapp'></i>
                    </a>
                    <a href='tel:+2348050500466'>
                      <i className='pi pi-phone'></i>
                    </a>
                  </div>
                  <button
                    onClick={() => handleShowInfo(product)}
                    className='description-btn'
                  >
                    <span>Info </span>
                    <i className='pi pi-info-circle'></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showInfo && (
        <ProductInforModal
          productInfo={productInfo}
          handleCloseInfo={handleCloseInfo}
        />
      )}
    </div>
  )
}

export const AboutSect = () => {
  const [currentAbout, setCurrentAbout] = useState(0)
  const navigate = useNavigate()

  // Autoslide Functionalities
  useEffect(() => {
    const interval = setInterval(() => {
      const nextAbout = (currentAbout + 1) % about_contents.length
      setCurrentAbout(nextAbout)
    }, 5000)

    return () => clearInterval(interval)
  }, [currentAbout])

  const slideStyle = {
    transform: `translateX(-${(currentAbout * 100) / 1}%)`,
  }

  const handleSmoothScroll = (target) => {
    const targetElement = document.querySelector(target)

    if (targetElement) {
      const offset = targetElement.getBoundingClientRect().top + window.scrollY

      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      })
    }
  }

  const handleNavLinkClick = (e, target) => {
    e.preventDefault()

    if (location.pathname !== `${target}`) {
      navigate(`/${target}`)

      setTimeout(() => {
        handleSmoothScroll(target)
      }, 1000)
    }

    handleSmoothScroll(target)
  }

  return (
    <div
      className='about-sect-container'
      id='about'
    >
      <div className='about-indicators'>
        {about_indicators.map((indicator, index) => (
          <h3
            className={`indicator ${currentAbout === index ? 'active' : ''}`}
            onClick={() => setCurrentAbout(index)}
            key={index}
          >
            {indicator.title.toUpperCase()}
          </h3>
        ))}
      </div>
      <div
        className='the-about'
        style={slideStyle}
      >
        {about_contents.map((content, index) => (
          <div
            key={index}
            className={`the-about-wrapper ${
              currentAbout === index ? 'active' : ''
            }`}
          >
            <div className='img'>
              <img
                src={content.image_url}
                alt=''
              />
            </div>
            <div className='about-content'>
              <h5 className='text-f20 font-medium text-blue'>
                {content.header}
              </h5>
              <p>{content.intro}</p>
              <a
                href={`/#${content.path}`}
                onClick={(e) => handleNavLinkClick(e, `${content.path}`)}
              >
                <button className='bg-pink text-[#fff] w-[100px] h-[30px] rounded mt-4'>
                  Know More
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const BlogSect = () => {
  const navigate = useNavigate()
  const mobile = window.innerWidth <= 767
  const tablet = window.innerWidth <= 1023
  const [currentSlide, setCurrentSlide] = useState(0)
  const [allBlogs, setAllBlogs] = useState([])

  let divisionFactor = 4

  if (mobile) {
    divisionFactor = 1
  } else if (tablet) {
    divisionFactor = 2
  }

  const handlePrev = () => {
    if (allBlogs.length <= divisionFactor) {
      // Handle the case where there are fewer items than divisionFactor.
      return // Optionally, you can disable the "Prev" button in this case.
    }

    const newSlide = currentSlide - divisionFactor
    if (newSlide >= 0) {
      setCurrentSlide(newSlide)
    } else {
      // If going back would lead to negative indices, wrap around to the end.
      setCurrentSlide(allBlogs.length - (allBlogs.length % divisionFactor))
    }
  }

  const handleNext = () => {
    if (currentSlide < allBlogs.length - divisionFactor) {
      setCurrentSlide(currentSlide + divisionFactor)
    } else {
      setCurrentSlide(0)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + divisionFactor) % allBlogs.length
      setCurrentSlide(nextSlide)
    }, 5000)

    return () => clearInterval(interval)
  }, [currentSlide])

  const slideStyle = {
    transform: `translateX(-${(currentSlide * 100) / divisionFactor}%)`,
  }

  useEffect(() => {
    ;(async () => {
      try {
        const response = await axios.get(
          'https://techalive.onrender.com/api/v1/blog-post/other-blogs'
        )

        const data = response.data
        setAllBlogs(data.allBlogs)
      } catch (error) {
        console.log(error)
      }
    })()
  })

  return (
    <div
      className='blog-sect-container'
      id='blogs'
    >
      <h1 className='section-subhead text-center'>
        OUR <span className='text-pink underline'>BLOG</span>
      </h1>
      <p className='text-center my-5 w-full md:w-[600px] mx-auto'>
        Discover our colction of insightful articles covering a variety of
        topics. Dive into our latest posts below.
      </p>

      {/* <div className="blog-container">
        <div
          className="blog-slider"
          style={slideStyle}
        >
          {blog_posts.map((post, index) => (
            <div
              key={index}
              className="blog-post-slide"
            >
              <img
                src={post.image_url}
                alt=""
              />
              <div className="blog-post-content">
                <h3>{post.title}</h3>
                <p>
                  {post.content.length > 20
                    ? post.content.slice(0, 150) + "..."
                    : post.content}
                </p>
                <button>{post.read_more}</button>
                <div className="the-footer">
                  <i>{post.author}</i>
                  <i>{post.date}</i>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="btns">
          <div className="blog-page-btn">
            <button onClick={() => navigate("/blog-posts")}>
              View all blogs
            </button>
          </div>
          <div className="controller">
            <button onClick={handlePrev}>
              <i className="pi pi-angle-left"></i>
            </button>
            <button onClick={handleNext}>
              <i className="pi pi-angle-right"></i>
            </button>
          </div>
        </div>
      </div> */}
      <div className='blog-container'>
        <div
          className='blog-slider'
          style={slideStyle}
        >
          {allBlogs.map((blog, index) => (
            <div
              key={index}
              className='blog-post-slide'
            >
              <Link to={`/techalive/blog/${blog._id}`}>
                <img
                  src={blog.image}
                  alt=''
                />
                <div className='blog-post-content'>
                  <h3>
                    {blog.title.length > 25
                      ? blog.title.slice(0, 25) + '...'
                      : blog.title}
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        blog.blog.length > 20
                          ? blog.blog.slice(0, 100) + '...'
                          : blog.blog,
                    }}
                  />
                  {/* <button>Read Post</button> */}
                  <div className='the-footer'>
                    <Link>
                      <i className='text-indigo-500'>Read More</i>
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className='btns'>
          <div className='blog-page-btn'>
            <button onClick={() => navigate('/blog-posts')}>
              View all blogs
            </button>
          </div>
          <div className='controller'>
            <button onClick={handlePrev}>
              <i className='pi pi-angle-left'></i>
            </button>
            <button onClick={handleNext}>
              <i className='pi pi-angle-right'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Why_Choose_Us = () => {
  return (
    <div
      className='why-choose-us-container'
      id='whychooseus'
    >
      <h1 className='section-subhead text-center'>
        WHY <span className='text-pink underline'>CHOOSE US</span>
      </h1>
      <p className='text-center my-5 w-full md:w-[600px] mx-auto'>
        Explore our wide range of services designed to meet your needs. At
        Techalive Consult LTD, we take pride in offering high-quality solutions
        tailored to your requirements. Explore our services below and discover
        how we can help you.
      </p>
      <div className='why_choose_us_container'>
        {why_choose_us_contents.map((content, index) => (
          <div
            key={index}
            className='why_choose_us_wrapper'
          >
            <i className={`${content.icon} text-blue`}></i>
            <h3 className='text-pink'>{content.header}</h3>
            <p>{content.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export const ReviewsSect = () => {
  const mobile = window.innerWidth <= 767
  const tablet = window.innerWidth <= 1023
  const [currentReview, setCurrentReview] = useState(0)
  const [reviews, setReviews] = useState([])

  let divisionFactor = 1

  if (mobile) {
    divisionFactor = 1
  } else if (tablet) {
    divisionFactor = 2
  }

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await axios.get(
        'https://techalive.onrender.com/api/v1/review/get-review'
      )

      const data = response.data

      setReviews(data.review)
    }

    fetchReviews()
  })

  const slideStyle = {
    transform: `translateX(-${(currentReview * 100) / divisionFactor}%)`,
  }

  const roles = [
    { full: 'Chief Executive Officer', short: 'CEO' },
    { full: 'Chief Operating Officer', short: 'COO' },
    { full: 'Chief Financial Officer', short: 'CFO' },
    { full: 'Chief Technology Officer', short: 'CTO' },
    { full: 'Chief Marketing Officer', short: 'CMO' },
    { full: 'Chief Operating Officer', short: 'COO' },
    { full: 'Chief Human Resources Officer', short: 'CHRO' },
    { full: 'General Manager', short: 'GM' },
    { full: 'Department Manager', short: 'Dept. Manager' },
    { full: 'Project Manager', short: 'Project Mgr' },
    { full: 'Team Leader', short: 'Team Leader' },
    { full: 'Secretary', short: 'Secretary' },
    { full: 'Supervisor', short: 'Supervisor' },
    { full: 'Administrative Assistant', short: 'Admin. Asst.' },
    { full: 'Receptionist', short: 'Receptionist' },
    { full: 'Office Manager', short: 'Office Mgr' },
    { full: 'Data Entry Clerk', short: 'Data Entry Clerk' },
    { full: 'Administrative Coordinator', short: 'Admin. Coordinator' },
    { full: 'Accountant', short: 'Accountant' },
    { full: 'Financial Analyst', short: 'Fin. Analyst' },
    { full: 'Controller', short: 'Controller' },
    { full: 'Bookkeeper', short: 'Bookkeeper' },
    { full: 'Payroll Specialist', short: 'Payroll Specialist' },
    { full: 'HR Manager', short: 'HR Manager' },
    { full: 'Talent Acquisition Specialist', short: 'Talent Acq. Specialist' },
    { full: 'HR Generalist', short: 'HR Generalist' },
    {
      full: 'Training and Development Specialist',
      short: 'Training & Dev. Specialist',
    },
    {
      full: 'Compensation and Benefits Specialist',
      short: 'Compensation & Benefits Specialist',
    },
    { full: 'Sales Representative', short: 'Sales Rep' },
    { full: 'Marketing Manager', short: 'Mktg. Manager' },
    { full: 'Digital Marketing Specialist', short: 'Digital Mktg. Specialist' },
    { full: 'Brand Manager', short: 'Brand Manager' },
    { full: 'Customer Relationship Manager', short: 'CRM Manager' },
    { full: 'Systems Administrator', short: 'Sys. Admin' },
    { full: 'Network Engineer', short: 'Network Engineer' },
    { full: 'Software Developer', short: 'Software Dev' },
    { full: 'IT Support Specialist', short: 'IT Support' },
    { full: 'Database Administrator', short: 'DB Admin' },
    { full: 'Customer Service Representative', short: 'CS Rep' },
    { full: 'Call Center Agent', short: 'Call Center Agent' },
    { full: 'Customer Support Specialist', short: 'CS Specialist' },
    { full: 'Client Relations Manager', short: 'Client Relations Mgr' },
    { full: 'Help Desk Support', short: 'Help Desk Support' },
    { full: 'Operations Manager', short: 'Ops. Manager' },
    { full: 'Production Supervisor', short: 'Prod. Supervisor' },
    { full: 'Quality Control Inspector', short: 'QC Inspector' },
    { full: 'Supply Chain Manager', short: 'SCM Manager' },
    { full: 'Manufacturing Engineer', short: 'Mfg. Engineer' },
    { full: 'Research Scientist', short: 'Res. Scientist' },
    { full: 'Product Development Engineer', short: 'Prod. Dev. Engineer' },
    { full: 'Lab Technician', short: 'Lab Tech' },
    { full: 'R&D Manager', short: 'R&D Manager' },
    { full: 'Innovation Specialist', short: 'Innovation Specialist' },
    { full: 'Attorney', short: 'Attorney' },
    { full: 'Legal Counsel', short: 'Legal Counsel' },
    { full: 'Compliance Officer', short: 'Compliance Officer' },
    { full: 'Paralegal', short: 'Paralegal' },
    { full: 'Regulatory Affairs Specialist', short: 'Reg. Affairs Specialist' },
    { full: 'Physician', short: 'Physician' },
    { full: 'Nurse', short: 'Nurse' },
    { full: 'Pharmacist', short: 'Pharmacist' },
    { full: 'Medical Technologist', short: 'Med. Technologist' },
    { full: 'Healthcare Administrator', short: 'Health Admin' },
    { full: 'Teacher', short: 'Teacher' },
    { full: 'Principal', short: 'Principal' },
    { full: 'School Counselor', short: 'School Counselor' },
    { full: 'Education Coordinator', short: 'Ed. Coordinator' },
    { full: 'Academic Dean', short: 'Academic Dean' },
    { full: 'Store Manager', short: 'Store Manager' },
    { full: 'Sales Associate', short: 'Sales Assoc.' },
    { full: 'Visual Merchandiser', short: 'Visual Merchandiser' },
    { full: 'Inventory Manager', short: 'Inventory Mgr' },
    { full: 'Loss Prevention Specialist', short: 'Loss Prev. Specialist' },
    { full: 'Mechanical Engineer', short: 'Mech. Engineer' },
    { full: 'Civil Engineer', short: 'Civil Engineer' },
    { full: 'Electrical Engineer', short: 'Elec. Engineer' },
    { full: 'Chemical Engineer', short: 'Chem. Engineer' },
    { full: 'Aerospace Engineer', short: 'Aero. Engineer' },
    { full: 'Graphic Designer', short: 'Graphic Designer' },
    { full: 'Art Director', short: 'Art Director' },
    { full: 'Copywriter', short: 'Copywriter' },
    { full: 'Web Designer', short: 'Web Designer' },
    { full: 'Interior Designer', short: 'Interior Designer' },
    { full: 'Data Analyst', short: 'Data Analyst' },
    { full: 'Market Research Analyst', short: 'Mkt. Research Analyst' },
    { full: 'Business Analyst', short: 'Business Analyst' },
    { full: 'Statistician', short: 'Statistician' },
    { full: 'Data Scientist', short: 'Data Scientist' },
    { full: 'Project Coordinator', short: 'Project Coordinator' },
    { full: 'Scrum Master', short: 'Scrum Master' },
    { full: 'Project Scheduler', short: 'Project Scheduler' },
    { full: 'Project Planner', short: 'Project Planner' },
    { full: 'Program Manager', short: 'Program Manager' },
    { full: 'Environmental Scientist', short: 'Env. Scientist' },
    { full: 'Sustainability Coordinator', short: 'Sustain. Coordinator' },
    { full: 'Social Worker', short: 'Social Worker' },
    { full: 'Nonprofit Director', short: 'Nonprofit Director' },
    { full: 'Program Manager', short: 'Program Manager' },
    { full: 'Fundraising Coordinator', short: 'Fundraising Coordinator' },
    { full: 'Volunteer Coordinator', short: 'Vol. Coordinator' },
  ]

  const reviewImgBgs = ['#8B008B', '#FFD700', '#62C9E5', '#FF5733']

  const alphabetCategories = {
    group1: [],
    group2: [],
    group3: [],
    group4: [],
  }

  const fixedShuffledAlphabet = 'mfdzqajbgwnkotxhieprlcusvy'

  for (let i = 0; i < fixedShuffledAlphabet.length; i++) {
    if (i < fixedShuffledAlphabet.length / 4) {
      alphabetCategories.group1.push(fixedShuffledAlphabet[i])
    } else if (i < (fixedShuffledAlphabet.length / 4) * 2) {
      alphabetCategories.group2.push(fixedShuffledAlphabet[i])
    } else if (i < (fixedShuffledAlphabet.length / 4) * 3) {
      alphabetCategories.group3.push(fixedShuffledAlphabet[i])
    } else {
      alphabetCategories.group4.push(fixedShuffledAlphabet[i])
    }
  }

  // console.log(alphabetCategories);

  return (
    <div
      className='reviews-container'
      id='reviews'
    >
      <div className='reviews-wrapper'>
        <div className='section-intro'>
          <h1 className='section-subhead'>
            WHAT <span className='text-pink underline'>OUR CUSTOMERS</span> SAY
          </h1>
          <p>
            We care what people say about us. We work hard to gain the trust and
            kind words our customers share. Choose us and be one of the
            thousands of happy customers we have worked with.
          </p>
        </div>
        <div className='reviews-slides-wrapper'>
          <div
            className='reviews-slides'
            style={slideStyle}
          >
            {reviews.map((content, index) => {
              let bgColor
              if (
                alphabetCategories.group1.includes(
                  content.name.charAt(0).toLowerCase()
                )
              ) {
                bgColor = '#8B008B'
              } else if (
                alphabetCategories.group2.includes(
                  content.name.charAt(0).toLowerCase()
                )
              ) {
                bgColor = '#FFD700'
              } else if (
                alphabetCategories.group3.includes(
                  content.name.charAt(0).toLowerCase()
                )
              ) {
                bgColor = '#62C9E5'
              } else if (
                alphabetCategories.group4.includes(
                  content.name.charAt(0).toLowerCase()
                )
              ) {
                bgColor = '#FF5733'
              }
              return (
                <div
                  key={index}
                  className={`reviews_slide ${
                    currentReview === index ? 'active' : ''
                  }`}
                >
                  <div className='client-details'>
                    <p
                      className={`w-[80px] h-[80px] border rounded-full grid place-content-center text-[#fff] text-xl font-bold font-headFamily`}
                      style={{ backgroundColor: bgColor }}
                    >
                      {content.name.charAt(0).toUpperCase()}
                    </p>
                    <div className='handle'>
                      <h5>{content.name}</h5>
                      <p>{content.category}</p>
                      <p>
                        {roles.some(
                          (role) =>
                            role.full === content.role ||
                            role.short === content.role
                        )
                          ? content.role + ' @ ' + content.company
                          : content.role === 'Founder' || 'co-founder'
                          ? content.role + ' of ' + content.company
                          : content.company}
                      </p>
                    </div>
                  </div>
                  <p>{content.testimonial}</p>
                </div>
              )
            })}
          </div>
          <div className='indicators'>
            {reviews.map((indicator, index) => (
              <div
                key={index}
                className={`indicator ${
                  currentReview === index ? 'active' : ''
                }`}
                onClick={() => setCurrentReview(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const Archivement = () => {
  const [counters, setCounters] = useState({
    workers: 0,
    contracts: 0,
    awards: 0,
    clients: 0,
  })

  const limit = {
    workers: 10,
    contracts: 20,
    awards: 40,
    clients: 30,
  }

  let interval

  const incrementCounts = (counterName) => {
    setCounters((prevCount) => ({
      ...prevCount,
      [counterName]: prevCount[counterName] + 1,
    }))
  }

  useEffect(() => {
    const counterNames = Object.keys(counters)

    interval = setInterval(() => {
      counterNames.forEach((counterName) => {
        if (counters[counterName] < limit[counterName]) {
          incrementCounts(counterName)
        }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [counters, limit])

  return (
    <div className='archievement-container'>
      <img
        src='https://i.pinimg.com/564x/7a/e9/e9/7ae9e9fd2b348f03421abc3a6a3a1be9.jpg'
        alt=''
      />

      <div className='overlay'></div>

      <div className='content'>
        <div className='workers'>
          <h1>{counters.workers}</h1>
          <p>Workers</p>
        </div>
        <div className='contract'>
          <h1>{counters.contracts}</h1>
          <p>Contracts</p>
        </div>
        <div className='award'>
          <h1>{counters.awards}</h1>
          <p>Awards</p>
        </div>
        <div className='custormer'>
          <h1>{counters.clients}</h1>
          <p>Clients</p>
        </div>
      </div>
    </div>
  )
}

export const ContactUsSect = ({ openAppointmentForm }) => {
  return (
    <div
      className='contact-us-container'
      id='contactus'
    >
      <h1 className='section-subhead'>
        CONTACT <span className='text-pink'>US</span>
      </h1>

      <div className='information'>
        <div className='col col-1'>
          <div className='phone'>
            <div className='wrap'>
              <i className='pi pi-phone' />
              <a href='tel:+234 805 050 0466'>+234 805 050 0466</a>
            </div>
          </div>
          <div className='address'>
            <div className='wrap'>
              <i className='pi pi-map-marker' />
              <a
                href='https://maps.app.goo.gl/YNVP8jy6EbR3ZZG27'
                target='_blank'
              >
                Address on map
              </a>
            </div>
          </div>
          <div className='mail'>
            <div className='wrap'>
              <i className='pi pi-envelope' />
              <a href='mailto:techalive.inc@gmail.com'>
                techalive.inc@gmail.com
              </a>
            </div>
            <div className='wrap'>
              <i className='pi pi-inbox' />
              <a href='mailto:info@techalive.com'>info@techalive.com</a>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='quick-link'>
            <a href='https://facebook.com/techalive.ltd'>
              <i className='pi pi-facebook'></i>
              <span> Facebook</span>
            </a>
            <a href='https://x.com/techalive_inc?s=21'>
              <i className='pi pi-twitter'></i>
              <span> Twitter</span>
            </a>
            <a href='https://www.instagram.com/techalive_inc'>
              <i className='pi pi-instagram'></i>
              <span> Instagram</span>
            </a>
            <a href='https://t.me/techalive_inc'>
              <i className='pi pi-telegram'></i>
              <span> Telegram</span>
            </a>
            <a href='https://wa.me/2348050500466'>
              <i className='pi pi-whatsapp'></i>
              <span> Whatsapp</span>
            </a>
          </div>
        </div>
      </div>
      <button
        className='appoint-btn'
        onClick={openAppointmentForm}
      >
        Book Appointement
      </button>
    </div>
  )
}
