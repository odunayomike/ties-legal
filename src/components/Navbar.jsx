import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';
import Dropdown from './Dropdown';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPracticeAreasOpen, setIsPracticeAreasOpen] = useState(false);

  const practiceAreas = [
    { label: 'All Practice Areas', href: '/practice-areas' },
    { label: 'Corporate & Commercial Law', href: '/practice-areas/corporate' },
    { label: 'Data Privacy & Protection', href: '/practice-areas/privacy' },
    { label: 'Intellectual Property', href: '/practice-areas/ip' },
    { label: 'AI & Technology Law', href: '/practice-areas/tech' },
    { label: 'Real Estate & Property Law', href: '/practice-areas/realestate' },
    { label: 'Regulatory & Compliance', href: '/practice-areas/compliance' }
  ];

  const resources = [
    { label: 'About Us', href: '/about' },
    { label: 'Our People', href: '/team' }
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsPracticeAreasOpen(false);
  };

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const scrollY = window.scrollY;
    const handleScroll = () => {
      if (Math.abs(window.scrollY - scrollY) > 10) {
        closeMobileMenu();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link to="/" onClick={closeMobileMenu}>
            <Logo />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Dropdown label="Practice Areas" items={practiceAreas} />
            <Dropdown label="About" items={resources} />
            <Link to="/contact" className="text-gray-700 hover:text-[#0D9488] transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact">
              <Button size="md">
                Schedule Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-[#0D9488]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fadeIn">
            <div className="flex flex-col gap-4">
              <div>
                <button
                  onClick={() => setIsPracticeAreasOpen(!isPracticeAreasOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-[#0D9488] transition-colors"
                >
                  <span>Practice Areas</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isPracticeAreasOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isPracticeAreasOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    {practiceAreas.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={closeMobileMenu}
                        className="text-sm text-gray-600 hover:text-[#0D9488] transition-colors py-1"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/about" onClick={closeMobileMenu} className="text-gray-700 hover:text-[#0D9488] transition-colors">
                About
              </Link>
              <Link to="/team" onClick={closeMobileMenu} className="text-gray-700 hover:text-[#0D9488] transition-colors">
                Our People
              </Link>
              <Link to="/contact" onClick={closeMobileMenu} className="text-gray-700 hover:text-[#0D9488] transition-colors">
                Contact
              </Link>
              <Link to="/contact" onClick={closeMobileMenu}>
                <Button size="sm" className="w-full justify-center">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
