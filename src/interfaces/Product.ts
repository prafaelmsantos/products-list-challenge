
export interface Plan {
  name: string;
  price: number; 
}

export interface Product {
  id: string;
  name: string;
  description: string;
  categories: string[];
  plans: Plan[];
}
