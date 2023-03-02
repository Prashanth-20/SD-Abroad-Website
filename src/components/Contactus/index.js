import './index.css'

const Contactus = () => (
  <div className="background-bottom-section">
    <div className="bottom-section">
      <div>
        <h1 className="main-logo-head">LOGO</h1>
        <p className="text">SD Campus Solution Pvt. Ltd.</p>
        <p className="text">
          1st & 2nd Floor, Zion Building, <br />
          Plot No. 273, Sector 10, Kharghar, <br />
          Navi Mumbai - 410210
        </p>
        <p className="text">support@testbook.com</p>
        <p className="text">
          Toll Free:1800 203 0577 <br />
          Office Hours: 10 AM to 7 PM (all 7 days)
        </p>
      </div>

      <div>
        <h1 className="small-head">Products</h1>
        <p className="text">Live Classes</p>
        <p className="text">EBooks</p>
        <p className="text">Mocktests</p>
        <p className="text">Courses</p>
      </div>

      <div>
        <h1 className="small-head">Company</h1>
        <p className="text">About us</p>
        <p className="text">Career</p>
      </div>

      <div>
        <h1 className="small-head">More</h1>
        <p className="text">Current Affair</p>
        <p className="text">Previous Year Questions</p>
        <p className="text">Help</p>
      </div>

      <div>
        <h1 className="small-head">Our App</h1>
        <div className="logo-container">
          <div className="logo-box">LOGO</div>
          <div>
            <p className="app-text">SD Campus App</p>
            <p className="download-text">Download Now</p>
          </div>
        </div>
        <img
          src="https://i.ibb.co/sb2H0Cs/Frame-83.png"
          alt="Frame-83"
          className="social-icons"
        />
      </div>
    </div>
    <hr />
    <div className="bottom-section">
      <p className="end-bottom-text">© 2021 All Rights Reserved</p>
      <div className="bottom-section">
        <p className="end-bottom-text">Privacy Policy</p>
        <p className="end-bottom-text">User Policy</p>
        <p className="end-bottom-text">Terms of Use</p>
      </div>
    </div>
  </div>
)
export default Contactus
