import bordliLogo from '../assets/Bordli.jpg';
import rieticketLogo from '../assets/rieticket logo.png';
import mockInterviewLogo from '../assets/MockThatInterview logo.png';
import schoolhubLogo from '../assets/schoolhub.png';

const Partners = () => {
  const partners = [
    { name: 'Bordli', logo: bordliLogo },
    { name: 'Rie Ticket', logo: rieticketLogo },
    { name: 'MockThatInterview', logo: mockInterviewLogo, darkBg: true },
    { name: 'SchoolHub', logo: schoolhubLogo },
  ];

  const PartnerItem = ({ name, logo, darkBg }) => (
    <div className="flex items-center justify-center px-4 sm:px-8 flex-shrink-0">
      <div className="text-center">
        <div className={`w-16 h-16 sm:w-24 sm:h-24 mx-auto rounded-full flex items-center justify-center mb-2 hover:bg-[#0D9488]/10 transition-colors overflow-hidden ${darkBg ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <img src={logo} alt={name} className="w-10 h-10 sm:w-16 sm:h-16 object-contain" />
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
            <PartnerItem key={`first-${index}`} {...partner} />
          ))}
          {partners.map((partner, index) => (
            <PartnerItem key={`second-${index}`} {...partner} />
          ))}
          {partners.map((partner, index) => (
            <PartnerItem key={`third-${index}`} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
