import { Component, OnInit } from '@angular/core';


import { ProductService } from '../product.services';

@Component({
  selector: 'app-highest-price',
  templateUrl: './highest-price.component.html',
  styleUrls: ['./highest-price.component.css'],
  providers: [ProductService]
})
export class HighestPriceComponent implements OnInit {

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
