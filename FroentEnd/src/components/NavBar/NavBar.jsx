import React from 'react'
import "./NavBar.scss"
// import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
const NavBar = ({ backGroundColor, position }) => {
    // const navigate = useNavigate()
    return (
        <>
            <nav style={{ position: position, backgroundColor: backGroundColor }}>
                <div className="nav_left">
                    <h1>
                        Pulse<span>.</span>
                    </h1>
                </div>
                <ul className="nav_center">
                    <Link to='/'>Home</Link>
                    <li>About Us</li>
                    <li>Restaurant</li>
                    <li>News</li>
                    <li>Contact</li>
                    <Link to="/basket" onClick={() => {
                        // navigate("/basket")
                    }}>Basket</Link>
                    <Link to="/admin" >Add</Link>
                </ul>
                <div className="nav_right">
                <svg className='menu' style={{width:"30px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#f0f0f0" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                    <p><span>Reservation</span><svg style={{ width: '10px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>652-345 3222 11
                    </p>
                </div>
            </nav>
        </>
    )
}

export default NavBar