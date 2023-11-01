import React from 'react'
import "./Footer.css"
import logo from "../assets/Logo-White.svg"
import instagram from "../assets/social-icons/007-instagram 1.svg"
import youtube from "../assets/social-icons/009-youtube 1.svg"
import twitter from "../assets/social-icons/004-twitter 1.svg"
import facebook from "../assets/social-icons/002-facebook 1.svg"
const Footer = () => {
  return (
    <div className='container'>

<div className='contentWrapper'>
       <div className='infoWrap'>
        <img src={logo} className="logo"/>

        <div>
            <div>
                8521 W Fairfax Rd
            </div>
            <div>
                Los Angeles, CA
            </div>
            <div>
                990210
            </div>
        </div>

        <div>
            <div>
                (909) 505 4302
            </div>
        </div>
       </div>

       <div className='colWrap'>
<div className='title'>EXPLORE</div>
<div>About Us</div>
<div>Our Story</div>
<div>Team</div>
<div>Careers</div>
<div>FAQ</div>
       </div>

       <div className='colWrap'>
<div className='title'>MUSIC</div>
<div>Missing Out</div>
<div>Trapsoul</div>
<div>Sonder Sons</div>
<div>Paradise Today</div>
<div>Needed</div>
       </div>

       <div className='colWrap'>
<div className='title'>ARTISTS</div>
<div>Brent Faiyaz</div>
<div>Drake</div>
<div>Bryson Ford</div>
<div>Young Ford</div>
<div>Roy Fresco</div>
       </div>

       <div className='colWrap'>
<div className='title'>RECORDS</div>
<div>What a Time</div>
<div>Coming Home</div>
<div>Always First</div>
<div>So Far Gone</div>
<div>Big Bluez</div>
       </div>

       </div>

       <div className='footerWrapper'>
        <div className='legal'>
        <div>
            Privacy Policy
        </div>
        <div>Terms & Conditions</div>
        </div>
        <div className='social'>
            <img src={instagram}/>
            <img src={youtube}/>
            <img src={twitter}/>
            <img src={facebook}/>
        </div>
       </div>
    </div>
  )
}

export default Footer