import React, { useEffect, useRef } from 'react';
import { MenuItem } from './MenuItem';
import { MenuItem as MenuItemType } from '../types';

interface MenuSectionProps {
  id: string;
  title: string;
  items: MenuItemType[];
  onAddToCart: (
    item: MenuItemType, 
    size: 'small' | 'medium' | 'large',
    quantity: number,
    isHalfAndHalf: boolean,
    halfAndHalfPartner?: MenuItemType
  ) => void;
  allItems: MenuItemType[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({ 
  id, 
  title, 
  items, 
  onAddToCart, 
  allItems 
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.menu-item');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className="py-16 px-4 bg-[#f8f8f8]"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#800020] mb-12 animate-fade-in-up">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div 
              key={item.id} 
              className="menu-item opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <MenuItem 
                item={item} 
                onAddToCart={onAddToCart}
                allItems={allItems}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};