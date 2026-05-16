import { useState } from 'react';
import SectionTitle from './SectionTitle';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Ties Legal has been exceptional in handling our corporate matters. Their professionalism and attention to detail is unmatched. The team's expertise made a complex legal process seamless.",
      author: "Oluwaseun Adeyemi",
      role: "CEO, Tech Innovations Ltd"
    },
    {
      quote: "Outstanding legal representation! They guided us through a difficult litigation process with expertise and compassion. We couldn't have asked for better legal partners.",
      author: "Chioma Okonkwo",
      role: "Managing Director, Retail Solutions"
    },
    {
      quote: "The real estate transaction support was excellent. Every document was prepared meticulously, and they ensured we understood every step of the process.",
      author: "Ibrahim Musa",
      role: "Property Developer"
    }
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <SectionTitle
              eyebrow="CLIENT TESTIMONIALS"
              title="Trusted by Leading Businesses Across Nigeria"
              subtitle="Our commitment to excellence is reflected in every case we handle. Hear what our clients have to say about working with Ties Legal."
            />

            <div className="mt-6 sm:mt-8 bg-[#F5E6D3] rounded-2xl sm:rounded-3xl p-5 sm:p-8">
              <TestimonialCard {...testimonials[currentIndex]} />
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={previous}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#0D9488] hover:text-white transition-all hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex ? 'bg-[#0D9488] w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0D9488] text-white shadow-lg flex items-center justify-center hover:bg-[#0F766E] transition-all hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D9488]/20 to-transparent rounded-3xl transform rotate-6"></div>
            <div className="relative h-[500px] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D9488]/30 to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-[#0D9488] to-[#0F766E] rounded-tl-full flex items-center justify-center">
                <svg className="w-32 h-32 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;