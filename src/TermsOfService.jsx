import { Link } from 'react-router-dom'
import './Legal.css'

export default function TermsOfService() {
  return (
    <>
      <nav className="navbar scrolled">
        <div className="container">
          <Link to="/" className="navbar-logo">Uniflex</Link>
        </div>
      </nav>

      <section className="legal-page">
        <div className="container">
          <div className="legal-header">
            <h1 className="legal-title">Terms of Service</h1>
            <p className="legal-updated">Last updated: October 19, 2026</p>
          </div>

          <div className="legal-content">
            <p>
              Welcome to Uniflex. These Terms of Service ("Terms") govern your use of the
              Uniflex mobile application ("App") operated by Uniflex ("we", "our", or "us").
              By using the App, you agree to these Terms.
            </p>

            <h2>1. Eligibility</h2>
            <p>
              You must be at least 13 years old to use the App. By creating an account, you
              represent that you meet this age requirement and that all information you provide
              is accurate and truthful.
            </p>

            <h2>2. Account Registration</h2>
            <ul>
              <li>You must provide a valid phone number and verify it via SMS to create an account.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You are responsible for all activity that occurs under your account.</li>
              <li>You must not create multiple accounts or share your account with others.</li>
            </ul>

            <h2>3. Services</h2>
            <p>Uniflex provides a campus delivery platform that enables:</p>
            <ul>
              <li><strong>Food ordering:</strong> Browse campus vendor menus, place orders, and have food delivered to your location.</li>
              <li><strong>Errands:</strong> Request pick-up and delivery of items around campus.</li>
              <li><strong>Wallet:</strong> Fund your in-app wallet via Paystack to pay for orders and services.</li>
              <li><strong>Real-time tracking:</strong> Track the status and location of your orders and deliveries.</li>
            </ul>

            <h2>4. Orders and Payments</h2>
            <ul>
              <li>All prices are displayed in Nigerian Naira (NGN).</li>
              <li>Orders are subject to vendor availability and acceptance.</li>
              <li>Payment is deducted from your Uniflex wallet at the time of order placement.</li>
              <li>Delivery fees are calculated based on distance and displayed before checkout.</li>
              <li>Refunds, where applicable, are credited back to your Uniflex wallet.</li>
            </ul>

            <h2>5. Cancellations and Refunds</h2>
            <ul>
              <li>You may cancel an order before it has been accepted by the vendor.</li>
              <li>Once a vendor has begun preparing your order, cancellation may not be possible.</li>
              <li>Refund eligibility is determined on a case-by-case basis depending on the order status and circumstances.</li>
              <li>Disputes should be raised through the App or by contacting our support team.</li>
            </ul>

            <h2>6. User Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the App for any illegal or unauthorized purpose.</li>
              <li>Harass, abuse, or threaten vendors, riders, or other users.</li>
              <li>Provide false information in your profile or orders.</li>
              <li>Attempt to manipulate referral codes, promotions, or wallet balances.</li>
              <li>Reverse-engineer, decompile, or tamper with the App.</li>
              <li>Use automated scripts, bots, or scrapers on the App.</li>
            </ul>

            <h2>7. Vendor and Rider Terms</h2>
            <p>
              Vendors and riders using the App are subject to additional terms and guidelines
              provided during onboarding. Uniflex reserves the right to suspend or remove
              vendor and rider accounts that violate these guidelines.
            </p>

            <h2>8. Intellectual Property</h2>
            <p>
              The Uniflex name, logo, App design, and all associated content are the property
              of Uniflex. You may not copy, modify, distribute, or create derivative works
              from any part of the App without our written permission.
            </p>

            <h2>9. Limitation of Liability</h2>
            <ul>
              <li>Uniflex acts as a platform connecting customers, vendors, and riders. We are not responsible for the quality of food or items delivered by vendors.</li>
              <li>We are not liable for delays caused by riders, vendors, traffic, or other circumstances beyond our control.</li>
              <li>Our total liability to you for any claim arising from your use of the App shall not exceed the amount you paid through the App in the 30 days preceding the claim.</li>
            </ul>

            <h2>10. Account Suspension and Termination</h2>
            <p>We may suspend or terminate your account if you:</p>
            <ul>
              <li>Violate these Terms of Service.</li>
              <li>Engage in fraudulent activity.</li>
              <li>Abuse the platform, its users, or its services.</li>
            </ul>
            <p>
              You may delete your account at any time. See our <Link to="/delete-account">Account Deletion</Link> page for details.
            </p>

            <h2>11. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of material
              changes through the App. Your continued use of the App after changes are posted
              constitutes acceptance of the updated Terms.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the
              Federal Republic of Nigeria. Any disputes arising from these Terms shall be
              resolved in the courts of Osun State, Nigeria.
            </p>

            <h2>13. Contact Us</h2>
            <p>If you have questions about these Terms, contact us at:</p>
            <ul>
              <li><strong>Phone:</strong> <a href="tel:+2349160556368">+234 916 055 6368</a></li>
              <li><strong>Address:</strong> P.M.B 230, EDE OFF GBONGAN &ndash; OSOGBO RD., OSOGBO, OSUN STATE, NIGERIA</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">Uniflex</Link>
            <span className="footer-text">&copy; {new Date().getFullYear()} Uniflex. All rights reserved.</span>
          </div>
          <ul className="footer-links">
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/delete-account">Delete Account</Link></li>
          </ul>
        </div>
      </footer>
    </>
  )
}
