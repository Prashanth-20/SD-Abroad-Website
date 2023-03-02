import Header from '../Header'
import Footer from '../Footer'
import Contactus from '../Contactus'

import './index.css'

const AIUniversityCarricular = () => (
  <>
    <Header />
    <div className="main-carricular-container">
      <div className="carricular-top-section">
        <img
          src="https://i.ibb.co/JdWgv3r/2023-03-02.png"
          alt="2023-03-02"
          className="carricular-image"
        />
        <div className="images-tag-text-box">
          <p className="carricular-image-text">Academics</p>
          <p className="carricular-image-text">
            Circular
            <br />
            Activities
          </p>
          <p className="carricular-image-text">
            Work
            <br />
            Experience
          </p>
          <p className="carricular-image-text">Tests</p>
        </div>

        <div className="images-tag-text-box">
          <div className="shadow-carricular-box">
            <img
              src="https://i.ibb.co/3YmKyW1/Screenshot-2023-02-03-at-9-52-1.png"
              alt="shadow"
              className="shadow-image"
            />
          </div>

          <div className="shadow-carricular-box">
            <img
              src="https://i.ibb.co/DYH84kW/Screenshot-2023-02-03-at-9-52-2.png"
              alt="shadow"
              className="shadow-image"
            />
          </div>

          <div className="shadow-carricular-box">
            <div>
              <img
                src="https://i.ibb.co/MS0rc3v/Question.png"
                alt="shadow"
                className="shadow-image"
              />
              <p className="carricular-image-text">Not Sure</p>
            </div>
          </div>
        </div>

        <div className="images-tag-text-box">
          <p className="back-btn-text">Back</p>
          <button type="button" className="carricular-continue-btn">
            Continue
          </button>
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
export default AIUniversityCarricular
