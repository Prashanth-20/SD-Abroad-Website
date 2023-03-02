import Header from '../Header'
import Footer from '../Footer'
import Contactus from '../Contactus'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <>
      <div className="home-container">
        <div className="hero-image-container">
          <h1 className="hero-heading">
            Spread Y
            <img
              src="https://i.ibb.co/3T9DGcP/Rectangle-711.png"
              alt="Rectangle-711"
              className="head-icons"
            />
            ur Wings <br />
            Take the Flight
            <img
              src="https://i.ibb.co/r5qtYC8/Airplane.png"
              alt="Airplane"
              className="head-icons"
            />
            <br />
            towards
            <img
              src="https://i.ibb.co/ccrVtKD/Line-1.png"
              alt="Line-1"
              className="head-icons"
            />
          </h1>
          <h1 className="your-dream-career">Your Dream Career</h1>
          <button type="button" className="expert-button">
            Talk to an Expert
          </button>
        </div>
        <div className="boy-girl-container">
          <div>
            <h1 className="about-us">ABOUT US</h1>
            <h1 className="who-are-we">
              Who are <span className="span-text">we?</span>
            </h1>
            <p className="para-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus.
            </p>
            <button type="button" className="know-more-button">
              Know More
            </button>
          </div>
          <img
            src="https://i.ibb.co/hDrDgnq/guy-and-girl-students.png"
            alt="guy-and-girl-students"
            className="boy-girl-image"
          />
        </div>
      </div>

      <div className="cards-container">
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

      <div className="content-box">
        <div>
          <h1 className="live-tv">LIVE TV</h1>
          <h1 className="card-description">
            Content that leads you to your Destination
          </h1>
          <button type="button" className="know-more-button">
            View Playlist
          </button>
        </div>
        <img
          src="https://i.ibb.co/CPdwzvh/Frame-76.png"
          alt="content"
          className="content-image"
        />
      </div>

      <div className="items-section">
        <h1 className="about-us">OFFERINGS</h1>
        <h1 className="who-are-we">
          For all your <span className="span-text">People</span> study abroad
          needs
        </h1>

        <div className="top-blue-items-container">
          <img
            src="https://i.ibb.co/CpytxHJ/Other-13-1.png"
            alt="Other-13-1"
            className="card-images"
          />
          <div className="text-container">
            <h1 className="research-heading">Research & Discovery</h1>
            <p className="tag-head">Explore your options</p>
            <p className="description">
              In terms of different destinations, universities, courses and more
            </p>
            <button type="button" className="items-button">
              Check Out
            </button>
          </div>
        </div>

        <div className="bottom-blue-items-container">
          <div className="text-container">
            <h1 className="research-heading">Short & Listening</h1>
            <p className="tag-head">Find right fit for you</p>
            <p className="description">
              In terms of different destinations, universities, courses and more
            </p>
            <button type="button" className="items-button">
              University Course Finder
            </button>
          </div>
          <img
            src="https://i.ibb.co/7STPmX8/m003t0636-a-right-or-confution-decision-06oct-22-1.png"
            alt="card"
            className="card-images right-images"
          />
        </div>

        <div className="top-blue-items-container">
          <img
            src="https://i.ibb.co/q7xjhQx/m028t0111-c-luggage-18jul22-1.png"
            alt="Other-13-1"
            className="card-images"
          />
          <div className="text-container">
            <h1 className="research-heading">Start your Journey with us</h1>
            <p className="tag-head">Explore your options</p>
            <p className="description">
              In terms of different destinations, universities, courses and more
            </p>
            <button type="button" className="items-button">
              Book a free session
            </button>
          </div>
        </div>

        <div className="bottom-items-container ">
          <div className="text-container">
            <h1 className="research-heading">Tests</h1>
            <p className="tag-head">Explore your options</p>
            <p className="description">
              Get yourself ready for IELTS & other related Tests
            </p>
            <button type="button" className="items-button">
              Explore Courses
            </button>
          </div>
          <img
            src="https://i.ibb.co/N1jKR3m/checklist-clipboard-pencil-icon-sign-symbol-reminder-checkbox-document-report-concept-pink-backgroun.png"
            alt="checklist-clipboard-pencil"
            className="card-images right-images"
          />
        </div>

        <div className="top-items-container ">
          <img
            src="https://i.ibb.co/w7zmCKc/notebook-with-glasses-and-pencil.png"
            alt="notebook-with-glasses-and-pencil"
            className="card-images"
          />
          <div className="text-container">
            <h1 className="research-heading">Application & Offers</h1>
            <p className="tag-head">Track your application & Offers</p>
            <p className="description">
              In terms of different destinations, universities, courses and more
            </p>
            <button type="button" className="items-button">
              Student Dashboard
            </button>
          </div>
        </div>

        <div className="bottom-items-container ">
          <div className="text-container">
            <h1 className="research-heading">Uni Connect</h1>
            <p className="tag-head">Meet with over 500 universities</p>
            <p className="description">
              In terms of different destinations, universities, courses and more
            </p>
            <button type="button" className="items-button">
              Upcoming Events
            </button>
          </div>
          <img
            src="https://i.ibb.co/CHzKnBb/books-graduation-hat-and-diploma-scroll.png"
            alt="books-graduation"
            className="card-images right-images"
          />
        </div>

        <div className="top-items-container ">
          <img
            src="https://i.ibb.co/KLywkXg/Cash-and-coins.png"
            alt="Other-13-1"
            className="card-images"
          />
          <div className="text-container">
            <h1 className="research-heading">Loans and Scholarships</h1>
            <p className="tag-head">Finance your study abroad dream</p>
            <p className="description">
              In terms of different destinations, universities, courses and more
            </p>
            <button type="button" className="items-button">
              Apply for loan
            </button>
            <button type="button" className="items-button">
              Apply for loan
            </button>
          </div>
        </div>

        <div className="bottom-items-container ">
          <div className="text-container">
            <h1 className="research-heading">Forex</h1>
            <p className="tag-head">Pay deposits to confirm your admission</p>
            <p className="description">
              In terms of different destinations, universities, courses and more
            </p>
            <button type="button" className="items-button">
              Send Money Abroad
            </button>
          </div>
          <img
            src="https://i.ibb.co/SNGNWck/check-machine.png"
            alt="Other-13-1"
            className="card-images right-images"
          />
        </div>

        <div className="top-items-container ">
          <img
            src="https://i.ibb.co/Jv8Jzyw/Boy-with-map-going-on-a-hike.png"
            alt="Other-13-1"
            className="card-images"
          />
          <div className="text-container">
            <h1 className="research-heading">Travel and Accomodations</h1>
            <p className="tag-head">
              Get help with Visa, Travel and Accomodations
            </p>
            <p className="description">
              In terms of different destinations, universities, courses and more
            </p>
            <button type="button" className="items-button">
              Get Started
            </button>
          </div>
        </div>

        <div className="bottom-items-container ">
          <div className="text-container ">
            <h1 className="research-heading">Enroll</h1>
            <p className="tag-head">Fly and Study at your Dream University</p>
            <p className="description">
              In terms of different destinations, universities, courses and more
            </p>
            <button type="button" className="items-button">
              View Testimonials
            </button>
          </div>
          <img
            src="https://i.ibb.co/vc5yjKb/male-student-sitting-at-green-desk-and-raising-his-hand.png"
            alt="Other-13-1"
            className="card-images right-images"
          />
        </div>
      </div>

      <div className="mobile-background">
        <div className="text-box">
          <h1 className="research-heading">SD Abroad App</h1>
          <h1 className="who-are-we">Your Career in your hands</h1>
          <div className="mobile-text-right-container">
            <div className="tick-mark-image">
              <img
                src="https://i.ibb.co/gwfRTgp/Vector.png"
                className="tick-mark"
                alt="tick-mark"
              />
            </div>
            <p className="mobile-tag-text">Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="mobile-text-right-container">
            <div className="tick-mark-image">
              <img
                src="https://i.ibb.co/gwfRTgp/Vector.png"
                className="tick-mark"
                alt="tick-mark"
              />
            </div>
            <p className="mobile-tag-text">Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="mobile-text-right-container">
            <div className="tick-mark-image">
              <img
                src="https://i.ibb.co/gwfRTgp/Vector.png"
                className="tick-mark"
                alt="tick-mark"
              />
            </div>
            <p className="mobile-tag-text">Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="mobile-text-right-container">
            <div className="tick-mark-image">
              <img
                src="https://i.ibb.co/gwfRTgp/Vector.png"
                className="tick-mark"
                alt="tick-mark"
              />
            </div>
            <p className="mobile-tag-text">Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="mobile-text-right-container">
            <div className="tick-mark-image">
              <img
                src="https://i.ibb.co/gwfRTgp/Vector.png"
                className="tick-mark"
                alt="tick-mark"
              />
            </div>
            <p className="mobile-tag-text">Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="mobile-text-right-container">
            <div className="tick-mark-image">
              <img
                src="https://i.ibb.co/gwfRTgp/Vector.png"
                className="tick-mark"
                alt="tick-mark"
              />
            </div>
            <p className="mobile-tag-text">Lorem ipsum dolor sit amet.</p>
          </div>
          <p className="small-text">
            Download our app to get all the things right in your hand
          </p>
          <div className="mobile-text-right-container">
            <img
              src="https://i.ibb.co/LQnnqcq/Vector-1.png"
              alt="Vector-1"
              className="qr-code-image"
            />
            <div className="app-play-container">
              <img
                src="https://i.ibb.co/LhxqYZv/googleplay.png"
                alt="googleplay"
                className="play-store-app-store"
              />
              <img
                src="https://i.ibb.co/7kqPR5B/Group.png"
                alt="googleplay"
                className="play-store-app-store"
              />
            </div>
          </div>
        </div>
        <div className="phone-bg-color">
          <img
            src="https://i.ibb.co/w05NGCd/Female-hand-holding-i-Phone-14-Pro-mockup-Mockuuups-Studio.png"
            alt="mobile"
            className="mobile-photo"
          />
        </div>
      </div>

      <h1 className="who-are-we">
        We have over <span className="span-text">500+ University </span>
        Partners
      </h1>

      <div className="images-container">
        <div className="similar-images-group">
          <img
            src="https://i.ibb.co/NStXV5V/image-2.png"
            alt="icon"
            className="symbol"
          />
          <img
            src="https://i.ibb.co/NStXV5V/image-2.png"
            alt="icon"
            className="symbol"
          />
          <img
            src="https://i.ibb.co/NStXV5V/image-2.png"
            alt="icon"
            className="symbol"
          />
        </div>
        <div className="similar-images-group">
          <img
            src="https://i.ibb.co/mqcdw71/image-6.png"
            alt="icon"
            className="symbol"
          />
          <img
            src="https://i.ibb.co/mqcdw71/image-6.png"
            alt="icon"
            className="symbol"
          />
          <img
            src="https://i.ibb.co/mqcdw71/image-6.png"
            alt="icon"
            className="symbol"
          />
        </div>

        <div className="similar-images-group">
          <img
            src="https://i.ibb.co/gg4LM4Q/image-7.png"
            alt="icon"
            className="symbol"
          />
          <img
            src="https://i.ibb.co/gg4LM4Q/image-7.png"
            alt="icon"
            className="symbol"
          />
          <img
            src="https://i.ibb.co/gg4LM4Q/image-7.png"
            alt="icon"
            className="symbol"
          />
        </div>
        <div className="similar-images-group">
          <img
            src="https://i.ibb.co/R7qRrKY/image-3.png"
            alt="icon"
            className="symbol"
          />
          <img
            src="https://i.ibb.co/R7qRrKY/image-3.png"
            alt="icon"
            className="symbol"
          />
          <img
            src="https://i.ibb.co/R7qRrKY/image-3.png"
            alt="icon"
            className="symbol"
          />
        </div>
        <div className="similar-images-group">
          <img
            src="https://i.ibb.co/xS5Y8H2/image-4.png"
            alt="icon"
            className="symbol"
          />
          <img
            src="https://i.ibb.co/xS5Y8H2/image-4.png"
            alt="icon"
            className="symbol"
          />
          <img
            src="https://i.ibb.co/xS5Y8H2/image-4.png"
            alt="icon"
            className="symbol"
          />
        </div>
      </div>

      <div className="footer-boxes-container">
        <h1 className="research-heading">Other websites</h1>
        <h1 className="who-are-we">
          You also refer to our
          <span className="span-text"> other websites </span>
          for related stuff
        </h1>
        <div>
          <img
            src="https://i.ibb.co/0jpM0m0/Frame-110.png"
            alt="Frame-110"
            className="shadow-box"
          />
          <img
            src="https://i.ibb.co/0jpM0m0/Frame-110.png"
            alt="Frame-110"
            className="shadow-box"
          />
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
      <div className="mobile-image">
        <Contactus />
      </div>
    </>
  </div>
)

export default Home
