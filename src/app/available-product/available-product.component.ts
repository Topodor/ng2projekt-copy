import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.services';

@Component({
  selector: 'app-available-product',
  templateUrl: './available-product.component.html',
  styleUrls: ['./available-product.component.css'],
  providers: [ProductService]
})
export class AvailableProductComponent implements OnInit {

   products;

  constructor(private productService: ProductService) { }

  getProducts(): void {
    this.productService.getProducts()
        .then(products => this.products = products)

        
  }

  ngOnInit() {
    this.getProducts();
  }

}
