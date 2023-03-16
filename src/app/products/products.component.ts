import { Component } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

    products: Product[] = [
      {id:1, name: 'PC', price: 350, onSale: true, quantity: 60, productOnSale: 20},
      {id:2, name: 'clavier', price: 50, onSale: false, quantity: 20, productOnSale: 15},
      {id:3, name: 'souris', price: 20, onSale: true, quantity: 35, productOnSale: 15}
    ]

    constructor() {

    }
}
