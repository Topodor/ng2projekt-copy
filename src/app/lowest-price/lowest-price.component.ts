import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.services';

@Component({
  selector: 'app-lowest-price',
  templateUrl: './lowest-price.component.html',
  styleUrls: ['./lowest-price.component.css'],
  providers: [ProductService]
})
export class LowestPriceComponent implements OnInit {

   products;

  constructor(private productService: ProductService) { }

  getProducts(): void {
    this.productService.getProducts()
        .then(products => this.products = products);
  }

  ngOnInit() {
    this.getProducts();
  }
 
}
