import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products = [
    {
      id: 1,
      price: 200,
      description:
        'Apple iPhone X - Display da 5.8 pollici, fotocamera da 12 MP, 64 GB di memoria',
      name: 'IPhone X',
    },
    {
      id: 2,
      price: 399,
      description:
        'Apple iPhone XR - Display da 6.1 pollici, fotocamera da 12 MP, 128 GB di memoria',
      name: 'IPhone XR',
    },
    {
      id: 3,
      price: 700,
      description:
        'Apple iPhone XS - Display da 5.8 pollici, fotocamera da 12 MP, 256 GB di memoria',
      name: 'IPhone XS',
    },
    {
      id: 8,
      price: 550,
      description:
        'Apple iPhone 11 - Display da 6.1 pollici, fotocamera da 12 MP, 128 GB di memoria',
      name: 'IPhone 11',
    },
  ];

  constructor() {}

  getProducts() {
    return this.products;
  }

  getProduct(i: number) {
    return this.products[i];
  }
}

export interface Product {
  id: number,
  price: number,
  description: string,
  name: string
}
