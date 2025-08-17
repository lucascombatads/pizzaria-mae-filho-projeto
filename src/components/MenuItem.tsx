import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { MenuItem as MenuItemType } from '../types';

interface MenuItemProps {
  item: MenuItemType;
  onAddToCart: (
    item: MenuItemType, 
    size: 'small' | 'medium' | 'large',
    quantity: number,
    isHalfAndHalf: boolean,
    halfAndHalfPartner?: MenuItemType
  ) => void;
  allItems?: MenuItemType[];
}

export const MenuItem: React.FC<MenuItemProps> = ({ item, onAddToCart, allItems = [] }) => {
  const [selectedSize, setSelectedSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [quantity, setQuantity] = useState(1);
  const [isHalfAndHalf, setIsHalfAndHalf] = useState(false);
  const [halfAndHalfPartner, setHalfAndHalfPartner] = useState<string>('');

  const getSizeLabel = (size: string) => {
    switch (size) {
      case 'small': return '25cm';
      case 'medium': return '35cm';
      case 'large': return '45cm';
      default: return '';
    }
  };

  const handleAddToCart = () => {
    let partner: MenuItemType | undefined;
    if (isHalfAndHalf && halfAndHalfPartner) {
      partner = allItems.find(i => i.id === halfAndHalfPartner);
    }
    
    onAddToCart(item, selectedSize, quantity, isHalfAndHalf, partner);
    setQuantity(1);
    setIsHalfAndHalf(false);
    setHalfAndHalfPartner('');
  };

  const getCurrentPrice = () => {
    let price = item.prices[selectedSize];
    if (isHalfAndHalf && halfAndHalfPartner) {
      const partner = allItems.find(i => i.id === halfAndHalfPartner);
      if (partner) {
        price = Math.max(price, partner.prices[selectedSize]);
      }
    }
    return price;
  };

  // Filter items for half and half (same category, exclude current item)
  const halfAndHalfOptions = allItems.filter(i => 
    i.category === item.category && i.id !== item.id
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-slide-up">
      <div className="relative overflow-hidden h-48">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
        
        {item.ingredients.length > 0 && (
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            {item.ingredients.join(', ')}
          </p>
        )}

        {/* Size Selection for Pizzas */}
        {item.category !== 'bebida' && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tamanho:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(item.prices).map(([size, price]) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size as 'small' | 'medium' | 'large')}
                  className={`p-2 text-sm rounded-lg border transition-colors duration-200 ${
                    selectedSize === size
                      ? 'bg-[#800020] text-white border-[#800020]'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-[#800020]'
                  }`}
                >
                  {getSizeLabel(size)}
                  <br />
                  <span className="font-bold">R$ {price}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Half and Half Option for Pizzas */}
        {item.category !== 'bebida' && halfAndHalfOptions.length > 0 && (
          <div className="mb-4">
            <label className="flex items-center space-x-2 mb-2">
              <input
                type="checkbox"
                checked={isHalfAndHalf}
                onChange={(e) => setIsHalfAndHalf(e.target.checked)}
                className="rounded border-gray-300 text-[#800020] focus:ring-[#800020]"
              />
              <span className="text-sm font-medium text-gray-700">
                Fazer meio a meio
              </span>
            </label>
            
            {isHalfAndHalf && (
              <select
                value={halfAndHalfPartner}
                onChange={(e) => setHalfAndHalfPartner(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent"
              >
                <option value="">Escolha o outro sabor</option>
                {halfAndHalfOptions.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.name} - R$ {option.prices[selectedSize]}
                  </option>
                ))}
              </select>
            )}
          </div>
        )}

        {/* Quantity */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quantidade:
          </label>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200"
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200"
            >
              +
            </button>
          </div>
        </div>

        {/* Price and Add Button */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-[#800020]">
            R$ {(getCurrentPrice() * quantity).toFixed(2)}
          </div>
          <button
            onClick={handleAddToCart}
            disabled={isHalfAndHalf && !halfAndHalfPartner}
            className="bg-[#800020] text-white px-6 py-2 rounded-full hover:bg-[#600018] transition-colors duration-200 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
          >
            <Plus size={18} />
            <span>Adicionar</span>
          </button>
        </div>
      </div>
    </div>
  );
};