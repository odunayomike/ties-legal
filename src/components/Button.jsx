const Button = ({ children, variant = 'primary', size = 'md', onClick, className = '' }) => {
  const baseStyles = 'font-semibold rounded-full transition-all duration-300 flex items-center gap-2 hover:scale-105';

  const variants = {
    primary: 'bg-[#0D9488] text-white hover:bg-[#0F766E] shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-[#0D9488] border-2 border-[#0D9488] hover:bg-[#0D9488] hover:text-white',
    outline: 'bg-transparent text-gray-700 border border-gray-300 hover:border-[#0D9488] hover:text-[#0D9488]'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;