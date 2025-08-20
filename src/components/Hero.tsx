import React, { useEffect, useRef } from 'react';

export const Hero: React.FC = () => {
  const pizzaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (pizzaRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        pizzaRef.current.style.transform = `translateY(${rate}px) rotate(${scrolled * 0.1}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#f8f8f8] to-[#eeeeee] flex items-center justify-center overflow-hidden">
      {/* Background Pizza Image with Parallax */}
      <div
        ref={pizzaRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none"
      >
        <img
          src="https://github.com/lucascombatads/imagens-hepatoburn/blob/main/portu.png?raw=true"
          alt="Pizza Background"
          className="w-96 h-96 object-cover rounded-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <h2 className="text-4xl md:text-6xl font-bold text-[#800020] mb-6 animate-fade-in-up">
          <br />
          <span className="text-yellow-600">Pizzaria Mãe & Filho</span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in-up animation-delay-200">
          Nossas massas são preparadas diariamente, sempre frescas, com ingredientes selecionados e do dia.
        </p>

        {/* Quality Message (imagem principal) */}
        <img
          src="https://github.com/lucascombatads/imagens-hepatoburn/blob/main/pizza-desenho.png?raw=true"
          alt="Ilustração de pizza"
          className="mt-8 max-w-xs md:max-w-md mx-auto animate-fade-in-up animation-delay-600"
        />

        {/* Texto acima da imagem flexa + brotinho */}
        <p className="mt-8 text-lg md:text-xl font-bold text-gray-900 animate-fade-in-up animation-delay-700">
          Pizzas de 45cm acompanham Flexa Guaraná + Brotinho de banana
        </p>

        {/* Imagem flexa + brotinho */}
        <img
          src="https://github.com/lucascombatads/imagens-hepatoburn/blob/main/flexa+brotinho.png?raw=true"
          alt="Promoção Flexa + Brotinho"
          className="mt-2 max-w-xs md:max-w-md mx-auto animate-fade-in-up animation-delay-800"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 opacity-20 animate-float">
        <img
          src="https://github.com/lucascombatads/imagens-hepatoburn/blob/main/calabresa.png?raw=true"
          alt="Pizza slice"
          className="w-24 h-24 rounded-full"
        />
      </div>
      <div className="absolute bottom-20 left-10 opacity-20 animate-float animation-delay-1000">
        <img
          src="https://github.com/lucascombatads/imagens-hepatoburn/blob/main/frango-catupiry.png?raw=true"
          alt="Drink"
          className="w-16 h-16 rounded-full"
        />
      </div>
    </section>
  );
};
