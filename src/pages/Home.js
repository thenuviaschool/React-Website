import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Inspiring Excellence</h1>
          <p className="hero-subtitle">Building Character • Shaping Futures</p>
          <div className="hero-cta">
            <Link to="/admission" className="btn btn-primary">Apply for Admission</Link>
            <Link to="/timings" className="btn btn-outline">View Timings</Link>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="about section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">About Us</span>
            <h2 className="section-title">A Place Where Learning Meets Excellence</h2>
            <p className="section-subtitle">The Nuvia School and Academy is dedicated to providing high-quality education in a safe, disciplined, and nurturing environment.</p>
          </div>
          
          <div className="about-grid">
            <div className="about-card">
              <div className="card-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Quality Education</h3>
              <p>Comprehensive curriculum designed to develop confident, responsible, and academically strong students.</p>
            </div>
            
            <div className="about-card">
              <div className="card-icon">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <h3>Expert Faculty</h3>
              <p>Experienced and trained teachers committed to bringing out the best in every student.</p>
            </div>
            
            <div className="about-card">
              <div className="card-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Safe Environment</h3>
              <p>Secure campus with disciplined atmosphere ensuring students can focus on learning.</p>
            </div>
            
            <div className="about-card">
              <div className="card-icon">
                <i className="fas fa-hand-holding-usd"></i>
              </div>
              <h3>Affordable Fee</h3>
              <p>Quality education accessible to all with reasonable fee structure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="classes section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Programs</span>
            <h2 className="section-title">Classes Offered</h2>
            <p className="section-subtitle">From early learning to Matriculation</p>
          </div>
          
          <div className="classes-grid">
            <div className="class-card">
              <div className="class-image playgroup">
                <i className="fas fa-child"></i>
              </div>
              <div className="class-content">
                <h3>Play Group</h3>
                <p>Early childhood foundation through play-based learning.</p>
                <span className="class-age">Age 3-4 years</span>
              </div>
            </div>
            
            <div className="class-card">
              <div className="class-image nursery">
                <i className="fas fa-shapes"></i>
              </div>
              <div className="class-content">
                <h3>Nursery & Prep</h3>
                <p>Learning through activity-based curriculum.</p>
                <span className="class-age">Age 4-6 years</span>
              </div>
            </div>
            
            <div className="class-card">
              <div className="class-image primary">
                <i className="fas fa-book-open"></i>
              </div>
              <div className="class-content">
                <h3>Primary Classes</h3>
                <p>Classes 1-5 with strong foundation in all subjects.</p>
                <span className="class-age">Class 1-5</span>
              </div>
            </div>
            
            <div className="class-card">
              <div className="class-image middle">
                <i className="fas fa-school"></i>
              </div>
              <div className="class-content">
                <h3>Middle & Matric</h3>
                <p>Classes 6-10 preparing students for board exams.</p>
                <span className="class-age">Class 6-10</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section className="academy-section section-padding">
        <div className="container">
          <div className="academy-content">
            <div className="academy-text">
              <span className="section-tag">The Nuvia Academy</span>
              <h2 className="section-title">Evening Academic Programs</h2>
              <p>Comprehensive evening academy for students needing extra support or advanced learning.</p>
              <ul className="academy-features">
                <li><i className="fas fa-check-circle"></i> Monday to Saturday classes</li>
                <li><i className="fas fa-check-circle"></i> All subjects covered</li>
                <li><i className="fas fa-check-circle"></i> Exam preparation focus</li>
                <li><i className="fas fa-check-circle"></i> Individual attention</li>
              </ul>
              <Link to="/timings" className="btn btn-primary">View Academy Timings</Link>
            </div>
            <div className="academy-visual">
              <div className="academy-stats">
                <div className="stat-item">
                  <span className="stat-number">6</span>
                  <span className="stat-label">Days a Week</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">4</span>
                  <span className="stat-label">Hours Daily</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join The Nuvia School and Academy today.</p>
            <div className="cta-buttons">
              <Link to="/admission" className="btn btn-white">Apply Now</Link>
              <Link to="/contact" className="btn btn-outline-white">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;