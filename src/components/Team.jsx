import SectionTitle from './SectionTitle';
import Card from './Card';

const Team = () => {
  const team = [
    {
      name: 'Scott R',
      role: 'Partner',
      bio: 'She is a renowned expert in Intellectual Property and Data Protection with over 9 years of experience advising global tech giants and leading fintechs across Nigeria and Africa. She brings extensive experience in the fintech and technology sectors, having worked with top law firms in Nigeria and served as in-house counsel, where she negotiated high-value commercial contracts. She has acted as legal counsel for numerous organizations, offering deep expertise in emerging technology frameworks and the protection of digital assets.'
    },
    {
      name: 'Adekunbi Adegbite',
      role: 'Partner',
      bio: 'With over 10 years of experience, she bridges the gap between law and technology. Her unique background in Product Management allows her to deeply understand the tech industry\'s lifecycle across various subsectors. She specializes in guiding startups through the Nigerian digital economy, focusing on platform governance, licensing, and regulatory best practice.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="flex justify-center gap-2 mb-6 sm:mb-8">
            {[...Array(4)].map((_, i) => (
              <svg key={i} className="w-8 h-8 text-[#0D9488]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            ))}
          </div>
          <SectionTitle
            eyebrow="MEET OUR TEAM"
            title={<>Our <span className="text-[#0D9488]">Team</span></>}
            subtitle=""
            centered
            darkBg={true}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 border-2 border-[#0D9488] rounded-2xl sm:rounded-3xl p-5 sm:p-8 hover:shadow-2xl hover:shadow-[#0D9488]/20 transition-all duration-300"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-[#0D9488] to-[#0F766E] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#0D9488] font-semibold">{member.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 border-2 border-[#0D9488] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Specialists & <span className="text-[#0D9488]">Associates</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We are supported by a team of highly skilled professionals with deep expertise across corporate governance, dispute resolution, and regulatory compliance. Our team members come from diverse backgrounds, bringing a wealth of experience in both local and international transactions. Together, they provide practical, innovative solutions that protect our clients' interests, support business growth, and ensure operational excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;