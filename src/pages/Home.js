import React from "react";
import  "./home.css";
import Signup from "../components/signup/Signup";
import Login from "../components/login/login";
import {Link} from 'react-router-dom'
function home() {
  return (
    <div>
      <div class="navbar">
        <li class="logo">
          <img src="./images/logo.png" />
        </li>
        
        <Link to="/SignIn">
        <li class="buttons" >Sign In</li></Link>
        
        
      </div>
      <div class="main">
        <div class="area">
          <h1>
            Unlimited movies, TV <br />
            shows, and more.
          </h1><br/>
          <h3>Watch anywhere. Cancel anytime.</h3><br/>
          <h4>
            Ready to watch? Enter your email to create or access your account
          </h4>
          <div class="search">
            <input type="text" class="box" placeholder=" Email Address" />
            <span class="try">
              Try 30 days free <i class="fas fa-chevron-right"></i>
            </span>
          </div>
          
        </div>
      </div>
      <div class="container1">
        <div class="text">
          <h1>Enjoy on your TV.</h1>
          <p>
            Watchx on Smart TVs, Playstation, Xbox, <br />
            Chromecast, Apple TV, Blu-ray players, and
            <br />
            more.
          </p>
        </div>
        <div class="image">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
        </div>
      </div>
      <div class="container1">
        <div class="image">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile.png" />
        </div>
        <div class="text">
          <h1>Download your shows to watch on the go.</h1>
          <p>Save your data and watch all your favorites offline.</p>
        </div>
      </div>
      <div class="container1">
        <div class="text">
          <h1>Watch everywhere.</h1>
          <p>
            Stream unlimited movies and TV shows on <br />
            your phone, tablet, laptop, and TV without paying more.
          </p>
        </div>
        <div class="image">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" />
        </div>
      </div>
      <div class="question">
        <h1>Frequently Asked Questions</h1>
        <div class="quest">
          <div class="textbox">What is Netflix?</div>
          <i class="las la-plus"></i>
        </div>
        <div class="quest">
          <div class="textbox">How much does Netflix cost?</div>
          <i class="las la-plus"></i>
        </div>
        <div class="quest">
          <div class="textbox">Where can I watch?</div>
          <i class="las la-plus"></i>
        </div>{" "}
        <div class="quest">
          <div class="textbox">How do I cancel?</div>
          <i class="las la-plus"></i>
        </div>
        <div class="quest">
          <div class="textbox">What can I watch on Netflix??</div>
          <i class="las la-plus"></i>
        </div>
        <div class="quest">
          <div class="textbox">What is Netflix?</div>
          <i class="las la-plus"></i>
        </div>
        <div class="search1">
          <input type="text" class="box1" placeholder="Email Address" />
          <span class="try1">
            Try 30 days free <i class="fas fa-chevron-right"></i>
          </span>
        </div>
        <h4>
          Ready to watch? Enter your email to create or access your account
        </h4>
      </div>
      <div class="footer">
        <div class="footercon">
          <div class="flex1">
            <h5>Questions? Call 1-866-579-7172</h5>
            <h5></h5>
          </div>

          <ul class="list1">
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Investor Relation</a>
            </li>
            <li>
              <a href="">Ways to Watch</a>
            </li>

            <li>
              <a href="">Corporate Information</a>
            </li>
            <li>
              <a href="">Netflix Originals</a>
            </li>
          </ul>
          <ul class="list1">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Jobs</a>
            </li>
            <li>
              <a href="">Terms of Use</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">#</a>
            </li>
          </ul>
          <ul class="list1">
            <li>
              <a href="">Account</a>
            </li>
            <li>
              <a href="">Redeem Gift Cards</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Speed Test</a>
            </li>
            <li>
              <a href="">#</a>
            </li>
          </ul>
          <ul class="list1">
            <li>
              <a href="">Media Center`{"<"}`</a>
            </li>
            <li>
              <a href="">Buy Gift Cards</a>
            </li>
            <li>
              <a href="">Cookie Preferences</a>
            </li>
            <li>
              <a href="">Legal Notices</a>
            </li>
            <li>
              <a href="">#</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="end">
        <h2>Netflix US</h2>
        {/* <h2></h2>{" "} */}
      </div>
    </div>
  );
}

export default home;
