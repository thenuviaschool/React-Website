import React from 'react';
import './Locate.css';

function Locate() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Locate Us</h1>
          <div className="breadcrumb">
            <span>Home</span>
            <span>/</span>
            <span>Location</span>
          </div>
        </div>
      </section>

      <section className="location-section section-padding">
        <div className="container">
          <div className="location-grid">
            <div className="location-info">
              <div className="section-header left-align">
                <span className="section-tag">Find Us</span>
                <h2 className="section-title">School Location</h2>
                <p>We are located in the heart of Shadipura, easily accessible from all parts of Lahore.</p>
              </div>
              
              <div className="address-card">
                <div className="address-icon">
                  <i className="fas fa-school"></i>
                </div>
                <div className="address-content">
                  <h3>The Nuvia School and Academy</h3>
                  <p className="address-text">
                    Near Jumairat Bazar,<br/>
                    Najam Park,<br/>
                    Shadipura,<br/>
                    Lahore, Pakistan
                  </p>
                  <div className="address-contact">
                    <p><i className="fas fa-phone"></i> 0324-8843622</p>
                    <p><i className="fas fa-envelope"></i> thenuviaschool@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="landmarks">
                <h4>Nearby Landmarks</h4>
                <ul>
                  <li><i className="fas fa-map-pin"></i> Jumairat Bazar Shadipura</li>
                  <li><i className="fas fa-map-pin"></i> Najam Park</li>
                    <li><i className="fas fa-map-pin"></i> Rice Sheller</li>
                </ul>
              </div>
              
              <a 
                href="https://maps.app.goo.gl/txv7FmmHkwg7UtgM8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-large"
              >
                <i className="fas fa-directions"></i> Get Directions
              </a>
            </div>
            
            <div className="map-container">
              <div className="map-wrapper">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.235934701371!2d74.40400190906264!3d31.599994274069893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919112d910a2769%3A0x257e679cc495a66c!2sThe%20Nuvia%20School!5e0!3m2!1sen!2s!4v1771506684887!5m2!1sen!2s"
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location"
                ></iframe>
              </div>
              <div className="map-note">
                <i className="fas fa-info-circle"></i>
                <p>Click on the map to open in Google Maps for navigation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="transport-section section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Reach Us</span>
            <h2 className="section-title">How to Reach</h2>
          </div>
          
          <div className="transport-grid">
            <div className="transport-card">
              <div className="transport-icon">
                <i className="fas fa-bus"></i>
              </div>
              <h3>By Orange Line Train</h3>
              <p>Take Orange Line Train going to Mehmood Booti. Get off at Mehmood Booti Station. Take a Rikshaw to Shadipura. School is 5 minutes walk.</p>
            </div>
            
            <div className="transport-card">
              <div className="transport-icon">
                <i className="fas fa-car"></i>
              </div>
              <h3>By Car</h3>
              <p>From Daroghawala Chowk Lahore, turn towards Shadipura. Follow road to Jumairat Bazar.</p>
            </div>
            
            <div className="transport-card">
              <div className="transport-icon">
                <i className="fas fa-motorcycle"></i>
              </div>
              <h3>By Bike/Rickshaw</h3>
              <p>Ask for "Nuvia School near Jumairat Bazar Shadipura".</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Locate;