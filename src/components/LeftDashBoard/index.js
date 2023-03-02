import {AiOutlineHome} from 'react-icons/ai'
import {BsBarChart, BsReplyAll, BsFillPersonFill} from 'react-icons/bs'
import {FaGraduationCap} from 'react-icons/fa'

import './index.css'

const LeftDashBoard = () => (
  <div className="left-side-dashboard-box">
    <h1 className="logo-heading">LOGO</h1>
    <div className="dash-board-box">
      <AiOutlineHome className="blue-home-icon" />
      <p className="first-blue-dashboard-text">Dashboard</p>
    </div>

    <h1 className="dashboard-sub-heading">TESTS</h1>
    <div className="dash-board-box">
      <BsBarChart className="remaining-logo-icons" />
      <p className="blue-dashboard-text">MockTest Series</p>
    </div>

    <div className="dash-board-box">
      <BsReplyAll className="remaining-logo-icons" />
      <p className="blue-dashboard-text">Previous Year Papers</p>
    </div>

    <div className="dash-board-box">
      <FaGraduationCap className="remaining-logo-icons" />
      <p className="blue-dashboard-text">Universities</p>
    </div>

    <hr />
    <h1 className="dashboard-sub-heading">COURSES</h1>
    <div className="dash-board-box">
      <BsBarChart className="remaining-logo-icons" />
      <p className="blue-dashboard-text">Language Courses</p>
    </div>

    <div className="dash-board-box">
      <BsFillPersonFill className="remaining-logo-icons" />
      <p className="blue-dashboard-text">Exam Courses</p>
    </div>

    <hr />
    <h1 className="dashboard-sub-heading">EXAM</h1>

    <div className="dash-board-box">
      <AiOutlineHome className="remaining-logo-icons" />
      <p className="blue-dashboard-text">Resources</p>
    </div>

    <div className="dash-board-box">
      <AiOutlineHome className="remaining-logo-icons" />
      <p className="blue-dashboard-text">Assignment</p>
    </div>

    <div className="dash-board-box">
      <AiOutlineHome className="remaining-logo-icons" />
      <p className="blue-dashboard-text">Reports</p>
    </div>

    <hr />
    <div className="dash-board-box">
      <AiOutlineHome className="remaining-logo-icons" />
      <p className="blue-dashboard-text">Settings</p>
    </div>

    <div className="dash-board-box">
      <AiOutlineHome className="remaining-logo-icons" />
      <p className="blue-dashboard-text">Logout</p>
    </div>
  </div>
)
export default LeftDashBoard
