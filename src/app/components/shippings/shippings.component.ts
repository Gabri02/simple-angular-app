import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shippings',
  templateUrl: './shippings.component.html',
  styleUrls: ['./shippings.component.sass'],
})
export class ShippingsComponent implements OnInit {
  shippingCost!: Observable<{ type: string; price: number }[]>;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.shippingCost = this.cartService.getShippings();
  }
}
