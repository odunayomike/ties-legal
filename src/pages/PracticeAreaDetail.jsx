import { useParams, Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';

const PracticeAreaDetail = () => {
  const { area } = useParams();

  const practiceAreaData = {
    corporate: {
      title: 'Corporate & Commercial Law',
      description: 'Comprehensive legal solutions for businesses at every stage of growth',
      services: [
        'Business Formation & Incorporation',
        'Corporate Governance & Compliance',
        'Mergers & Acquisitions',
        'Commercial Contracts & Agreements',
        'Joint Ventures & Partnerships',
        'Corporate Restructuring',
        'Shareholder Agreements',
        'Due Diligence'
      ],
      overview: 'Our corporate and commercial law practice provides strategic legal guidance to businesses of all sizes. We assist with entity formation, corporate governance, commercial transactions, and complex business arrangements. Our team understands the Nigerian business landscape and provides practical solutions that support growth and compliance.'
    },
    compliance: {
      title: 'Regulatory & Compliance',
      description: 'Navigate regulatory complexity with confidence',
      services: [
        'Regulatory Compliance Advisory',
        'Industry-Specific Regulations',
        'Licensing & Permits',
        'Regulatory Audits',
        'Compliance Program Development',
        'Regulatory Reporting',
        'Government Relations',
        'Compliance Training'
      ],
      overview: 'We help businesses navigate the complex regulatory environment in Nigeria. Our compliance practice covers industry-specific regulations, licensing requirements, and ongoing compliance management. We work with clients across fintech, technology, and other regulated sectors to ensure full regulatory compliance.'
    },
    privacy: {
      title: 'Data Privacy & Protection Law',
      description: 'Protect your data and ensure NDPR compliance',
      services: [
        'NDPR Compliance',
        'Data Protection Impact Assessments',
        'Privacy Policy Development',
        'Data Processing Agreements',
        'Data Breach Response',
        'Cross-Border Data Transfers',
        'Privacy Training Programs',
        'Data Protection Officer Services'
      ],
      overview: 'Our data privacy practice helps organizations comply with the Nigeria Data Protection Regulation (NDPR) and international data protection standards. We provide comprehensive privacy solutions including compliance audits, policy development, and ongoing advisory services to protect your organization and customer data.'
    },
    ip: {
      title: 'Intellectual Property Law',
      description: 'Protect and monetize your intellectual assets',
      services: [
        'Trademark Registration & Protection',
        'Copyright Registration',
        'Patent Applications',
        'IP Portfolio Management',
        'Licensing Agreements',
        'Technology Transfer',
        'IP Due Diligence',
        'Infringement & Enforcement'
      ],
      overview: 'We provide comprehensive intellectual property services to protect your innovations, brands, and creative works. Our IP practice includes registration, portfolio management, licensing, and enforcement. We help clients across technology, entertainment, manufacturing, and other innovative sectors maximize the value of their intellectual property.'
    },
    tech: {
      title: 'AI & Technology Law',
      description: 'Navigate the future of technology with expert legal guidance',
      services: [
        'AI Governance & Ethics',
        'Fintech Regulatory Compliance',
        'Platform Governance',
        'Digital Product Licensing',
        'Technology Transactions',
        'SaaS Agreements',
        'API & Software Licensing',
        'Emerging Technology Advisory'
      ],
      overview: 'Our technology law practice is at the forefront of legal innovation. We advise on AI governance, fintech regulations, platform compliance, and emerging technology frameworks. With deep expertise in Nigeria\'s digital economy, we help startups and established tech companies navigate complex technology legal issues.'
    },
    realestate: {
      title: 'Real Estate & Property Law',
      description: 'Secure property transactions and protect your real estate investments',
      services: [
        'Property Acquisition & Sales',
        'Title Verification & Due Diligence',
        'Lease & Tenancy Agreements',
        'Property Development',
        'Property Registration',
        'Real Estate Financing'
      ],
      overview: 'We provide comprehensive real estate legal services covering all aspects of property transactions. From due diligence and documentation to registration and dispute resolution, our team ensures your property interests are protected. We handle residential, commercial, and industrial property matters.'
    },
    tax: {
      title: 'Tax Law',
      description: 'Strategic tax planning and compliance solutions',
      services: [
        'Tax Planning & Strategy',
        'Corporate Tax Advisory',
        'Personal Tax Planning',
        'Tax Compliance',
        'Transfer Pricing',
        'Tax Dispute Resolution',
        'Tax Audits & Reviews',
        'International Tax Advisory'
      ],
      overview: 'Our tax practice provides strategic tax planning and compliance services for businesses and individuals. We help clients optimize their tax positions while ensuring full compliance with Nigerian tax laws. Our services include tax planning, dispute resolution, and representation before tax authorities.'
    },
    consultation: {
      title: 'Legal Consultation & Advisory',
      description: 'General legal guidance for all your legal needs',
      services: [
        'General Legal Advice',
        'Contract Review & Drafting',
        'Legal Risk Assessment',
        'Dispute Resolution Advisory',
        'Legal Due Diligence',
        'Business Strategy Legal Support',
        'Regulatory Advisory',
        'Legal Opinions'
      ],
      overview: 'We offer comprehensive legal consultation services across various practice areas. Whether you need contract review, risk assessment, or strategic legal advice, our experienced team provides practical guidance tailored to your specific needs. We serve as trusted advisors to businesses and individuals navigating legal challenges.'
    }
  };

  const currentArea = practiceAreaData[area] || practiceAreaData.corporate;

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Link to="/practice-areas" className="inline-flex items-center gap-2 text-[#0D9488] hover:underline mb-4 sm:mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Practice Areas
            </Link>
            <SectionTitle
              eyebrow="PRACTICE AREA"
              title={currentArea.title}
              subtitle={currentArea.description}
              darkBg={true}
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Overview</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 sm:mb-12">
                {currentArea.overview}
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Why Should You Choose Us?</h2>
              <div className="space-y-4 mb-12">
                {[
                  { title: 'Expert Knowledge', description: 'Deep understanding of Nigerian legal frameworks and international best practices' },
                  { title: 'Practical Solutions', description: 'Actionable advice that balances legal requirements with business objectives' },
                  { title: 'Proven Experience', description: 'Track record of successful outcomes for clients across various industries' },
                  { title: 'Client-Focused', description: 'Tailored strategies that address your specific needs and circumstances' }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-6 h-6 bg-[#0D9488] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card className="lg:sticky lg:top-24 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Our Services</h3>
                <ul className="space-y-3">
                  {currentArea.services.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#0D9488] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-4">Need Assistance?</h4>
                  <Link
                    to="/contact"
                    className="block w-full bg-[#0D9488] text-white text-center px-6 py-3 rounded-full font-semibold hover:bg-[#0F766E] transition-all"
                  >
                    Contact Us
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreaDetail;