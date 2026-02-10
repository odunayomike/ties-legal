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
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SectionTitle
              eyebrow="LEGAL EXCELLENCE. INNOVATION."
              title={<>Legal <span className="text-[#0D9488]">Practice</span> That Drives Growth</>}
              subtitle="Strategic, results-driven legal solutions that support innovation and business growth. We bridge the gap between complex legal requirements and practical, people-focused advice."
              isHero={true}
            />

            <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent transition-all"
              />
              <Button type="submit" size="md">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </form>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-[#D97706]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 text-sm">Rated 5 stars by satisfied clients</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D9488]/20 to-transparent rounded-3xl transform rotate-3"></div>
            <div className="relative bg-[#F5E6D3] rounded-3xl p-8 transform hover:scale-105 transition-transform duration-300">
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
              <div className="mt-8 flex justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-[#0D9488] to-[#0F766E] rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
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