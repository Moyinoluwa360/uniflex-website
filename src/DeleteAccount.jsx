import { Link } from 'react-router-dom'
import './Legal.css'

export default function DeleteAccount() {
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
            <h1 className="legal-title">Delete Your Account</h1>
            <p className="legal-updated">Last updated: October 19, 2026</p>
          </div>

          <div className="legal-content">
            <p>
              We're sorry to see you go. If you wish to delete your Uniflex account, you
              can do so directly in the App or by contacting our support team.
            </p>

            <h2>How to Delete Your Account</h2>

            <h3>Option 1: In the App</h3>
            <ol>
              <li>Open the Uniflex app and log in to your account.</li>
              <li>Go to <strong>Profile</strong> (bottom navigation bar).</li>
              <li>Tap <strong>Settings</strong>.</li>
              <li>Tap <strong>Delete Account</strong>.</li>
              <li>Confirm the deletion when prompted.</li>
            </ol>

            <h3>Option 2: Contact Support</h3>
            <p>
              If you cannot access the App, contact us directly and we will process your
              account deletion within 7 business days:
            </p>
            <ul>
              <li><strong>Phone:</strong> <a href="tel:+2349160556368">+234 916 055 6368</a></li>
              <li><strong>Address:</strong> P.M.B 230, EDE OFF GBONGAN &ndash; OSOGBO RD., OSOGBO, OSUN STATE, NIGERIA</li>
            </ul>

            <h2>What Happens When You Delete Your Account</h2>
            <p>When your account is deleted, the following data is permanently removed:</p>
            <ul>
              <li>Your profile information (name, email, phone number, profile picture).</li>
              <li>Your wallet balance and transaction history.</li>
              <li>Your order history and saved addresses.</li>
              <li>Your referral codes and rewards.</li>
              <li>Push notification subscriptions.</li>
            </ul>

            <h2>Data We May Retain</h2>
            <p>
              In compliance with legal and financial obligations, we may retain certain
              records for a limited period after account deletion:
            </p>
            <ul>
              <li><strong>Transaction records:</strong> Payment and refund records may be retained for up to 6 years for financial and tax compliance.</li>
              <li><strong>Legal obligations:</strong> Data required to comply with legal proceedings, regulations, or government requests.</li>
            </ul>
            <p>
              Retained data is stored securely and is not used for marketing or any
              purpose beyond legal compliance.
            </p>

            <h2>Before You Delete</h2>
            <ul>
              <li><strong>Wallet balance:</strong> Any remaining balance in your wallet will be forfeited upon deletion. Please withdraw or use your balance before deleting your account.</li>
              <li><strong>Active orders:</strong> Please ensure all pending orders are completed or cancelled before requesting deletion.</li>
              <li><strong>Vendor/Rider accounts:</strong> If you are a vendor or rider, please ensure all outstanding transactions are settled before deletion.</li>
            </ul>

            <p>
              Account deletion is permanent and cannot be undone. If you wish to use Uniflex
              again in the future, you will need to create a new account.
            </p>
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
