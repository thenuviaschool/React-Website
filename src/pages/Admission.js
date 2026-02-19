import React from 'react';
import './Admission.css';

function Admission() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Admission</h1>
          <div className="breadcrumb">
            <span>Home</span>
            <span>/</span>
            <span>Admission</span>
          </div>
        </div>
      </section>

      <section className="admission-process section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Join Us</span>
            <h2 className="section-title">Admission Process</h2>
            <p className="section-subtitle">Simple steps to enroll your child</p>
          </div>
          
          <div className="process-steps">
            <div className="step-card">
              <div className="step-number">01</div>
              <div className="step-icon">
                <i className="fas fa-download"></i>
              </div>
              <h3>Download Form</h3>
              <p>Download the admission form or collect it from school office</p>
            </div>
            
            <div className="step-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            
            <div className="step-card">
              <div className="step-number">02</div>
              <div className="step-icon">
                <i className="fas fa-edit"></i>
              </div>
              <h3>Fill & Attach</h3>
              <p>Complete the form and attach required documents</p>
            </div>
            
            <div className="step-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            
            <div className="step-card">
              <div className="step-number">03</div>
              <div className="step-icon">
                <i className="fas fa-building"></i>
              </div>
              <h3>Submit</h3>
              <p>Submit form at school office with admission fee</p>
            </div>
            
            <div className="step-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            
            <div className="step-card">
              <div className="step-number">04</div>
              <div className="step-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3>Confirmation</h3>
              <p>Receive confirmation and join The Nuvia family</p>
            </div>
          </div>
        </div>
      </section>

      <section className="download-section section-padding bg-light">
  <div className="container">
    <div className="download-card">
      <div className="download-icon">
        <i className="fas fa-file-pdf"></i>
      </div>
      <h2>Download Admission Form</h2>
      <p>Get the admission form in PDF format. Print it, fill it out, and submit it to the school office with the required documents.</p>
      
      {/* PDF Download Link */}
      <a 
        href="/downloads/admission-form.pdf" 
        download="The-Nuvia-School-Admission-Form.pdf"
        className="btn btn-primary btn-large"
      >
        <i className="fas fa-download"></i> Download Form (PDF)
      </a>
      
      <div className="download-info">
        <span><i className="fas fa-info-circle"></i> File size: 245 KB</span>
        <span><i className="fas fa-calendar"></i> Updated: Jan 2026</span>
      </div>
    </div>
  </div>
</section>

      <section className="requirements section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Documents</span>
            <h2 className="section-title">Required Documents</h2>
          </div>
          
          <div className="requirements-grid">
            <div className="requirement-card">
              <i className="fas fa-id-card"></i>
              <h3>B-Form/CNIC</h3>
              <p>Copy of student's B-Form or CNIC</p>
            </div>
            
            <div className="requirement-card">
              <i className="fas fa-images"></i>
              <h3>Photographs</h3>
              <p>4 recent passport size photographs</p>
            </div>
            
            <div className="requirement-card">
              <i className="fas fa-certificate"></i>
              <h3>Previous Records</h3>
              <p>School leaving certificate and marksheet</p>
            </div>
            
            <div className="requirement-card">
              <i className="fas fa-file-medical"></i>
              <h3>Medical Certificate</h3>
              <p>Medical fitness certificate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="fee-section section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Affordable</span>
            <h2 className="section-title">Fee Structure</h2>
          </div>
          
          <div className="fee-cards">
            <div className="fee-card">
              <div className="fee-header">
                <h3>Play Group - Prep</h3>
                <div className="fee-amount">Rs. 3,500<span>/month</span></div>
              </div>
              <ul className="fee-features">
                <li><i className="fas fa-check"></i> School Fee</li>
                <li><i className="fas fa-check"></i> Tuition Fee</li>
                <li><i className="fas fa-check"></i> Activity Material</li>
                <li><i className="fas fa-check"></i> Assessment Reports</li>
              </ul>
            </div>
            
            <div className="fee-card featured">
              <div className="fee-header">
                <h3>Class 1 - 5</h3>
                <div className="fee-amount">Rs. 3,000<span>/month</span></div>
              </div>
              <ul className="fee-features">
                <li><i className="fas fa-check"></i> School Fee</li>
                <li><i className="fas fa-check"></i> Tuition Fee</li>
                <li><i className="fas fa-check"></i> Computer Classes</li>
                <li><i className="fas fa-check"></i> Sports Activities</li>
              </ul>
            </div>
            
            <div className="fee-card">
              <div className="fee-header">
                <h3>Class 6 - 10</h3>
                <div className="fee-amount">Rs. 4,000<span>/month</span></div>
              </div>
              <ul className="fee-features">
                <li><i className="fas fa-check"></i> School Fee</li>
                <li><i className="fas fa-check"></i> Tuition Fee</li>
                <li><i className="fas fa-check"></i> Computer Classes</li>
                <li><i className="fas fa-check"></i> Exam Preparation</li>
              </ul>
            </div>
          </div>
          
          <div className="fee-note">
            <i className="fas fa-info-circle"></i>
            <p>Admission fee: Rs. 2,000 (one-time)</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Admission;