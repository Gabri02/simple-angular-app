import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService, Product } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass'],
})
export class ProductsListComponent implements OnInit {
  products: any;
  product: Product;
  idProduct: any;
  isProduct: boolean;

  share() {
    window.alert('The product has been shared!');
  }

  notify() {
    window.alert("You'll be notified!");
  }

  constructor(
    private ProductsService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.products = this.ProductsService.getProducts();
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert("you're product has been added to cart");
  }
}
