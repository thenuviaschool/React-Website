import React, { useState, useEffect } from 'react';
import { notificationsData } from '../data/notificationsData';
import './Notifications.css';

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setNotifications(notificationsData);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Notifications</h1>
          <div className="breadcrumb">
            <span>Home</span>
            <span>/</span>
            <span>Notifications</span>
          </div>
        </div>
      </section>

      <section className="notifications-page section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Stay Updated</span>
            <h2 className="section-title">Latest Announcements</h2>
            <p className="section-subtitle">Important updates and information</p>
          </div>
          
          <div className="notifications-list">
            {loading ? (
              <div className="loading">
                <i className="fas fa-spinner fa-spin"></i>
                <p>Loading notifications...</p>
              </div>
            ) : (
              notifications.map(note => (
                <div key={note.id} className={`notification-item ${note.priority}`}>
                  <span className="notification-date">
                    <i className="far fa-calendar-alt"></i> {note.date}
                  </span>
                  <h3>{note.title}</h3>
                  <p>{note.message}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Notifications;