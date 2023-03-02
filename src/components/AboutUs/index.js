import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'
import {AiOutlineStar} from 'react-icons/ai'
import Footer from '../Footer'
import Contactus from '../Contactus'
import Header from '../Header'
import './index.css'

const AboutUs = () => (
  <>
    <Header />
    <div className="main-about-us-section">
      <div className="about-us-top-section">
        <div>
          <h1 className="who-are-we">
            We are helping many <br /> to achieve there <br /> dream carrer
          </h1>
          <p className="about-us-main-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra,
          </p>
          <button type="button" className="about-contact-now-btn">
            Contact Now
          </button>
          <div className="about-us-star-text-box">
            <div className="blue-background-box">
              <AiOutlineStar className="star-image" />
            </div>
            <p className="about-us-main-description">
              More than 500+ Students Trusted US
            </p>
          </div>
        </div>
        <div className="about-image-background">
          <img
            src="https://i.ibb.co/ZhYs4T7/image-18.png"
            alt="about-girl"
            className="about-girl-image"
          />
        </div>
      </div>

      <div className="about-us-top-section">
        <div>
          <h1 className="our-story-heading">Our Story</h1>
          <h1 className="who-are-we">
            What we’re trying to <span className="span-text">Achieve</span>
          </h1>
          <p className="about-page-middle-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus.
          </p>

          <p className="about-page-middle-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus.
            <span className="view-more-text-span"> View more...</span>
          </p>
        </div>
        <img
          src="https://i.ibb.co/v4khBM5/11668194-20945093-1.png"
          alt="world"
          className="world-image"
        />
      </div>

      <h1 className="who-are-we">
        Our <span className="span-text">Offerings</span>
      </h1>
      <div className="about-us-box-container">
        <div className="about-us-page-boxes">SD Abroad</div>
        <div className="about-us-page-boxes">SD Campus</div>
        <div className="about-us-page-boxes">SD Publications</div>
      </div>

      <div className="about-us-top-section">
        <h1 className="who-are-we">
          What <span className="span-text">People</span> say
          <br />
          <span className="span-text">About</span> us
        </h1>
        <img
          src="https://i.ibb.co/C1GRvTv/Group-22.png"
          alt="Group-22"
          className="cards"
        />
      </div>

      <div className="main-founders-container">
        <h1 className="who-are-we">
          Our <span className="span-text"> Founders</span>
        </h1>
        <div className="founders-container">
          <div>
            <div className="founders-img-background">
              <img
                src="https://i.ibb.co/Q8M0dyV/anil-sir-1.png"
                alt="anil-sir-1"
                className="ceos-images"
              />
            </div>
            <h1 className="ceo-name">Sunil Sharma</h1>
            <h1 className="founder-text">Founder and CEO</h1>
          </div>
          <div>
            <div className="founders-img-background">
              <img
                src="https://i.ibb.co/82ngyhK/aruna-mam-1-1.png"
                alt="aruna-mam-1-1"
                className="ceos-images"
              />
            </div>
            <h1 className="ceo-name">Samantha Sha</h1>
            <h1 className="founder-text">Founder and CEO</h1>
          </div>
        </div>
      </div>

      <div className="hall-of-fame-box">
        <h1 className="ceo-name">
          SD <span className="span-text"> Campus</span> hall of
          <span className="span-text"> Fame</span>
        </h1>

        <div className="about-us-box-container">
          <img
            src="https://i.ibb.co/njrHZV7/Group-51.png"
            alt="Group-51"
            className="hall-of-fame-image"
          />

          <img
            src="https://i.ibb.co/8mpN1JR/Group-52.png"
            alt="Group-52"
            className="hall-of-fame-image"
          />

          <img
            src="https://i.ibb.co/FJwhqRK/Group-53.png"
            alt="Group-53"
            className="hall-of-fame-image"
          />

          <img
            src="https://i.ibb.co/8mpN1JR/Group-52.png"
            alt="Group-52"
            className="hall-of-fame-image"
          />

          <img
            src="https://i.ibb.co/njrHZV7/Group-51.png"
            alt="Group-51"
            className="hall-of-fame-image"
          />
        </div>

        <div className="about-us-box-container">
          <img
            src="https://i.ibb.co/njrHZV7/Group-51.png"
            alt="Group-51"
            className="hall-of-fame-image"
          />

          <img
            src="https://i.ibb.co/8mpN1JR/Group-52.png"
            alt="Group-52"
            className="hall-of-fame-image"
          />

          <img
            src="https://i.ibb.co/FJwhqRK/Group-53.png"
            alt="Group-53"
            className="hall-of-fame-image"
          />

          <img
            src="https://i.ibb.co/8mpN1JR/Group-52.png"
            alt="Group-52"
            className="hall-of-fame-image"
          />

          <img
            src="https://i.ibb.co/njrHZV7/Group-51.png"
            alt="Group-51"
            className="hall-of-fame-image"
          />
        </div>
      </div>
      <div>
        <h1 className="span-text">FAQ's</h1>
        <div className="main-drop-down-box">
          <div className="drop-down-text-image">
            <h1 className="drop-down-heading">
              How much does it cost to study in UK?
            </h1>
            <MdKeyboardArrowUp />
          </div>
          <p className="drop-down-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            rutrum eget in at congue vitae. At neque, consequat tempor vitae.
            Nunc, metus, a, et bibendum. Consectetur donec venenatis quis
            interdum tempus dolor lorem nam maecenas.
          </p>
        </div>
        <div>
          <div className="main-drop-down-box">
            <div className="drop-down-text-image">
              <h1 className="drop-down-heading">
                Is it possible to study in UK without IELTS?
              </h1>
              <MdKeyboardArrowDown />
            </div>
          </div>

          <div className="main-drop-down-box">
            <div className="drop-down-text-image">
              <h1 className="drop-down-heading">
                Can one work part-time while studying in UK?
              </h1>
              <MdKeyboardArrowDown />
            </div>
          </div>

          <div className="main-drop-down-box">
            <div className="drop-down-text-image">
              <h1 className="drop-down-heading">
                What is the minimum percentage required to study in the UK?
              </h1>
              <MdKeyboardArrowDown />
            </div>
          </div>

          <div className="main-drop-down-box">
            <div className="drop-down-text-image">
              <h1 className="drop-down-heading">
                Which are the best courses to study in the UK?
              </h1>
              <MdKeyboardArrowDown />
            </div>
          </div>

          <div className="main-drop-down-box">
            <div className="drop-down-text-image">
              <h1 className="drop-down-heading">
                Which are the top universities in the UK?
              </h1>
              <MdKeyboardArrowDown />
            </div>
          </div>

          <div className="main-drop-down-box">
            <div className="drop-down-text-image">
              <h1 className="drop-down-heading">
                How long can one stay after studying in the UK?
              </h1>
              <MdKeyboardArrowDown />
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
export default AboutUs
