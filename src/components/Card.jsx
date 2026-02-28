import { useState, useRef } from 'react'
import QRCode from 'qrcode.react'
import { Link } from 'react-router-dom'

const PORTFOLIO_URL = typeof window !== 'undefined'
  ? window.location.origin
  : 'https://aadilhannan.bloocube.com'

export default function Card() {
  const [showQR, setShowQR] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const qrRef = useRef()

  const profile = {
    name: 'Aadil Hannan',
    title: 'Founder & Managing Director',
    company: 'Bloocube',
    tagline: 'Building a SaaS Powerhouse | Digital Marketing | Esports | Web3',
    location: 'New Delhi, Delhi, India',
    phone: '+91-9798383898',
    website: 'www.bloocube.com',
    linkedin: 'https://www.linkedin.com/in/aadil-hannan/',
    connections: '500+',
    bio: "Hi, I'm Aadil Hannan — a startup builder, storyteller, and currently the founder of Bloocube, an AI-powered influencer marketplace helping nano/micro creators and early-stage startups grow together. My passion lies in solving real-world problems with scalable, tech-first solutions — and building communities that create lasting impact.",
    skills: ['Startup Building', 'Digital Marketing', 'SaaS', 'Web3', 'Influencer Marketing', 'Esports', 'Content Strategy', 'Growth Hacking'],
  }

  const product = {
    name: 'Bloocube',
    tagline: 'Create content. Manage social. Run influencer marketing.',
    description: 'Bloocube is an AI-powered influencer marketplace that connects nano/micro creators with early-stage startups. We help brands scale their reach and creators monetize their influence through data-driven campaigns and seamless collaboration tools.',
    features: [
      { icon: '🤖', title: 'AI-Powered Matching', desc: 'Smart algorithms connect the right creators with the right brands for maximum campaign impact.' },
      { icon: '📊', title: 'Social Management', desc: 'Unified dashboard to manage all your social media channels, content, and analytics in one place.' },
      { icon: '🎯', title: 'Influencer Marketing', desc: 'End-to-end campaign management from creator discovery to performance tracking and payments.' },
      { icon: '🌐', title: 'Web3 Ready', desc: 'Next-generation creator economy tools with blockchain-backed transparency and micro-transactions.' },
    ],
    stats: [
      { value: '500+', label: 'Creator Network' },
      { value: '50+', label: 'Brand Partners' },
      { value: '3x', label: 'Avg. ROI' },
    ]
  }

  const downloadQR = () => {
    const canvas = qrRef.current?.querySelector('canvas')
    if (!canvas) return
    const link = document.createElement('a')
    link.href = canvas.toDataURL('image/png')
    link.download = 'aadil-hannan-portfolio-qr.png'
    link.click()
  }

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-brand">
          <span className="nav-logo">B</span>
          <span className="nav-name">Bloocube</span>
        </div>
        <div className="nav-links">
          <a href="#about" onClick={() => setActiveSection('about')}>About</a>
          <a href="#product" onClick={() => setActiveSection('product')}>Product</a>
          <a href="#contact" onClick={() => setActiveSection('contact')}>Contact</a>
          <Link to="/qr" className="nav-qr-btn">QR Code</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="hero-content">
          <div className="hero-avatar">
            <div className="avatar-ring">
              <div className="avatar-initials">AH</div>
            </div>
          </div>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-title">{profile.title} <span className="hero-company">@ {profile.company}</span></p>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-badges">
            <span className="badge badge-location">📍 {profile.location}</span>
            <span className="badge badge-connections">🔗 {profile.connections} connections</span>
          </div>
          <div className="hero-ctas">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="cta-primary">
              Connect on LinkedIn
            </a>
            <a href={`tel:${profile.phone}`} className="cta-secondary">
              📞 Call Now
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="about">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Who I Am</span>
            <h2 className="section-title">About Me</h2>
          </div>
          <div className="about-grid">
            <div className="about-bio">
              <p>{profile.bio}</p>
            </div>
            <div className="about-details">
              <div className="detail-card">
                <div className="detail-icon">📱</div>
                <div>
                  <div className="detail-label">Phone</div>
                  <a href={`tel:${profile.phone}`} className="detail-value link">{profile.phone}</a>
                </div>
              </div>
              <div className="detail-card">
                <div className="detail-icon">🌐</div>
                <div>
                  <div className="detail-label">Website</div>
                  <a href={`https://${profile.website}`} target="_blank" rel="noopener noreferrer" className="detail-value link">{profile.website}</a>
                </div>
              </div>
              <div className="detail-card">
                <div className="detail-icon">📍</div>
                <div>
                  <div className="detail-label">Location</div>
                  <div className="detail-value">{profile.location}</div>
                </div>
              </div>
              <div className="detail-card">
                <div className="detail-icon">💼</div>
                <div>
                  <div className="detail-label">LinkedIn</div>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="detail-value link">aadil-hannan</a>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="skills-section">
            <h3 className="skills-title">Expertise</h3>
            <div className="skills-grid">
              {profile.skills.map((skill, i) => (
                <span key={i} className="skill-chip">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="section section-dark" id="product">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label light">Our Product</span>
            <h2 className="section-title light">{product.name}</h2>
            <p className="section-subtitle light">{product.tagline}</p>
          </div>

          <div className="product-desc">{product.description}</div>

          {/* Stats */}
          <div className="stats-row">
            {product.stats.map((stat, i) => (
              <div key={i} className="stat-box">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="features-grid">
            {product.features.map((feature, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="product-cta">
            <a href={`https://${profile.website}`} target="_blank" rel="noopener noreferrer" className="cta-primary">
              Visit Bloocube →
            </a>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="section" id="qr">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Share</span>
            <h2 className="section-title">My Portfolio QR</h2>
            <p className="section-subtitle-light">Scan to open this portfolio on any device</p>
          </div>
          <div className="qr-center">
            {showQR ? (
              <div className="qr-panel" ref={qrRef}>
                <div className="qr-frame">
                  <QRCode
                    value={PORTFOLIO_URL}
                    size={220}
                    level="H"
                    includeMargin={true}
                    fgColor="#1a237e"
                    bgColor="#ffffff"
                  />
                </div>
                <p className="qr-url">{PORTFOLIO_URL}</p>
                <div className="qr-btns">
                  <button onClick={downloadQR} className="cta-primary small">📥 Download QR</button>
                  <button onClick={() => setShowQR(false)} className="cta-outline small">Hide</button>
                </div>
                <Link to="/qr" className="qr-full-link">View Full QR Page →</Link>
              </div>
            ) : (
              <div className="qr-placeholder" onClick={() => setShowQR(true)}>
                <div className="qr-placeholder-icon">⬛</div>
                <p className="qr-placeholder-text">Click to Generate QR Code</p>
                <button className="cta-primary">Generate QR Code</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section section-contact" id="contact">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label light">Get In Touch</span>
            <h2 className="section-title light">Contact</h2>
          </div>
          <div className="contact-grid">
            <a href={`tel:${profile.phone}`} className="contact-card">
              <span className="contact-icon">📞</span>
              <span className="contact-label">Phone</span>
              <span className="contact-value">{profile.phone}</span>
            </a>
            <a href={`https://${profile.website}`} target="_blank" rel="noopener noreferrer" className="contact-card">
              <span className="contact-icon">🌐</span>
              <span className="contact-label">Website</span>
              <span className="contact-value">{profile.website}</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card">
              <span className="contact-icon">💼</span>
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">Aadil Hannan</span>
            </a>
            <div className="contact-card">
              <span className="contact-icon">📍</span>
              <span className="contact-label">Location</span>
              <span className="contact-value">New Delhi, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-brand">
          <span className="nav-logo small">B</span>
          <span>Bloocube © {new Date().getFullYear()}</span>
        </div>
        <p className="footer-sub">Built by Aadil Hannan · New Delhi, India</p>
      </footer>
    </div>
  )
}
