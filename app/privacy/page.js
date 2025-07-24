'use client';

import React from 'react';
import "../../styles/privacy.css";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-container">
      <div className="privacy-content">
        <h1>Privacy Policy</h1>
        <p>Last updated: July 22, 2025</p>

        <p>
          At SpiceSavor, we take your privacy seriously. This Privacy Policy describes how we collect,
          use, and protect your personal information when you visit or use our website.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We collect the following types of information:</p>
        <ul>
          <li><strong>Personal Data:</strong> such as your name, email address, and account preferences when you register or submit content.</li>
          <li><strong>Usage Data:</strong> including IP address, browser type, pages visited, and timestamps to improve our service.</li>
          <li><strong>Cookies:</strong> small data files stored on your device to personalize your experience.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>Your information is used to:</p>
        <ul>
          <li>Provide access to features like saving recipes and commenting.</li>
          <li>Improve the content and user experience of SpiceSavor.</li>
          <li>Send updates or promotional materials (if opted in).</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h2>3. Sharing of Information</h2>
        <p>
          We do not sell your personal data. Your information may only be shared with:
        </p>
        <ul>
          <li>Service providers who help us operate the platform (e.g., hosting or analytics).</li>
          <li>Authorities if required by law or to protect our rights.</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          We implement strong security practices to protect your data, including encryption, access controls,
          and secure storage. However, no method of transmission over the Internet is 100% secure.
        </p>

        <h2>5. Your Rights</h2>
        <p>
          You have the right to:
        </p>
        <ul>
          <li>Access the personal data we hold about you.</li>
          <li>Request corrections or deletions.</li>
          <li>Withdraw consent at any time for marketing communications.</li>
        </ul>

        <h2>6. Third-Party Services</h2>
        <p>
          We may use third-party services like Google Analytics or social media plugins. These services have
          their own privacy policies which we recommend reviewing.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. All changes will be posted on this page with a new “Last Updated” date.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          For any privacy-related concerns or requests, please contact us at: <strong>support@spicesavor.com</strong>
        </p>
      </div>
    </div>
  );
}