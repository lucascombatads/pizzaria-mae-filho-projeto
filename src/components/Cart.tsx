import React from 'react';
import { X, Minus, Plus, ShoppingCart } from 'lucide-react';
import { CartItem, Customer } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  total: number;
  customer: Customer;
  onCustomerChange: (customer: Customer) => void;
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onFinishOrder: () => void;
}

export const Cart: React.FC<CartProps> = ({
  isOpen,
  onClose,
  items,
  total,
  customer,
  onCustomerChange,
  onUpdateQuantity,
  onRemoveItem,
  onFinishOrder
}) => {
  const getSizeLabel = (size: string) => {
    switch (size) {
      case 'small': return '25cm';
      case 'medium': return '35cm';
      case 'large': return '45cm';
      default: return '';
    }
  };

  const getItemPrice = (item: CartItem) => {
    let price = item.menuItem.prices[item.size];
    if (item.isHalfAndHalf && item.halfAndHalfPartner) {
      const partnerPrice = item.halfAndHalfPartner.prices[item.size];
      price = Math.max(price, partnerPrice);
    }
    return price;
  };

  // Definindo a taxa fixa de entrega
  const deliveryFee = 4;
  const totalWithDelivery = total + deliveryFee;

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          onClick={onClose}
        />
      )}
      
      {/* Cart Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="bg-[#800020] text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingCart size={24} />
              <h2 className="text-xl font-bold">Seu Pedido</h2>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center text-gray-500 mt-8">
                <ShoppingCart size={48} className="mx-auto mb-4 opacity-50" />
                <p>Seu carrinho está vazio</p>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800">
                            {item.isHalfAndHalf && item.halfAndHalfPartner
                              ? `${item.menuItem.name} & ${item.halfAndHalfPartner.name}`
                              : item.menuItem.name
                            }
                          </h3>
                          {item.menuItem.category !== 'bebida' && (
                            <p className="text-sm text-gray-600">
                              {getSizeLabel(item.size)}
                              {item.isHalfAndHalf && ' (meio a meio)'}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors duration-200"
                        >
                          <X size={18} />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <div className="font-bold text-[#800020]">
                          R$ {(getItemPrice(item) * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer Form */}
                <div className="space-y-4 mb-6">
                  <h3 className="font-semibold text-gray-800">Dados para entrega:</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      value={customer.name}
                      onChange={(e) => onCustomerChange({ ...customer, name: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Endereço completo *
                    </label>
                    <textarea
                      value={customer.address}
                      onChange={(e) => onCustomerChange({ ...customer, address: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent h-20 resize-none"
                      placeholder="Rua, número, bairro, cidade"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Forma de pagamento *
                    </label>
                    <select
                      value={customer.paymentMethod}
                      onChange={(e) => onCustomerChange({ ...customer, paymentMethod: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent"
                    >
                      <option value="">Selecione a forma de pagamento</option>
                      <option value="Dinheiro">Dinheiro</option>
                      <option value="Cartão de Crédito">Cartão de Crédito</option>
                      <option value="Cartão de Débito">Cartão de Débito</option>
                      <option value="PIX">PIX</option>
                    </select>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t bg-white p-4 space-y-4">
              {/* Taxa de entrega */}
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Taxa de entrega:</span>
                <span>R$ {deliveryFee.toFixed(2)}</span>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between text-xl font-bold">
                <span>Total:</span>
                <span className="text-[#800020]">R$ {totalWithDelivery.toFixed(2)}</span>
              </div>
              
              <button
                onClick={onFinishOrder}
                disabled={!customer.name || !customer.address || !customer.paymentMethod}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <span>🍕</span>
                <span>Finalizar Pedido via WhatsApp</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
