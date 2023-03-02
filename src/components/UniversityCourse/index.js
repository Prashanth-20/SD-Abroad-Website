import {MdKeyboardArrowRight} from 'react-icons/md'
import {FaMedal} from 'react-icons/fa'
import Footer from '../Footer'
import Contactus from '../Contactus'

import Header from '../Header'
import './index.css'

const UniversityCourse = () => (
  <>
    <Header />
    <div className="accommodation-main-page">
      <div className="top-accommodation-page">
        <div>
          <h1 className="accommodation-top-heading">
            <span className="accommodation-styled-text">
              Find Your Right Course
            </span>
          </h1>
          <p className="accommodation-paragraph">
            Find and compare courses from Universities across the world.
          </p>
        </div>
        <img
          src="https://i.ibb.co/1bCrVHy/Recruiter-finding-the-perfect-candidate.png"
          alt="Recruiter-finding"
          className="accommodation-image"
        />
      </div>

      <div className="navigation-tab-name">
        <p className="navigation-text">COURSES</p>
        <p className="navigation-text">COLLEGES</p>
        <p className="navigation-text">UNIVERSITIES</p>
      </div>

      <div className="university-course-box">
        <div className="inside-box-first-part">
          <h1 className="university-subject-heading">Subject</h1>
          <p className="sub-tag-text">What you want to Study?</p>
        </div>

        <div className="inside-box-second-part">
          <div>
            <h1 className="university-subject-heading">Where</h1>
            <p className="sub-tag-text">Country/Institute</p>
          </div>
          <button type="button" className="university-submit-btn">
            Search
          </button>
        </div>
      </div>

      <button type="button" className="all-filters-btn">
        All Filters
      </button>
      <hr />

      <div className="university-cards-section">
        <div className="university-images-box">
          <div className="university-image-card">
            <img
              src="https://i.ibb.co/nRRfvwx/4.png"
              className="university-image"
              alt="university"
            />
            <div className="university-all-card-details-box">
              <h1 className="university-name">University college london</h1>
              <p className="university-place">united kingdom</p>
              <div className="university-details">
                <FaMedal className="medal-icon" />
                <div>
                  <p className="university-rank-text">University Ranking</p>
                  <p className="ranking-university">8</p>
                </div>
                <button type="button" className="enquire-btn">
                  Enquire now
                  <MdKeyboardArrowRight className="btn-arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="university-images-box">
          <div className="university-image-card">
            <img
              src="https://i.ibb.co/RDvRGGB/5.png"
              className="university-image"
              alt="university"
            />
            <div className="university-all-card-details-box">
              <h1 className="university-name">University of warwick</h1>
              <p className="university-place">united kingdom</p>
              <div className="university-details">
                <FaMedal className="medal-icon" />
                <div>
                  <p className="university-rank-text">University Ranking</p>
                  <p className="ranking-university">61</p>
                </div>
                <button type="button" className="enquire-btn">
                  Enquire now
                  <MdKeyboardArrowRight className="btn-arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="university-images-box">
          <div className="university-image-card">
            <img
              src="https://i.ibb.co/3kk2S8H/6.png"
              className="university-image"
              alt="university"
            />
            <div className="university-all-card-details-box">
              <h1 className="university-name">University of bristol</h1>
              <p className="university-place">united kingdom</p>
              <div className="university-details">
                <FaMedal className="medal-icon" />
                <div>
                  <p className="university-rank-text">University Ranking</p>
                  <p className="ranking-university">62</p>
                </div>
                <button type="button" className="enquire-btn">
                  Enquire now
                  <MdKeyboardArrowRight className="btn-arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="university-cards-section">
        <div className="university-images-box">
          <div className="university-image-card">
            <img
              src="https://i.ibb.co/nRRfvwx/4.png"
              className="university-image"
              alt="university"
            />
            <div className="university-all-card-details-box">
              <h1 className="university-name">University college london</h1>
              <p className="university-place">united kingdom</p>
              <div className="university-details">
                <FaMedal className="medal-icon" />
                <div>
                  <p className="university-rank-text">University Ranking</p>
                  <p className="ranking-university">8</p>
                </div>
                <button type="button" className="enquire-btn">
                  Enquire now
                  <MdKeyboardArrowRight className="btn-arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="university-images-box">
          <div className="university-image-card">
            <img
              src="https://i.ibb.co/RDvRGGB/5.png"
              className="university-image"
              alt="university"
            />
            <div className="university-all-card-details-box">
              <h1 className="university-name">University of warwick</h1>
              <p className="university-place">united kingdom</p>
              <div className="university-details">
                <FaMedal className="medal-icon" />
                <div>
                  <p className="university-rank-text">University Ranking</p>
                  <p className="ranking-university">61</p>
                </div>
                <button type="button" className="enquire-btn">
                  Enquire now
                  <MdKeyboardArrowRight className="btn-arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="university-images-box">
          <div className="university-image-card">
            <img
              src="https://i.ibb.co/3kk2S8H/6.png"
              className="university-image"
              alt="university"
            />
            <div className="university-all-card-details-box">
              <h1 className="university-name">University of bristol</h1>
              <p className="university-place">united kingdom</p>
              <div className="university-details">
                <FaMedal className="medal-icon" />
                <div>
                  <p className="university-rank-text">University Ranking</p>
                  <p className="ranking-university">62</p>
                </div>
                <button type="button" className="enquire-btn">
                  Enquire now
                  <MdKeyboardArrowRight className="btn-arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-boxes-container">
      <h1 className="footer-box-heading ">Exams</h1>
      <Footer />
    </div>

    <div className="footer-boxes-container">
      <h1 className="footer-box-heading">Mock Tests</h1>
      <Footer />
    </div>
    <div className="footer-boxes-container">
      <h1 className="footer-box-heading">Previous Year Question Paper</h1>
      <Footer />
    </div>

    <Contactus />
  </>
)
export default UniversityCourse
