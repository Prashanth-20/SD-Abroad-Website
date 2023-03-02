import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'
import Header from '../Header'
import Footer from '../Footer'
import Contactus from '../Contactus'
import './index.css'

const CounsellingPage = () => (
  <>
    <Header />
    <div className="counselling-page-main-container">
      <div className="counselling-page-top-box">
        <div>
          <h1 className="who-are-we">
            Still Confused <span className="span-text">Where to Start?</span>
          </h1>
          <p className="counselling-page-description">
            Talk to our experts that helps you select the right path for you
          </p>
          <button type="button" className="counselling-page-button">
            Talk to our expert
          </button>
        </div>

        <img
          src="https://i.ibb.co/C1DrGBp/Confused-man-sitting-at-laptop.png"
          alt="Confused-man"
          className="confused-man-image"
        />
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
export default CounsellingPage
