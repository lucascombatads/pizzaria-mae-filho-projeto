export interface MenuItem {
  id: string;
  name: string;
  prices: {
    large: number;    // 45cm
    medium: number;   // 35cm  
    small: number;    // 25cm
  };
  ingredients: string[];
  image: string;
  category: 'salgada' | 'doce' | 'bebida';
}

export interface CartItem {
  id: string;
  menuItem: MenuItem;
  size: 'small' | 'medium' | 'large';
  quantity: number;
  isHalfAndHalf?: boolean;
  halfAndHalfPartner?: MenuItem;
}

export interface Customer {
  name: string;
  address: string;
  paymentMethod: string;
}