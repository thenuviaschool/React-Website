import React, { useState } from 'react';
import { schoolTimings, academyTimings } from '../data/timingsData';
import './Timings.css';

function Timings() {
  const [schoolTab, setSchoolTab] = useState('ramadan');
  const [academyTab, setAcademyTab] = useState('ramadan');

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>School Timings</h1>
          <div className="breadcrumb">
            <span>Home</span>
            <span>/</span>
            <span>Timings</span>
          </div>
        </div>
      </section>

      <section className="timing-banner">
        <div className="container">
          <div className="status-alert">
            <i className="fas fa-moon"></i>
            <div className="alert-content">
              <h3>Ramadan Kareem</h3>
              <p>Special timings are currently in effect for the holy month of Ramadan.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="timings-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">School Hours</span>
            <h2 className="section-title">The Nuvia School Timings</h2>
            <p className="section-subtitle">Monday to Friday</p>
          </div>
          
          <div className="timing-table-container">
            <div className="table-tabs">
              <button 
                className={schoolTab === 'ramadan' ? 'active' : ''} 
                onClick={() => setSchoolTab('ramadan')}
              >
                <i className="fas fa-moon"></i> Ramadan Timings
              </button>
              <button 
                className={schoolTab === 'regular' ? 'active' : ''} 
                onClick={() => setSchoolTab('regular')}
              >
                <i className="fas fa-sun"></i> Regular Timings
              </button>
            </div>
            
            <div className="timings-content">
              <div className="timing-description">
                <h4><i className="fas fa-info-circle"></i> About These Timings</h4>
                <p>
                  {schoolTab === 'ramadan' 
                    ? 'During the holy month of Ramadan, school timings are adjusted to accommodate fasting students and staff.'
                    : 'Regular school timings applicable throughout the academic year (Monday to Friday).'}
                </p>
              </div>
              <table className="timing-table">
                <thead>
                  <tr>
                    <th>Class/Program</th>
                    <th>Days</th>
                    <th>Opening Time</th>
                    <th>Closing Time</th>
                  </tr>
                </thead>
                <tbody>
                  {schoolTimings[schoolTab].map((t, index) => (
                    <tr key={index}>
                      <td>
                        <strong>{t.class}</strong>
                        {t.note && <span className="class-badge">{t.note}</span>}
                      </td>
                      <td>{t.days}</td>
                      <td><span className="time-badge">{t.open}</span></td>
                      <td><span className="time-badge">{t.close}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="timings-section section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Academy Hours</span>
            <h2 className="section-title">The Nuvia Academy Timings</h2>
            <p className="section-subtitle">Monday to Saturday</p>
          </div>
          
          <div className="timing-table-container">
            <div className="table-tabs">
              <button 
                className={academyTab === 'ramadan' ? 'active' : ''} 
                onClick={() => setAcademyTab('ramadan')}
              >
                <i className="fas fa-moon"></i> Ramadan Timings
              </button>
              <button 
                className={academyTab === 'regular' ? 'active' : ''} 
                onClick={() => setAcademyTab('regular')}
              >
                <i className="fas fa-sun"></i> Regular Timings
              </button>
            </div>
            
            <div className="timings-content">
              <div className="timing-description">
                <h4><i className="fas fa-info-circle"></i> About These Timings</h4>
                <p>
                  {academyTab === 'ramadan'
                    ? 'Academy operates with reduced hours during Ramadan to accommodate evening prayers and iftar.'
                    : 'Regular academy hours with extended time for comprehensive coverage of all subjects.'}
                </p>
              </div>
              <table className="timing-table">
                <thead>
                  <tr>
                    <th>Program</th>
                    <th>Days</th>
                    <th>Opening Time</th>
                    <th>Closing Time</th>
                  </tr>
                </thead>
                <tbody>
                  {academyTimings[academyTab].map((t, index) => (
                    <tr key={index}>
                      <td><strong>{t.program}</strong></td>
                      <td>{t.days}</td>
                      <td><span className="time-badge">{t.open}</span></td>
                      <td><span className="time-badge">{t.close}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="timing-notes section-padding">
        <div className="container">
          <div className="notes-grid">
            <div className="note-card">
              <i className="fas fa-door-open"></i>
              <h3>Gate Closing</h3>
              <p>School gates close 15 minutes after assembly. Late arrivals must report to the office.</p>
            </div>
            
            <div className="note-card">
              <i className="fas fa-user-clock"></i>
              <h3>Pickup Time</h3>
              <p>Parents must pick up children within 15 minutes of dismissal time.</p>
            </div>
            
            <div className="note-card">
              <i className="fas fa-phone-alt"></i>
              <h3>Early Leave</h3>
              <p>Early departure requires written permission or phone call from parents.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Timings;