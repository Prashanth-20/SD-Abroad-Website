import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'
import Header from '../Header'
import Footer from '../Footer'
import Contactus from '../Contactus'

import './index.css'

const VisaProcess = () => (
  <>
    <Header />
    <div className="accommodation-main-page">
      <div className="top-accommodation-page">
        <div>
          <h1 className="accommodation-top-heading">
            <span className="accommodation-styled-text">Visa </span>
            tips for International <br />
            Students
          </h1>
          <p className="accommodation-paragraph">
            A proper guide to help you stay abroad
          </p>
        </div>
        <img
          src="https://i.ibb.co/dGPBDL1/Departing-rafiki-1.png"
          alt="Departing-rafiki"
          className="accommodation-image"
        />
      </div>
      <p className="accommodation-main-description">
        Studying Abroad is a vast variety of experiences, from living in a
        foreign country to experiencing a diverse lifestyle. A prominent aspect
        of studying abroad is living abroad; living on-campus is every
        international student’s dream. From dormitories to renting apartments in
        the neighbourhood, students can find different types of international
        student accommodation to choose from. Each type has a unique benefit
        associated with it for students to avail themselves and enjoy! Keep
        reading to know more about the different types of accommodations and
        which one you should opt for.
      </p>
      <img
        src="https://i.ibb.co/sWPdM6b/2023-02-27.png"
        alt="2023-02-27"
        className="youtube-image"
      />

      <div>
        <h1 className="accommodation-top-heading">
          Where to get your
          <span className="accommodation-styled-text">
            Student <br /> Visa
          </span>
        </h1>
        <p className="accommodation-paragraphs">
          Every country has a management to take care of the housing needs of
          the international students. Some universities have campus
          accommodation while some have limited hostels in their universities
          and therefore, offer students help with finding apartments or hosting
          families where they can live. There are a variety of options when it
          comes to international student accommodations that the students can
          look into. Such as dormitories, shared apartments or single
          apartments, and living with local families. Students can choose the
          best option based on their personal needs, budget, and choices. Let’s
          look at the different types of accommodation students can find in a
          foreign country.
        </p>
      </div>

      <div>
        <h1 className="accommodation-top-heading">
          On Campus
          <span className="accommodation-styled-text">
            <br /> Accommodation
          </span>
        </h1>
        <p className="accommodation-paragraphs">
          The international students are offered the choice to stay on campus.
          This is certainly the most advantageous option due to several
          benefits. The primary reason to live on campus is the closeness to the
          university buildings. You are often on time for your classes. It also
          ensures a safe environment for the students. Other benefits include
          the easy access classes, cafes and library and to other students and
          local citizens. The ability to live among everyone and interact leads
          to good social interactions. Students on campus can participate in a
          wide range of social activities, events, cook with friends in the
          kitchen dorms, or hang out in campus spaces helps in building
          relations with colleagues. It is also the cheapest type of
          accommodation for international students. <br />
          However, the flip side of the coin might have some disadvantages such
          as the size of the rooms and the quality of people sharing the room
          with you. The limited access to outside facilities and strictness are
          some of the topics of concern.
        </p>
      </div>

      <div>
        <h1 className="accommodation-top-heading">
          Off Campus
          <span className="accommodation-styled-text">
            <br /> Accommodation
          </span>
        </h1>
        <p className="accommodation-paragraphs">
          Rarely, campus accommodation is not provided to international students
          but when this happens the students need to look outside the
          university. Universities often assist students in finding safe and
          comfortable accommodation. Private accommodation is the perfect choice
          for international students. Students can bunk with friends or connect
          with like-minded people at the same university.
          <br />
          Students live together in a community outside the universities which
          is a different experience altogether. The costs of private
          accommodation can be a little higher. Though it benefits the different
          aspects of your social life. It gives you a chance to explore the city
          with your friends, students do not have to worry about dorm hours and
          are free to cook and clean at their own pace. Another benefit of
          private accommodation is personal space, students can get their own
          room in a shared apartment or rent an entire apartment for themselves
          depending on their personal expenses.
        </p>
      </div>

      <div>
        <h1 className="accommodation-top-heading">
          Accommodation
          <span className="accommodation-styled-text">
            <br /> with Local Families
          </span>
        </h1>
        <p className="accommodation-paragraphs">
          This is also a popular choice in many countries where international
          students live with the local family. This is certainly a great
          experience which helps the students in being “less homesick”. It is a
          feeling of being at home. The food prices are also included in the
          accommodation rent. Universities set up international students with
          suitable families for accommodation. Many students and their parents
          opt for this type of international student accommodation because of
          the familiarises and students get home-cooked meals, the comfort of
          living with a family, and a sense of safety.
        </p>
      </div>
      <div className="family-image-container">
        <img
          src="https://i.ibb.co/tm2Pg1V/Study-abroad-pana-1.png"
          alt="Family"
          className="family-image"
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

    <Contactus />
  </>
)
export default VisaProcess
