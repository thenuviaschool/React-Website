import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Send Email via EmailJS
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      from_name: formData.name,
      from_phone: formData.phone,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email
    };

    // Replace with your EmailJS credentials
    emailjs.send(
      'service_hl55zik',      // e.g., 'service_abc123'
      'template_shqzz86',     // e.g., 'template_xyz789'
      templateParams,
      '_gT_4OVqqxlpJuMSp'       // e.g., 'user_1234567890abcdef'
    )
    .then((response) => {
      setStatus('success');
      setTimeout(() => {
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
        setStatus('');
      }, 3000);
    })
    .catch((error) => {
      console.error('Email error:', error);
      setStatus('error');
    });
  };

  // Open WhatsApp with pre-written message
  const openWhatsApp = () => {
    const whatsappMessage = `
*Assalam-o-Alaikum The Nuvia School*

I want to inquire about admission for my child.

*Parent Name:* ${formData.name || 'Not provided'}
*Phone:* ${formData.phone || 'Not provided'}
*Email:* ${formData.email || 'Not provided'}
*Subject:* ${formData.subject || 'Admission Inquiry'}

*Message:*
${formData.message || 'Please provide more information about admission process, fee structure, and available classes.'}

Please contact me at your earliest convenience.
JazakAllah Khair!
    `.trim();

    const whatsappNumber = '923248843622'; // Your WhatsApp number with country code
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
  };

  // Quick WhatsApp buttons with pre-written messages
  const quickWhatsApp = (type) => {
    let message = '';
    
    switch(type) {
      case 'admission':
        message = `*Assalam-o-Alaikum*

I am interested in getting admission for my child at The Nuvia School.

Please provide information about:
- Admission process
- Required documents
- Fee structure
- Available classes

*Contact:* ${formData.phone || 'Please provide my number'}

JazakAllah Khair!`;
        break;
      
      case 'fee':
        message = `*Assalam-o-Alaikum*

I want to inquire about the fee structure at The Nuvia School.

Please provide details about:
- Monthly tuition fees
- Admission charges
- Any other charges

*Contact:* ${formData.phone || 'Please provide my number'}

JazakAllah Khair!`;
        break;
      
      case 'timing':
        message = `*Assalam-o-Alaikum*

I want to know about school and academy timings.

Please confirm:
- School hours
- Academy hours
- Days of operation

*Contact:* ${formData.phone || 'Please provide my number'}

JazakAllah Khair!`;
        break;
      
      default:
        message = `*Assalam-o-Alaikum The Nuvia School*

I have a general inquiry.

Please contact me for more details.

*Contact:* ${formData.phone || 'Please provide my number'}

JazakAllah Khair!`;
    }

    const whatsappNumber = '923248843622';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <div className="breadcrumb">
            <span>Home</span>
            <span>/</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact Info */}
            <div className="contact-info">
              <div className="section-header left-align">
                <span className="section-tag">Get in Touch</span>
                <h2 className="section-title">Contact Information</h2>
                <p>Reach out to us for any queries or information.</p>
              </div>
              
              {/* Info Cards */}
              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="info-content">
                    <h4>Address</h4>
                    <p>Near Jumairat Bazar, Najam Park, Shadipura, Lahore</p>
                  </div>
                </div>
                
                <div className="info-card">
                  <div className="info-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="info-content">
                    <h4>Phone</h4>
                    <p>0324-8843622<br/>0301-0142701</p>
                  </div>
                </div>
                
                <div className="info-card">
                  <div className="info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="info-content">
                    <h4>Email</h4>
                    <p>thenuviaschool@gmail.com</p>
                  </div>
                </div>
                
                <div className="info-card">
                  <div className="info-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="info-content">
                    <h4>Office Hours</h4>
                    <p>Monday - Saturday<br/>8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
              
              {/* Quick WhatsApp Buttons */}
              <div className="quick-contact">
                <h4>Quick Contact via WhatsApp</h4>
                <div className="quick-buttons">
                  <button onClick={() => quickWhatsApp('admission')} className="btn btn-whatsapp">
                    <i className="fab fa-whatsapp"></i> Admission Inquiry
                  </button>
                  <button onClick={() => quickWhatsApp('fee')} className="btn btn-whatsapp">
                    <i className="fab fa-whatsapp"></i> Fee Structure
                  </button>
                  <button onClick={() => quickWhatsApp('timing')} className="btn btn-whatsapp">
                    <i className="fab fa-whatsapp"></i> Timings Info
                  </button>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="social-section">
                <h4>Follow Us</h4>
                <div className="social-links large">
                  <a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://wa.me/923248843622" target="_blank" rel="noopener noreferrer" className="whatsapp">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <div className="form-card">
                <h3>Send us a Message</h3>
                
                {/* Status Messages */}
                {status === 'sending' && (
                  <div className="status-message sending">
                    <i className="fas fa-spinner fa-spin"></i> Sending message...
                  </div>
                )}
                {status === 'success' && (
                  <div className="status-message success">
                    <i className="fas fa-check-circle"></i> Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="status-message error">
                    <i className="fas fa-exclamation-circle"></i> Failed to send. Please try again or use WhatsApp.
                  </div>
                )}
                
                <form onSubmit={sendEmail}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required 
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        required 
                        placeholder="03XX-XXXXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select 
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="">Select a subject</option>
                      <option value="Admission Inquiry">Admission Inquiry</option>
                      <option value="Fee Structure">Fee Structure</option>
                      <option value="General Information">General Information</option>
                      <option value="Complaint/Suggestion">Complaint/Suggestion</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows="5" 
                      required 
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  
                  {/* Submit Buttons */}
                  <div className="form-buttons">
                    <button 
                      type="submit" 
                      className="btn btn-primary btn-block"
                      disabled={status === 'sending'}
                    >
                      <i className="fas fa-paper-plane"></i> 
                      {status === 'sending' ? 'Sending...' : 'Send via Email'}
                    </button>
                    
                    <button 
                      type="button" 
                      onClick={openWhatsApp}
                      className="btn btn-whatsapp btn-block"
                    >
                      <i className="fab fa-whatsapp"></i> Send via WhatsApp
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;