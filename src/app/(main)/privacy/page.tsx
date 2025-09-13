export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white pt-[67px]">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-medium text-black mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-medium text-black mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information you provide directly to us when you create an account, use our Service, 
              or communicate with us. This includes your name, email address, company information, and any 
              content you submit through our platform.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We automatically collect certain information when you use our Service, including your IP address, 
              browser type, device information, and usage patterns. We may use cookies and similar technologies 
              to collect this information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-black mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Provide, maintain, and improve our Service</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Detect and prevent fraudulent or unauthorized activity</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-black mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except as described in this Privacy Policy. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>With service providers who assist us in operating our platform</li>
              <li>When required by law or to respond to legal process</li>
              <li>To protect our rights, property, or safety, or that of our users</li>
              <li>In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-black mb-4">4. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
              over the internet or electronic storage is completely secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-black mb-4">5. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal information for as long as necessary to provide our Service and fulfill the 
              purposes outlined in this Privacy Policy, unless a longer retention period is required by law. 
              When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-black mb-4">6. Your Rights and Choices</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>The right to access and receive a copy of your personal information</li>
              <li>The right to rectify inaccurate personal information</li>
              <li>The right to erase your personal information in certain circumstances</li>
              <li>The right to restrict processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to object to processing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-black mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to collect information about your browsing activities 
              and to provide personalized content. You can control cookies through your browser settings, though 
              disabling cookies may affect the functionality of our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-black mb-4">8. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Service may contain links to third-party websites or integrate with third-party services. 
              We are not responsible for the privacy practices of these third parties. We encourage you to 
              review their privacy policies before providing any information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-black mb-4">9. Children&apos;s Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Service is not intended for children under 13 years of age. We do not knowingly collect 
              personal information from children under 13. If we become aware that we have collected personal 
              information from a child under 13, we will take steps to delete such information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-black mb-4">10. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your information may be transferred to and processed in countries other than your own. We ensure 
              that such transfers comply with applicable data protection laws and that appropriate safeguards 
              are in place to protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-black mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any material changes 
              by posting the new Privacy Policy on our website and updating the &quot;Last updated&quot; date. Your 
              continued use of our Service after any changes constitutes acceptance of the new Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-black mb-4">12. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p className="text-gray-700 leading-relaxed">
              Email: <a href="mailto:hello@stackcess.com" className="text-blue-600 hover:text-blue-800">hello@stackcess.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}