import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { Cart } from './components/Cart';
import { useCart } from './hooks/useCart';
import { pizzasSalgadas, pizzasDoces, bebidas, allMenuItems } from './data/menuItems';
import './styles/animations.css';

function App() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    customer,
    setCustomer,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartItemsCount,
    generateWhatsAppMessage
  } = useCart();

  const handleFinishOrder = () => {
    const message = generateWhatsAppMessage();
    if (message) {
      const whatsappUrl = `https://wa.me/5521964486071?text=${message}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <Header 
        cartItemsCount={getCartItemsCount()}
        onCartOpen={() => setIsCartOpen(true)}
      />
      
      <Hero />
      
      <MenuSection 
        id="pizzas-salgadas"
        title="Pizzas Salgadas"
        items={pizzasSalgadas}
        onAddToCart={addToCart}
        allItems={allMenuItems}
      />
      
      <MenuSection 
        id="pizzas-doces"
        title="Pizzas Doces"
        items={pizzasDoces}
        onAddToCart={addToCart}
        allItems={allMenuItems}
      />
      
      <MenuSection 
        id="bebidas"
        title="Bebidas"
        items={bebidas}
        onAddToCart={addToCart}
        allItems={allMenuItems}
      />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        total={getCartTotal()}
        customer={customer}
        onCustomerChange={setCustomer}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onFinishOrder={handleFinishOrder}
      />

      {/* Footer */}
<footer className="bg-[#800020] text-white py-8 px-4">
  <div className="container mx-auto text-center">
    <h3 className="text-2xl font-bold mb-4">Pizzaria Mãe & Filho</h3>
    <p className="mb-2">WhatsApp: (21) 96448-6071</p>
    <p className="text-gray-300">
      Horário de funcionamento: Todos os dias das 18h às 23h
    </p>
    <a
      href="https://wa.me/5521975560574"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 text-gray-300 text-sm block underline hover:text-white"
    >
      © Desenvolvido por Lucas Combat
    </a>
  </div>
</footer>
</div>
);
}

export default App;
