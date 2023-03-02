import {BsSearch} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'

import './index.css'

const Header = () => (
  <div className="header-section">
    <div className="logo-bg">
      <p className="logo-text">LOGO</p>
    </div>
    <ul className="list-items">
      <li className="list-item-name">Home</li>
      <li className="list-item-name">Universities</li>
      <li className="list-item-name">Services</li>
      <li className="list-item-name">Test Prep</li>
      <li className="list-item-name">Courses</li>
      <li className="list-item-name">More</li>
    </ul>
    <div className="right-part">
      <div className="search-box">
        <BsSearch className="icon" />
        <input type="search" className="input-box" placeholder="Search" />
      </div>
      <button type="button" className="call-us-button">
        Call Us
      </button>
      <CgProfile className="profile-icon" />
    </div>
  </div>
)

export default Header
