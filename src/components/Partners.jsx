const Partners = () => {
  const partners = [
    'AI Quest',
    'Ductape',
    'Rie Ticket',
    'Greach',
    'Bordli',
    'MockThatInterview'
  ];

  const PartnerItem = ({ name }) => (
    <div className="flex items-center justify-center px-4 sm:px-8 flex-shrink-0">
      <div className="text-center">
        <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-2 hover:bg-[#0D9488]/10 transition-colors">
          <svg className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L11 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c-.25.78.409 1.574 1.232 1.574.462 0 .898-.196 1.203-.53l.816-.816a4.97 4.97 0 01.82.086l.725-1.785a3.989 3.989 0 00-2.67-1.018 3.989 3.989 0 00-1.308.217z" clipRule="evenodd" />
          </svg>
        </div>
        <p className="text-xs text-gray-600 font-medium whitespace-nowrap">{name}</p>
      </div>
    </div>
  );

  return (
    <section className="bg-white py-10 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-gray-700 text-lg sm:text-xl font-semibold mb-6 sm:mb-12">
          Trusted <span className="text-[#0D9488]">Collaborations</span>
        </h3>
        <p className="text-center text-gray-600 text-sm sm:text-base mb-8 sm:mb-12 max-w-3xl mx-auto">
          We build strong partnerships with trusted collaborators in technology, innovation, and professional services to deliver holistic solutions and drive business growth.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="flex animate-marquee">
          {partners.map((partner, index) => (
            <PartnerItem key={`first-${index}`} name={partner} />
          ))}
          {partners.map((partner, index) => (
            <PartnerItem key={`second-${index}`} name={partner} />
          ))}
          {partners.map((partner, index) => (
            <PartnerItem key={`third-${index}`} name={partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
