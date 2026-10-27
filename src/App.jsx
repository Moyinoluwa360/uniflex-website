import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  
  return (
    <>
      {/* ── Navbar ──────────────────────────────────────────── */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#" className="navbar-logo">Uniflex</a>
          <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
            <li><a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
            <li><a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a></li>
            <li><a href="#download" className="navbar-cta" onClick={() => setMenuOpen(false)}>Coming Soon</a></li>
          </ul>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '\u2715' : '\u2630'}
          </button>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />

        <div className="container">
          <div className="hero-content">
            <div className="hero-badge animate-in">
              <span className="hero-badge-dot" />
              Coming soon
            </div>

            <h1 className="hero-title animate-in delay-1">
              Campus life,{' '}
              <span className="highlight">delivered.</span>
            </h1>

            <p className="hero-subtitle animate-in delay-2">
              Soon you&rsquo;ll be able to order food from your favourite vendors, send errands across campus,
              and track everything in real time — all from one app built for students.
            </p>

            <div className="hero-actions animate-in delay-3">
              <a href="#download" className="btn-primary">
                Get notified
                <span>&#8594;</span>
              </a>
              <a href="#features" className="btn-secondary">
                See Features
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <PhoneMockup />

            <div className="float-card float-card-1">
              <div className="float-icon" style={{ background: 'rgba(16,185,129,0.12)' }}>
                &#x2714;
              </div>
              <div>
                <div className="float-text">Order Delivered</div>
                <div className="float-sub">2 mins ago</div>
              </div>
            </div>

            <div className="float-card float-card-2">
              <div className="float-icon" style={{ background: 'rgba(249,115,22,0.12)' }}>
                &#x1F6F5;
              </div>
              <div>
                <div className="float-text">Rider en route</div>
                <div className="float-sub">ETA 5 mins</div>
              </div>
            </div>

            <div className="float-card float-card-3">
              <div className="float-icon" style={{ background: 'rgba(124,58,237,0.12)' }}>
                &#x1F4E6;
              </div>
              <div>
                <div className="float-text">Errand picked up</div>
                <div className="float-sub">Just now</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────── */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-label">
            <span className="section-label-line" />
            Features
          </div>
          <h2 className="section-title">Everything campus life needs, in one place</h2>
          <p className="section-subtitle">
            Built for the way students actually live — fast food, quick errands, and zero hassle.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'rgba(16,185,129,0.1)' }}>
                &#x1F354;
              </div>
              <h3>Food Ordering</h3>
              <p>Browse menus from campus vendors and partner restaurants. Customize your order and pay seamlessly.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'rgba(249,115,22,0.1)' }}>
                &#x1F4CD;
              </div>
              <h3>Real-Time Tracking</h3>
              <p>Watch your order move from kitchen to your door. Live status updates at every step of the way.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'rgba(124,58,237,0.1)' }}>
                &#x1F3C3;
              </div>
              <h3>Around Errands</h3>
              <p>Need something picked up or delivered around campus? Post an errand and a rider handles it.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'rgba(59,130,246,0.1)' }}>
                &#x1F4B3;
              </div>
              <h3>Wallet &amp; Payments</h3>
              <p>Fund your wallet once, pay instantly. No card details every time — just tap and go.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'rgba(245,158,11,0.1)' }}>
                &#x1F91D;
              </div>
              <h3>Group Orders</h3>
              <p>Ordering with friends? Create a group, split the bill, and get everything delivered together.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'rgba(220,38,38,0.1)' }}>
                &#x1F514;
              </div>
              <h3>Push Notifications</h3>
              <p>Stay in the loop — get notified when your food is ready, your rider is close, or your errand is done.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ────────────────────────────────────── */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <div className="section-label">
            <span className="section-label-line" />
            How It Works
          </div>
          <h2 className="section-title">Three steps to your door</h2>
          <p className="section-subtitle">
            From craving to delivery in minutes. Here&rsquo;s how it works.
          </p>

          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Browse &amp; Order</h3>
              <p>Pick from campus vendors or post an errand. Customise, add to cart, and checkout with your wallet.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>We Prepare &amp; Dispatch</h3>
              <p>The kitchen gets cooking and a rider is assigned. Track everything live from your dashboard.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Delivered to You</h3>
              <p>Your rider arrives, you confirm with a PIN, and you&rsquo;re good to go. That simple.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────────── */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-card">
            <div className="contact-intro">
              <div className="section-label">
                <span className="section-label-line" />
                Contact Us
              </div>
              <h2 className="contact-title">We&rsquo;re here to help.</h2>
              <p className="contact-subtitle">
                Have a question about Uniflex or want to learn more about our campus delivery service?
                Reach out to our team.
              </p>
            </div>

            <div className="contact-details">
              <a className="contact-detail" href="tel:+2349160556368">
                <span className="contact-detail-icon">&#x260E;</span>
                <span>
                  <span className="contact-detail-label">Call us</span>
                  <span className="contact-detail-value">+234 916 055 6368</span>
                </span>
              </a>
              <div className="contact-detail">
                <span className="contact-detail-icon">&#x2316;</span>
                <span>
                  <span className="contact-detail-label">Visit us</span>
                  <span className="contact-detail-value">P.M.B 230, EDE OFF GBONGAN – OSOGBO RD., OSOGBO, OSUN STATE, NIGERIA</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA / Download ──────────────────────────────────── */}
      <section className="cta-section" id="download">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">Campus delivery is coming</h2>
            <p className="cta-subtitle">
              Uniflex is coming soon. Be the first to know when smarter campus delivery is ready for you.
            </p>
            <div className="cta-actions">
              <a href="#" className="store-btn">
                <span className="store-btn-icon">&#x1F4F1;</span>
                <div className="store-btn-text">
                  <span className="store-btn-label">Coming soon to the</span>
                  <span className="store-btn-name">App Store</span>
                </div>
              </a>
              <a href="#" className="store-btn">
                <span className="store-btn-icon">&#x25B6;</span>
                <div className="store-btn-text">
                  <span className="store-btn-label">Coming soon to</span>
                  <span className="store-btn-name">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-brand">
            <span className="footer-logo">Uniflex</span>
            <span className="footer-text">&copy; {new Date().getFullYear()} Uniflex. All rights reserved.</span>
          </div>
          <div className="footer-contact">
            <span className="footer-contact-label">Contact</span>
            <a href="tel:+2349160556368">+234 916 055 6368</a>
            <span>P.M.B 230, EDE OFF GBONGAN – OSOGBO RD., OSOGBO, OSUN STATE, NIGERIA</span>
          </div>
          <ul className="footer-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms</Link></li>
            <li><Link to="/delete-account">Delete Account</Link></li>
          </ul>
        </div>
      </footer>
    </>
  )
}

