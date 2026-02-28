import { useRef } from 'react'
import QRCode from 'react-qr-code'
import { Link } from 'react-router-dom'

const PORTFOLIO_URL = typeof window !== 'undefined'
  ? window.location.origin
  : 'https://aadilhannan.bloocube.com'

export default function QRCodePage() {
  const qrRef = useRef()

  const downloadQRCode = () => {
    const svg = qrRef.current?.querySelector('svg')
    if (!svg) return
    const svgData = new XMLSerializer().serializeToString(svg)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)
      URL.revokeObjectURL(url)
      const link = document.createElement('a')
      link.download = 'aadil-hannan-portfolio-qr.png'
      link.href = canvas.toDataURL('image/png')
      link.click()
    }
    img.src = url
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(PORTFOLIO_URL)
    alert('Portfolio URL copied to clipboard!')
  }

  return (
    <div className="qr-page-wrapper">
      {/* Header */}
      <div className="qr-page-header">
        <Link to="/" className="qr-back-btn">← Back to Portfolio</Link>
        <div className="qr-header-brand">
          <span className="nav-logo">B</span>
          <span>Bloocube</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="qr-page-main">
        <div className="qr-page-card">
          {/* Profile info */}
          <div className="qr-profile-header">
            <div className="qr-avatar">AH</div>
            <div>
              <h2 className="qr-profile-name">Aadil Hannan</h2>
              <p className="qr-profile-title">Founder & MD · Bloocube</p>
              <p className="qr-profile-location">📍 New Delhi, India</p>
            </div>
          </div>

          <div className="qr-divider"></div>

          {/* QR Code */}
          <div className="qr-page-section">
            <h1 className="qr-page-title">Portfolio QR Code</h1>
            <p className="qr-page-subtitle">Scan to open the portfolio instantly on any device</p>

            <div className="qr-display-box" ref={qrRef}>
              <div className="qr-inner-frame">
                <QRCode
                  value={PORTFOLIO_URL}
                  size={280}
                  level="H"
                  fgColor="#1a237e"
                  bgColor="#ffffff"
                />
              </div>
              <div className="qr-label-box">
                <span className="qr-label-logo">B</span>
                <span className="qr-label-text">Scan with your camera app</span>
              </div>
            </div>

            {/* URL display */}
            <div className="qr-url-card">
              <span className="qr-url-label">Portfolio URL</span>
              <code className="qr-url-value">{PORTFOLIO_URL}</code>
            </div>

            {/* Action buttons */}
            <div className="qr-action-btns">
              <button onClick={downloadQRCode} className="cta-primary">
                📥 Download QR Code
              </button>
              <button onClick={copyToClipboard} className="cta-secondary">
                📋 Copy URL
              </button>
            </div>
          </div>

          <div className="qr-divider"></div>

          {/* Info */}
          <div className="qr-info-section">
            <h3>About This QR Code</h3>
            <ul className="qr-info-list">
              <li>🔒 Links directly to the portfolio website</li>
              <li>📱 Works with all smartphone cameras</li>
              <li>⚡ Instant access — no app required</li>
              <li>💾 Download and print for business cards or events</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="qr-page-footer">
        <p>Aadil Hannan · Founder, Bloocube · New Delhi, India</p>
        <p>+91-9798383898 · www.bloocube.com</p>
      </footer>
    </div>
  )
}
