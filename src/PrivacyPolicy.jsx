import { Link } from 'react-router-dom'
import './Legal.css'

export default function PrivacyPolicy() {
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
            <h1 className="legal-title">Privacy Policy</h1>
            <p className="legal-updated">Last updated: October 19, 2026</p>
          </div>

          <div className="legal-content">
            <p>
              Uniflex ("we", "our", or "us") operates the Uniflex mobile application (the "App").
              This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you use our App. Please read this policy carefully.
            </p>

            <h2>1. Information We Collect</h2>

            <h3>Personal Information</h3>
            <p>When you create an account or use our services, we may collect:</p>
            <ul>
              <li><strong>Account information:</strong> Full name, email address, phone number, and password.</li>
              <li><strong>Profile information:</strong> Campus name, profile picture, and delivery address.</li>
              <li><strong>Payment information:</strong> Wallet balance and transaction history. Payment processing is handled by Paystack; we do not store your bank card details.</li>
              <li><strong>Identity verification:</strong> Phone number verified via SMS (Termii).</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <ul>
              <li><strong>Location data:</strong> With your permission, we collect real-time location data to provide delivery tracking and connect you with nearby vendors. You can disable location access in your device settings at any time.</li>
              <li><strong>Device information:</strong> Device type, operating system, and push notification tokens for delivering notifications via Firebase Cloud Messaging (FCM).</li>
              <li><strong>Usage data:</strong> Pages viewed, features used, and interactions within the App to improve our services.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Create and manage your account.</li>
              <li>Process food orders and errand requests.</li>
              <li>Facilitate wallet funding and payments via Paystack.</li>
              <li>Provide real-time order and delivery tracking.</li>
              <li>Send push notifications about order status, promotions, and updates.</li>
              <li>Connect riders with delivery and errand requests.</li>
              <li>Enable vendor operations (order management, menu updates).</li>
              <li>Improve our App, services, and user experience.</li>
              <li>Respond to customer support inquiries.</li>
              <li>Enforce our Terms of Service and prevent fraud.</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>We may share your information with:</p>
            <ul>
              <li><strong>Vendors:</strong> Your name, order details, and delivery address so they can fulfill your order.</li>
              <li><strong>Riders:</strong> Your name, phone number, and delivery location so they can complete deliveries.</li>
              <li><strong>Payment processors:</strong> Paystack processes wallet funding and transactions. Their use of your data is governed by their own privacy policy.</li>
              <li><strong>Service providers:</strong> Supabase (database and authentication), Firebase (push notifications), and Termii (SMS verification) help us operate the App.</li>
              <li><strong>Legal requirements:</strong> We may disclose information if required by law, regulation, or legal process.</li>
            </ul>
            <p>We do <strong>not</strong> sell your personal information to third parties.</p>

            <h2>4. Data Storage and Security</h2>
            <p>
              Your data is stored securely using Supabase with row-level security (RLS) policies
              that ensure users can only access their own data. We use encryption in transit (HTTPS/TLS)
              and implement access controls to protect your information.
            </p>
            <p>
              While we strive to protect your data, no method of electronic storage or transmission
              is 100% secure. We cannot guarantee absolute security.
            </p>

            <h2>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li><strong>Access</strong> the personal data we hold about you.</li>
              <li><strong>Update</strong> your account information through the App's profile settings.</li>
              <li><strong>Delete</strong> your account and associated data. See our <Link to="/delete-account">Account Deletion</Link> page for instructions.</li>
              <li><strong>Opt out</strong> of push notifications through your device settings.</li>
              <li><strong>Withdraw consent</strong> for location tracking through your device settings.</li>
            </ul>

            <h2>6. Children's Privacy</h2>
            <p>
              Our App is not intended for children under the age of 13. We do not knowingly
              collect personal information from children under 13. If we learn that we have
              collected data from a child under 13, we will delete it promptly.
            </p>

            <h2>7. Third-Party Services</h2>
            <p>Our App integrates with the following third-party services, each with their own privacy policies:</p>
            <ul>
              <li><strong>Supabase</strong> &mdash; Authentication and data storage</li>
              <li><strong>Paystack</strong> &mdash; Payment processing</li>
              <li><strong>Firebase (Google)</strong> &mdash; Push notifications and analytics</li>
              <li><strong>Termii</strong> &mdash; SMS verification</li>
              <li><strong>Google Maps</strong> &mdash; Location and mapping services</li>
            </ul>

            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of
              significant changes through the App or via email. Your continued use of the App
              after changes are posted constitutes acceptance of the updated policy.
            </p>

            <h2>9. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or your data, contact us at:</p>
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
