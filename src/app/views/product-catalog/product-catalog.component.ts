import { Component, OnInit } from '@angular/core';
import { ProductController } from '../../controllers/product.controller';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-catalog',
  standalone: true,
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css'],
  imports: [CommonModule, FormsModule]
  
})
export class ProductCatalogComponent implements OnInit {
  products: Product[] = [];
  searchQuery: string = '';

  constructor(private productController: ProductController) {}

  ngOnInit(): void {
    this.products = this.productController.getProducts();
  }

  onSearch() {
    this.products = this.productController.searchProducts(this.searchQuery);
  }
}
