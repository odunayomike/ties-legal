const Card = ({ children, className = '', hover = true }) => {
  const hoverEffect = hover ? 'hover:-translate-y-2' : '';

  return (
    <div className={`bg-white rounded-2xl p-8 transition-all duration-300 ${hoverEffect} ${className}`}>
      {children}
    </div>
  );
};

export default Card;