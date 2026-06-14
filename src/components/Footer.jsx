import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const [showBlogPopup, setShowBlogPopup] = useState(false);
  const [showSubscribePopup, setShowSubscribePopup] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState('');

  const practiceAreas = [
    { label: 'Corporate & Commercial Law', href: '/practice-areas/corporate' },
    { label: 'Data Privacy & Protection', href: '/practice-areas/privacy' },
    { label: 'Real Estate & Property Law', href: '/practice-areas/realestate' },
    { label: 'Intellectual Property', href: '/practice-areas/ip' },
    { label: 'AI & Technology Law', href: '/practice-areas/tech' },
    { label: 'Regulatory & Compliance', href: '/practice-areas/compliance' }
  ];

  const company = [
    { label: 'About Us', href: '/about' },
    { label: 'Our People', href: '/team' },
    { label: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', subscribeEmail);
    setSubscribeEmail('');
    setShowSubscribePopup(false);
  };

  return (
    <>
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            <div className="sm:col-span-2 md:col-span-1">
              <Link to="/">
                <Logo className="mb-4" />
              </Link>
              <p className="text-sm leading-relaxed mb-4">
                TIES Legal & Advisory - Delivering strategic, results-driven legal solutions across Nigeria.
              </p>
              <div className="space-y-2 text-sm">
                <a href="mailto:info@tieslegal.com" className="flex items-center gap-2 hover:text-[#0D9488] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@tieslegal.com
                </a>
                <a href="tel:+2349043638416" className="flex items-center gap-2 hover:text-[#0D9488] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +234 904 363 8416
                </a>
                <a href="tel:+2348154135769" className="flex items-center gap-2 hover:text-[#0D9488] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +234 815 413 5769
                </a>
              </div>
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0D9488] transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Practice Areas</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                {practiceAreas.map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} className="hover:text-[#0D9488] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                {company.map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} className="hover:text-[#0D9488] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>
                  <button
                    onClick={() => setShowBlogPopup(true)}
                    className="hover:text-[#0D9488] transition-colors text-left"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowSubscribePopup(true)}
                    className="hover:text-[#0D9488] transition-colors text-left"
                  >
                    Subscribe
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>
                  <Link to="/privacy-policy" className="hover:text-[#0D9488] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-use" className="hover:text-[#0D9488] transition-colors">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-sm">&copy; Copyright 2026 TIES Legal & Advisory. All Rights Reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link to="/terms-of-use" className="hover:text-[#0D9488] transition-colors">
                Terms of Use
              </Link>
              <Link to="/privacy-policy" className="hover:text-[#0D9488] transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Blog Coming Soon Popup */}
      {showBlogPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowBlogPopup(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center animate-fadeIn" onClick={(e) => e.stopPropagation()}>
            <div className="w-16 h-16 bg-[#0D9488]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#0D9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon</h3>
            <p className="text-gray-600 mb-6">Our blog is currently under development. Stay tuned for insightful articles on legal trends and industry updates.</p>
            <button
              onClick={() => setShowBlogPopup(false)}
              className="bg-[#0D9488] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0F766E] transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      )}

      {/* Subscribe Popup */}
      {showSubscribePopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowSubscribePopup(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 animate-fadeIn" onClick={(e) => e.stopPropagation()}>
            <div className="w-16 h-16 bg-[#0D9488]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#0D9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Subscribe to our Newsletters</h3>
            <p className="text-gray-600 mb-6 text-center">Stay informed on evolving legal landscapes, industry trends and practical tips for your business</p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                value={subscribeEmail}
                onChange={(e) => setSubscribeEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent"
              />
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowSubscribePopup(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-full font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#0D9488] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0F766E] transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
