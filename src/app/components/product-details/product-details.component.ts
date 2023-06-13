import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  idProduct: any;
  constructor(
    private route: ActivatedRoute,
    private ProductsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.idProduct = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.product = this.ProductsService.getProduct(this.idProduct);
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert("you're product has been added to cart");
  }
}
