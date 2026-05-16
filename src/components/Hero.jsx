import { useState } from 'react';
import SectionTitle from './SectionTitle';
import Button from './Button';

const Hero = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <SectionTitle
              eyebrow="LEGAL EXCELLENCE. INNOVATION."
              title={<>Legal <span className="text-[#0D9488]">Practice</span> That Drives Growth</>}
              subtitle="Strategic, results-driven legal solutions that support innovation and business growth. We bridge the gap between complex legal requirements and practical people and business focused solutions."
              isHero={true}
            />

            <div className="max-w-md">
              <p className="text-sm font-semibold text-gray-700 mb-2">Subscribe for newsletters</p>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 min-w-0 px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent transition-all"
                />
                <Button type="submit" size="md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
              </form>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D9488]/20 to-transparent rounded-3xl transform rotate-3"></div>
            <div className="relative bg-[#F5E6D3] rounded-2xl sm:rounded-3xl p-5 sm:p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg animate-float">
                  <p className="text-gray-800 font-medium">Good morning, Lawyer!</p>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-lg animate-float" style={{ animationDelay: '0.2s' }}>
                  <p className="text-gray-600 text-sm">Good morning! Please provide me with some details about your case....</p>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-lg animate-float" style={{ animationDelay: '0.4s' }}>
                  <p className="text-gray-600 text-sm">Thank you. So, the case...</p>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-lg animate-float" style={{ animationDelay: '0.6s' }}>
                  <p className="text-gray-600 text-sm">I see. Contract disputes can...</p>
                </div>
              </div>
              <div className="mt-6 sm:mt-8 flex justify-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#0D9488] to-[#0F766E] rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;