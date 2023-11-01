import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import pic2 from "./assets/imgs/pic2.webp";
import pic4 from "./assets/imgs/pic4.jpg";
import dj from "./assets/imgs/dj.jpg";
import playbutton from "./assets/imgs/Play button triangle.svg";
function App() {

  useEffect(() => {
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        if (this.type === "email") {
          const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
          if (!emailRegex.test(this.value)) {
            this.classList.add('input-error');
            return; 
          }
        }
        if (this.value.trim() === '' && this.type !== "button") {
          this.classList.add('input-error');
        } else {
          this.classList.remove('input-error');
        }
      });
    });
  }, []);
  return (
    <div>
      <Navbar />
<div className="section1">
  <img src={dj} className="dj"/>
  <div className="overlayContainer">
    <div className="overlayFlex">
    <div className="overlayHeader">A.M. Paradox</div>
  <div className="overlayText">Christopher Brent Wood, better known by his stage name Brent Faiyaz, is
an American singer and record producer. He released his debut project, an extended play entitled A.M. Paradox, in 2016.</div>
<div className="overlayFlexHorizontal">
<div className="circle">
  <img src={playbutton} className="playbutton" />
</div>
  <div className="watch">Watch Video</div>
</div>
    </div>
  </div>


</div>
      <div className="section2">
        <div className="contentContainer">
          <img src={pic2} className="brent" />

          <div className="text1">
            <div className="heading">Brent Faiyaz, So Far Gone</div>
            <div className="description">
              Faiyaz began uploading his music onto SoundCloud in 2014 and moved
              from his hometown Columbia, Maryland to Charlotte, North Carolina
              before ultimately settling in Los Angeles, California to further
              his music career. On January 19, 2015, he released his debut
              single "Allure". On June 1, 2016, Faiyaz released "Invite Me", the
              lead single from his upcoming debut EP. On September 19, 2016, his
              21st birthday, the EP entitled A.M. Paradox was released and
              received with positive reviews from music critics. On January 26,
              2017, Sonder released their debut EP Into.
            </div>
            <button className="learnMore">Learn More</button>
          </div>
        </div>
      </div>

      <div className="formSectionContainer">
        <div className="formWrapper">
          <div className="heading">Get In Touch</div>
          <div>
            New albums every single month, check out the newest & best from
            Snyder Recording artist, now available on Apple Music & Spotify.
          </div>
          <form>
            <div className="formDivide">
            <div className="formcol">
              <div className="input">
              <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="sfname" required placeholder="First Name"></input>
              </div>
              <div className="input">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="Email Address"></input>
              </div>
            </div>
            <div className="formcol">
            <div className="input">
              <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lname" placeholder="Last Name"></input>
              </div>
              <div className="input">
                <label htmlFor="select">Reason for Contacting</label>
                <select id="select">
                  <option value="" disabled selected>Select One</option>
                  <option value="artist">Artist Inquiry</option>
                  <option value="media">Media Inquiry</option>
                </select>
              </div>

              
</div>
</div>
<div className="input">
  <label htmlFor="message">Message (Optional)</label>
<textarea id="message" className="message" placeholder="Write a brief message..."></textarea>

</div>
            
          </form>
          
          <button className="learnMore">Submit</button>
        </div>
<div className="picContainer">
<img src={pic4}/>
</div>
       
      </div>
      <Footer />
    </div>
  );
}

export default App;
