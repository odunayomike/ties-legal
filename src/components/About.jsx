import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#0D9488] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#0D9488] rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-24 h-24">
              <div className="flex gap-2">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-[#0D9488]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-[#0D9488]/20 to-transparent rounded-2xl p-6 backdrop-blur-sm">
                  <div className="w-16 h-16 bg-[#0D9488] rounded-full mx-auto mb-3 flex items-center justify-center animate-pulse">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#0D9488]/20 to-transparent rounded-2xl p-6 backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
                  <div className="w-16 h-16 bg-[#0D9488] rounded-full mx-auto mb-3 flex items-center justify-center animate-pulse">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionTitle
              eyebrow="WHO WE ARE"
              title={<>Who we <span className="text-[#0D9488]">Are</span></>}
              subtitle=""
              darkBg={true}
            />
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              TIES Legal & Advisory is a full-service law firm committed to delivering strategic, results-driven legal solutions that support innovation and business growth.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We bridge the gap between complex legal requirements and practical, people-focused advice, helping our clients operate with clarity and confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;