import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductController {
  private products: Product[] = [
    new Product(1, 'Product A', 50),
    new Product(2, 'Product B', 30),
    new Product(3, 'Product C', 70)
  ];

  getProducts(): Product[] {
    return this.products.sort((a, b) => a.price - b.price);
  }

  searchProducts(query: string): Product[] {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }
}
