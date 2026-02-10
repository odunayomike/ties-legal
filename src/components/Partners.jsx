const Partners = () => {
  const partners = [
    'AI Quest',
    'Ductape',
    'Rie Ticket',
    'Greach',
    'Bordli',
    'MockThatInterview'
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-gray-700 text-xl font-semibold mb-12">
          Trusted <span className="text-[#0D9488]">Collaborations</span>
        </h3>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We build strong partnerships with trusted collaborators in technology, innovation, and professional services to deliver holistic solutions and drive business growth.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            >
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-2 hover:bg-[#0D9488]/10 transition-colors">
                  <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L11 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c-.25.78.409 1.574 1.232 1.574.462 0 .898-.196 1.203-.53l.816-.816a4.97 4.97 0 01.82.086l.725-1.785a3.989 3.989 0 00-2.67-1.018 3.989 3.989 0 00-1.308.217z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-xs text-gray-600 font-medium">{partner}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;