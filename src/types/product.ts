export interface Product {
  id: number;
  name: string;
  desc: string;
  image: string;
  price: number;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}
