import SectionTitle from './SectionTitle';
import Card from './Card';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Excellence and Integrity',
      description: 'We uphold the highest standards of professionalism and ethical practice in every matter we handle.'
    },
    {
      title: 'Tailored Strategy',
      description: 'Our approach is customized to your unique business needs, objectives, and industry context.'
    },
    {
      title: 'Practical Solutions',
      description: 'We deliver actionable advice that balances legal requirements with business realities.'
    },
    {
      title: 'Proven Track Record',
      description: 'Over 19 years of combined experience advising leading organizations across Nigeria and Africa.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-[#0D9488] rounded-full"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(60px)'
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex gap-2 mb-8">
              {[...Array(4)].map((_, i) => (
                <svg key={i} className="w-8 h-8 text-[#0D9488]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              ))}
            </div>

            <SectionTitle
              eyebrow="WHY CHOOSE US"
              title={<>Why <span className="text-[#0D9488]">Choose Us?</span></>}
              subtitle="We provide trusted legal guidance that empowers businesses and individuals to innovate, grow, and operate with confidence."
              darkBg={true}
            />
          </div>

          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm border border-[#0D9488]/30 rounded-2xl p-6 hover:border-[#0D9488] hover:bg-gray-900/70 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0D9488] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{reason.title}</h3>
                    <p className="text-gray-400 text-sm">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;