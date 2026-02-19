import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    { id: 1, category: 'campus', title: 'School Building', desc: 'Main Campus', icon: 'fa-school' },
    { id: 2, category: 'events', title: 'Annual Day', desc: '2025 Celebration', icon: 'fa-calendar-star' },
    { id: 3, category: 'activities', title: 'Art Competition', desc: 'Creative Expression', icon: 'fa-palette' },
    { id: 4, category: 'campus', title: 'Classroom', desc: 'Modern Facilities', icon: 'fa-chalkboard' },
    { id: 5, category: 'awards', title: 'Prize Distribution', desc: 'Achievement Awards', icon: 'fa-trophy' },
    { id: 6, category: 'activities', title: 'Sports Day', desc: 'Athletic Events', icon: 'fa-running' },
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Gallery</h1>
          <div className="breadcrumb">
            <span>Home</span>
            <span>/</span>
            <span>Gallery</span>
          </div>
        </div>
      </section>

      <section className="gallery-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Memories</span>
            <h2 className="section-title">School Gallery</h2>
            <p className="section-subtitle">Glimpses of life at The Nuvia School</p>
          </div>
          
          <div className="gallery-filter">
            {['all', 'campus', 'events', 'activities', 'awards'].map(cat => (
              <button 
                key={cat}
                className={filter === cat ? 'active' : ''} 
                onClick={() => setFilter(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="gallery-grid">
            {filteredItems.map(item => (
              <div key={item.id} className="gallery-item">
                <div className={`gallery-image ${item.category}`}>
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <div className="gallery-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;