const SectionTitle = ({ eyebrow, title, subtitle, centered = false, isHero = false, darkBg = false }) => {
  return (
    <div className={`${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className={`uppercase text-sm font-bold tracking-wider mb-3 ${darkBg ? 'text-[#D97706]' : 'text-[#D97706]'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isHero ? 'leading-tight md:leading-tight' : ''} ${darkBg ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg max-w-2xl ${isHero ? 'leading-relaxed' : ''} ${darkBg ? 'text-gray-300' : 'text-gray-600'} ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;