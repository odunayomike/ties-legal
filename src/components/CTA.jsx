import Button from './Button';

const CTA = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#0D9488] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#D97706] rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-6 sm:p-8 md:p-12">
              <p className="text-[#0D9488] font-bold uppercase tracking-wide mb-4">GET IN TOUCH</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get in Touch <span className="text-[#0D9488]">With Us</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Ready to discuss your legal needs? Contact us today for strategic legal solutions that drive your business forward.
              </p>
              <div className="space-y-3 mb-8">
                <a href="mailto:info@tieslegal.com" className="flex items-center gap-3 text-gray-700 hover:text-[#0D9488] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@tieslegal.com
                </a>
                <a href="tel:+2349043638416" className="flex items-center gap-3 text-gray-700 hover:text-[#0D9488] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +234 904 363 8416 / +234 815 413 5769
                </a>
              </div>
              <Button size="lg" className="w-full sm:w-auto justify-center">
                Schedule Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>

            <div className="hidden md:flex bg-gradient-to-br from-[#0D9488] to-[#0F766E] p-8 sm:p-12 h-full items-center justify-center">
              <div className="relative">
                <div className="w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-2xl sm:rounded-3xl backdrop-blur-sm p-6 sm:p-8 transform hover:rotate-6 transition-transform duration-300">
                  <div className="space-y-4">
                    <div className="h-4 bg-white/30 rounded animate-pulse"></div>
                    <div className="h-4 bg-white/30 rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="h-4 bg-white/30 rounded w-3/4 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    <div className="mt-8">
                      <div className="w-full h-32 bg-white/20 rounded-2xl flex items-center justify-center">
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;