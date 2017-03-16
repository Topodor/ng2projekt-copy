import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-prod-btn',
  templateUrl: './sort-prod-btn.component.html',
  styleUrls: ['./sort-prod-btn.component.css']
})
export class SortProdBtnComponent implements OnInit {

  constructor() { }

  mYtext;

  ngOnInit() {
    this.mYtext = "Sort Products as available";
  }

  performSearch(searchTerm: HTMLInputElement): void {
    console.log(`value: ${searchTerm.value}`);
  }
  performSort(input): void {
    switch (input) {
      case 'none':
        this.mYtext = "All Products";
        break;
      case 'pris-':
        this.mYtext = "Sorted by highest prices";
        break;
      case 'pris+':
        this.mYtext = "Sorted by lowest prices";
        break;
      case 'inStock':
        this.mYtext = "Products in stock";
        break;
    }
  }
}