function PhoneMockup() {
  return (
    <div className="phone-mockup">
      <div className="phone-screen">
        <div className="phone-notch" />
        <div className="phone-app-content">
          <div>
            <div className="phone-greeting">Good afternoon</div>
            <div className="phone-greeting-sub">What are you craving?</div>
          </div>

          <div className="phone-search">
            &#x1F50D;&ensp;Search vendors or dishes...
          </div>

          <div className="phone-card">
            <div className="phone-card-header">
              <span className="phone-card-title">Near You</span>
              <span className="phone-card-badge">Open</span>
            </div>

            <div className="phone-vendor-row">
              <div className="phone-vendor-avatar" style={{ background: 'rgba(249,115,22,0.12)' }}>
                &#x1F525;
              </div>
              <div className="phone-vendor-info">
                <div className="phone-vendor-name">Mama&rsquo;s Kitchen</div>
                <div className="phone-vendor-meta">15-20 min</div>
              </div>
              <span className="phone-vendor-price">&#x20A6;800</span>
            </div>

            <div className="phone-vendor-row">
              <div className="phone-vendor-avatar" style={{ background: 'rgba(16,185,129,0.12)' }}>
                &#x1F96A;
              </div>
              <div className="phone-vendor-info">
                <div className="phone-vendor-name">Shawarma Spot</div>
                <div className="phone-vendor-meta">10-15 min</div>
              </div>
              <span className="phone-vendor-price">&#x20A6;1,500</span>
            </div>

            <div className="phone-vendor-row">
              <div className="phone-vendor-avatar" style={{ background: 'rgba(124,58,237,0.12)' }}>
                &#x1F35C;
              </div>
              <div className="phone-vendor-info">
                <div className="phone-vendor-name">Noodle Box</div>
                <div className="phone-vendor-meta">20-25 min</div>
              </div>
              <span className="phone-vendor-price">&#x20A6;1,200</span>
            </div>
          </div>
        </div>

        <div className="phone-nav">
          <div className="phone-nav-item active">
            <span className="phone-nav-icon">&#x1F3E0;</span>
            Home
          </div>
          <div className="phone-nav-item">
            <span className="phone-nav-icon">&#x1F50D;</span>
            Search
          </div>
          <div className="phone-nav-item">
            <span className="phone-nav-icon">&#x1F4CB;</span>
            Orders
          </div>
          <div className="phone-nav-item">
            <span className="phone-nav-icon">&#x1F464;</span>
            Profile
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
