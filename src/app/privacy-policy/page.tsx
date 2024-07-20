import Markdown from 'react-markdown'

const policy = `
## Privacy Policy

Last Updated: June 20, 2024

This Privacy Policy outlines how we collect, use, and protect any personal information you provide through this website.

**1. Information We Collect**

-   **Email**: We collect email addresses when visitors voluntarily subscribe to our newsletter.
    
-   **Cookies**: We currently do not use cookies on this website. However, as our site evolves, we may implement cookies to enhance user experience and for analytical purposes. Any future use of cookies will be disclosed in an updated privacy policy.
    

**2. How We Use Your Information**

-   We use the email addresses provided to send periodic newsletters containing updates, coding tips, and related information.

**3. Information Protection**

-   We are committed to ensuring your information is secure. We have implemented appropriate technical and organizational measures to safeguard the information we collect.

**4. Third-Party Disclosure**

-   We do not sell, trade, or otherwise transfer your personal information to third parties.

**5. Managing Your Information**

-   You can unsubscribe from our newsletter at any time by clicking the unsubscribe link provided in the email or by contacting us directly through our contact page.

**6. Changes to This Privacy Policy**

-   We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this page periodically for the latest information on our privacy practices.

**7. Contact Us**

-   If you have any questions about this Privacy Policy or our practices, please contact us via email at [Your Contact Email].
`;

const PrivacyPolicy = () => {
  return <div className="dark:text-gray-100 text-gray-900 prose dark:prose-invert">
    <Markdown>{policy}</Markdown>
  </div>;
};

export default PrivacyPolicy;
