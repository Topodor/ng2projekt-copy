import { Component, OnInit } from '@angular/core';


import { ProductService } from '../product.services';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [ProductService]
})
export class HomePageComponent implements OnInit {

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
