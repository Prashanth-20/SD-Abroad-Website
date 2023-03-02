import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {FaQuestion} from 'react-icons/fa'
import {BiTimeFive} from 'react-icons/bi'
import Footer from '../Footer'
import Contactus from '../Contactus'

import Header from '../Header'
import './index.css'

const ReactSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slick-box">
          <h1 className="side-heading">Reading</h1>
          <div className="slick-text-box">
            <div className="text-icon-section">
              <FaQuestion className="box-icons" />
              <p className="type-text">Questions</p>
              <p className="type-text">40</p>
            </div>
            <div className="text-icon-section">
              <BiTimeFive className="box-icons" />
              <p className="type-text">Time</p>
              <p className="type-text">60 Mins</p>
            </div>
            <div className="text-icon-section">
              <h1 className="circle-one">1</h1>
              <p className="type-text">Marks</p>
              <p className="type-text">0-9</p>
            </div>
          </div>
          <p className="ielts-box-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
        </div>

        <div className="slick-box">
          <h1 className="side-heading">Reading</h1>
          <div className="slick-text-box">
            <div className="text-icon-section">
              <FaQuestion className="box-icons" />
              <p className="type-text">Questions</p>
              <p className="type-text">40</p>
            </div>
            <div className="text-icon-section">
              <BiTimeFive className="box-icons" />
              <p className="type-text">Time</p>
              <p className="type-text">60 Mins</p>
            </div>
            <div className="text-icon-section">
              <h1 className="circle-one">1</h1>
              <p className="type-text">Marks</p>
              <p className="type-text">0-9</p>
            </div>
          </div>
          <p className="ielts-box-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
        </div>

        <div className="slick-box">
          <h1 className="side-heading">Reading</h1>
          <div className="slick-text-box">
            <div className="text-icon-section">
              <FaQuestion className="box-icons" />
              <p className="type-text">Questions</p>
              <p className="type-text">40</p>
            </div>
            <div className="text-icon-section">
              <BiTimeFive className="box-icons" />
              <p className="type-text">Time</p>
              <p className="type-text">60 Mins</p>
            </div>
            <div className="text-icon-section">
              <h1 className="circle-one">1</h1>
              <p className="type-text">Marks</p>
              <p className="type-text">0-9</p>
            </div>
          </div>
          <p className="ielts-box-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
        </div>
      </Slider>
    </div>
  )
}

const SlickImages = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="slick-image-shadow">
            <img
              src="https://i.ibb.co/TLc2hZw/1.png"
              alt="1"
              className="slick-image"
            />
            <h1 className="type-text">Yale University</h1>
            <p className="type-text">Yale university, united states</p>
            <ul className="boxes-container">
              <li className="li-text">Private</li>
              <li className="li-text">Estd, 1701</li>
              <li className="li-text">40+ courses</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="slick-image-shadow">
            <img
              src="https://i.ibb.co/Fxddkgv/2.png"
              alt="2"
              className="slick-image"
            />

            <h1 className="type-text">University of pennsylvania</h1>
            <p className="type-text">
              University of pennsylvania, united states
            </p>
            <ul className="boxes-container">
              <li className="li-text">Private</li>
              <li className="li-text">Estd, 1701</li>
              <li className="li-text">40+ courses</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <div className="slick-image-shadow">
              <img
                src="https://i.ibb.co/jLJ3N3g/3.png"
                alt="3"
                className="slick-image"
              />
              <h1 className="type-text">University of california berkeley</h1>
              <p className="type-text">
                University of california berkeley, united states
              </p>
              <ul className="boxes-container">
                <li className="li-text">Private</li>
                <li className="li-text">Estd, 1701</li>
                <li className="li-text">40+ courses</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="slick-image-shadow">
            <img
              src="https://i.ibb.co/TLc2hZw/1.png"
              alt="1"
              className="slick-image"
            />
            <h1 className="type-text">Yale University</h1>
            <p className="type-text">Yale university, united states</p>
            <ul className="boxes-container">
              <li className="li-text">Private</li>
              <li className="li-text">Estd, 1701</li>
              <li className="li-text">40+ courses</li>
            </ul>
          </div>
        </div>
      </Slider>
    </div>
  )
}

