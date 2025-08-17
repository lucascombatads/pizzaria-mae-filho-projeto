import { useState, useCallback } from 'react';
import { CartItem, MenuItem, Customer } from '../types';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customer, setCustomer] = useState<Customer>({
    name: '',
    address: '',
    paymentMethod: ''
  });

  const addToCart = useCallback((
    menuItem: MenuItem, 
    size: 'small' | 'medium' | 'large',
    quantity: number = 1,
    isHalfAndHalf: boolean = false,
    halfAndHalfPartner?: MenuItem
  ) => {
    const newItem: CartItem = {
      id: `${menuItem.id}-${size}-${Date.now()}`,
      menuItem,
      size,
      quantity,
      isHalfAndHalf,
      halfAndHalfPartner
    };

    setCartItems(prev => [...prev, newItem]);
  }, []);

  const removeFromCart = useCallback((itemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  }, []);

  const updateQuantity = useCallback((itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    
    setCartItems(prev => 
      prev.map(item => 
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  }, [removeFromCart]);

  const getCartTotal = useCallback(() => {
    return cartItems.reduce((total, item) => {
      let price = item.menuItem.prices[item.size];
      if (item.isHalfAndHalf && item.halfAndHalfPartner) {
        const partnerPrice = item.halfAndHalfPartner.prices[item.size];
        price = Math.max(price, partnerPrice);
      }
      return total + (price * item.quantity);
    }, 0);
  }, [cartItems]);

  const getCartItemsCount = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const generateWhatsAppMessage = useCallback(() => {
    if (!customer.name || !customer.address || !customer.paymentMethod) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return '';
    }

    let message = `🍕 *PEDIDO PIZZARIA MÃE & FILHO*\n\n`;
    message += `👤 *Cliente:* ${customer.name}\n`;
    message += `📍 *Endereço:* ${customer.address}\n`;
    message += `💳 *Pagamento:* ${customer.paymentMethod}\n\n`;
    message += `📋 *PEDIDO:*\n`;

    cartItems.forEach((item, index) => {
      message += `${index + 1}. `;
      if (item.isHalfAndHalf && item.halfAndHalfPartner) {
        message += `${item.menuItem.name} & ${item.halfAndHalfPartner.name} (meio a meio)`;
      } else {
        message += item.menuItem.name;
      }
      
      if (item.menuItem.category !== 'bebida') {
        const sizeLabel = item.size === 'small' ? '25cm' : item.size === 'medium' ? '35cm' : '45cm';
        message += ` - ${sizeLabel}`;
      }
      
      let price = item.menuItem.prices[item.size];
      if (item.isHalfAndHalf && item.halfAndHalfPartner) {
        const partnerPrice = item.halfAndHalfPartner.prices[item.size];
        price = Math.max(price, partnerPrice);
      }
      
      message += ` - R$ ${price.toFixed(2)}`;
      if (item.quantity > 1) {
        message += ` x${item.quantity}`;
      }
      message += '\n';
    });

    message += `\n💰 *TOTAL: R$ ${getCartTotal().toFixed(2)}*`;

    return encodeURIComponent(message);
  }, [customer, cartItems, getCartTotal]);

  return {
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
    clearCart,
    generateWhatsAppMessage
  };
};