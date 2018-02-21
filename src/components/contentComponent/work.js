import React, { Component } from 'react';


class Work extends Component {
  render() {
    return (
      <div className="container-fluid text-center contentHeight" id="work">
        <h1>Client Work</h1>
        <div className="container ">
          <div className="content">
              <div className="content-overlay__M"></div>
              <img className="content-image" src="../images/misty.png"/>
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">Misty Robotics</h3>
                <p className="content-text">C# | Xamarin | iOS</p>
              </div>
          </div>
        </div>

        <div className="container ">
          <div className="content">
              <div className="content-overlay__R"></div>
              <img className="content-image" src="../images/channelRocket.png"/>
              <div className="content-details fadeIn-bottom">
                <h3>Channel Rocket</h3>
                <p>Ruby on Rails | Angular | MySql</p>
              </div>
          </div>
        </div>

        <div className="container ">
          <div className="content">
              <div className="content-overlay__Z"></div>
              <img className="content-image" src="../images/zayo.png"/>
              <div className="content-details fadeIn-bottom">
                <h3>Zayo Group</h3>
                <p>Apex | Salesforce | Javascript</p>
              </div>
          </div>
        </div>

        <div className="container">
          <div className="content">
              <div className="content-overlay__C"></div>
              <img className="content-image" src="../images/comptia.png"/>
              <div className="content-details fadeIn-top">
                <h3>Comptia</h3>
                <p>Angular | Javascript </p>
              </div>
          </div>
        </div>

        <div className="container">
          <div className="content">
              <div className="content-overlay__H"></div>
              <img className="content-image" src="../images/hva.png"/>
              <div className="content-details fadeIn-top">
                <h3>Homevestors of America</h3>
                <p>C# | Angular | ASP.Net</p>
              </div>
          </div>
        </div>

        <div className="container">
          <div className="content">
              <div className="content-overlay__I"></div>
              <img className="content-image" src="../images/inx.png"/>
              <div className="content-details fadeIn-top">
                <h3>Inxathlete</h3>
                <p>WordPress | Javascript</p>
              </div>
          </div>
        </div>



      </div>
    );
  }
}

export default Work;