const IELTSPage = () => (
  <>
    <Header />
    <div className="ielts-container">
      <div className="top-ielts-box">
        <img
          src="https://i.ibb.co/NFD4gch/image-13.png"
          alt="ielts"
          className="ielts-image"
        />
        <h1 className="ielts-heading">
          IELTS(International English Language Testing System)
        </h1>
      </div>
      <div className="tab-section">
        <p className="tab-name">
          <span className="span-color">Overview</span>
        </p>
        <p className="tab-name">Ranking</p>
        <p className="tab-name">Courses</p>
        <button className="enroll-button" type="button">
          Enroll Now
        </button>
      </div>
      <hr />

      <div className="blue-boxes-container">
        <div className="blue-box">
          <h1 className="box-heading">Acronym</h1>
          <h1 className="box-heading">IELTS</h1>
        </div>

        <div className="blue-box">
          <h1 className="box-heading">Required For</h1>
          <h1 className="box-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </h1>
        </div>

        <div className="blue-box">
          <h1 className="box-heading">Mode of Test</h1>
          <h1 className="box-description">Computer Based</h1>
        </div>

        <div className="blue-box">
          <h1 className="box-heading">Type of Test</h1>
          <h1 className="box-description">Language Test</h1>
        </div>
      </div>

      <h1 className="ielts-main-heading">About Test</h1>
      <p className="main-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
        lectus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
        egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse
        ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
        convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
      </p>
      <a href="https//:Ielsts.com" className="link-text">
        https//:Ielsts.com
      </a>
      <br />
      <a href="Download Free IELTS Exam Guide" className="link-text">
        Download Free IELTS Exam Guide
      </a>

      <h1 className="ielts-main-heading">IELTS Requirement and basics</h1>
      <div className="side-headings-box">
        <div className="boxes-container">
          <h1 className="side-heading">Date & Frequency</h1>

          <p className="side-description">
            IELTS Test dates are offered up to 4 times in a month making a total
            of 48 fixed test dates in one year.
          </p>
        </div>

        <div className="boxes-container">
          <h1 className="side-heading">Center & Admit Card</h1>

          <p className="side-description">
            IELTS Exam is offered across 50 locations in India, No admit card is
            provided for IELTS.
          </p>
        </div>

        <div className="boxes-container">
          <h1 className="side-heading">Center & Admit Card</h1>

          <p className="side-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>

        <div className="boxes-container">
          <h1 className="side-heading">Score Vadility</h1>
          <p className="side-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="boxes-container">
          <h1 className="side-heading">Date & Frequency</h1>
          <p className="side-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </div>
      </div>
      <div className="boxes-container">
        <h1 className="ielts-main-heading">Sections</h1>
        <h1 className="slick-sub-heading">IELTS General Training</h1>
      </div>
      <ReactSlick />
      <h1 className="ielts-main-heading">Fees</h1>
      <div className="boxes-container ">
        <div className="slick-box ">
          <h1 className="fees-box-head">Registration Fees</h1>
          <h1 className="fees-box-head">13,943</h1>
        </div>
        <div className="slick-box ">
          <h1 className="fees-box-head">Rescheduling Fees </h1>
          <h1 className="fees-box-head">2,943</h1>
        </div>
        <div className="slick-box ">
          <h1 className="fees-box-head">Rescheduling Fees</h1>
          <h1 className="fees-box-head">2,043</h1>
        </div>
      </div>

      <h1 className="ielts-main-heading">IELTS Registration Process</h1>
      <p className="main-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>

      <div className="steps-section">
        <img
          src="https://i.ibb.co/VvY4CWf/2023-02-23-2.png"
          alt="2023-02-23-2"
          className="step-image"
        />
        <div className="steps-matter-box">
          <div>
            <h1 className="ielts-heading">Step 1</h1>
            <p className="step-side-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.{' '}
            </p>
          </div>
          <div>
            <h1 className="ielts-heading">Step 2</h1>
            <p className="step-side-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.{' '}
            </p>
          </div>
          <div>
            <h1 className="ielts-heading">Step 3</h1>
            <p className="step-side-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.{' '}
            </p>
          </div>
          <div>
            <h1 className="ielts-heading">Step 4</h1>
            <p className="step-side-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.{' '}
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="small-type-heading ">
          Doesn’t Know How to Start Preparing?
        </h1>
        <div className="btn-text-container">
          <h1 className="ielts-main-heading">
            Talk to our experts to get more Insights
          </h1>
          <button className="sd-abroad-button" type="button">
            Connect to SD Abroad Experts
          </button>
        </div>
      </div>

      <div>
        <h1 className="ielts-main-heading">Related Articles</h1>
        <SlickImages />
      </div>
    </div>
    <div className="footer-boxes-container">
      <h1 className="footer-box-heading">Exams</h1>
      <Footer />
    </div>

    <div className="footer-boxes-container ">
      <h1 className="footer-box-heading ">Mock Tests</h1>
      <Footer />
    </div>

    <div className="footer-boxes-container">
      <h1 className="footer-box-heading ">Previous Year Question Paper</h1>
      <Footer />
    </div>
    <Contactus />
  </>
)

export default IELTSPage
