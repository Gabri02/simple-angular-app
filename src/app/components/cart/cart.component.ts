import { Component } from '@angular/core';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { CartService } from 'src/app/services/cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass'],
})
export class CartComponent {
  constructor(
    private cartServices: CartService,
    private formBuilder: FormBuilder
  ) {}
  items = this.cartServices.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });
  onSubmit(): void {
    this.items = this.cartServices.clearCart();
    console.warn('order submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
