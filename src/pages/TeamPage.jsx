import SectionTitle from '../components/SectionTitle';

const TeamPage = () => {
  const team = [
    {
      name: 'Scott R',
      role: 'Partner',
      bio: 'She is a renowned expert in Intellectual Property and Data Protection with over 9 years of experience advising global tech giants and leading fintechs across Nigeria and Africa. She brings extensive experience in the fintech and technology sectors, having worked with top law firms in Nigeria and served as in-house counsel, where she negotiated high-value commercial contracts. She has acted as legal counsel for numerous organizations, offering deep expertise in emerging technology frameworks and the protection of digital assets.',
      specializations: ['Intellectual Property', 'Data Protection', 'Fintech Law', 'Commercial Contracts']
    },
    {
      name: 'Adekunbi Adegbite',
      role: 'Partner',
      bio: 'With over 10 years of experience, she bridges the gap between law and technology. Her unique background in Product Management allows her to deeply understand the tech industry\'s lifecycle across various subsectors. She specializes in guiding startups through the Nigerian digital economy, focusing on platform governance, licensing, and regulatory best practice.',
      specializations: ['Technology Law', 'Platform Governance', 'Regulatory Compliance', 'Startup Advisory']
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center gap-2 mb-6 sm:mb-8">
              {[...Array(4)].map((_, i) => (
                <svg key={i} className="w-8 h-8 text-[#0D9488]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              ))}
            </div>
            <SectionTitle
              eyebrow="MEET OUR PEOPLE"
              title={<>Our <span className="text-[#0D9488]">People</span></>}
              subtitle="Meet the legal experts driving innovation and excellence at TIES Legal & Advisory"
              centered
              darkBg={true}
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {team.map((member, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="bg-gradient-to-br from-[#0D9488] to-[#0F766E] rounded-2xl sm:rounded-3xl p-8 sm:p-12 flex items-center justify-center h-64 sm:h-80 md:h-96">
                    <div className="w-32 h-32 sm:w-48 sm:h-48 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-20 h-20 sm:w-32 sm:h-32 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">{member.name}</h2>
                  <p className="text-xl sm:text-2xl text-[#0D9488] font-semibold mb-4 sm:mb-6">{member.role}</p>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">{member.bio}</p>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Specializations:</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.specializations.map((spec, idx) => (
                        <span key={idx} className="bg-[#0D9488]/10 text-[#0D9488] px-4 py-2 rounded-full text-sm font-semibold">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-[#0D9488]">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
              Specialists & <span className="text-[#0D9488]">Associates</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center">
              We are supported by a team of highly skilled professionals with deep expertise across corporate governance, dispute resolution, and regulatory compliance. Our team members come from diverse backgrounds, bringing a wealth of experience in both local and international transactions. Together, they provide practical, innovative solutions that protect our clients' interests, support business growth, and ensure operational excellence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;