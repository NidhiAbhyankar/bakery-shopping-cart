import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Location } from '@angular/common';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  productItem: Product | any;
  public cartItems: any[] = [];

  cartTotal = 0;
  removedFromCart = false;
  @Input() cartItem: any;

  constructor(
    private cartService: CartService,
    public _router: Router,
    public _location: Location
  ) {}

  ngOnInit(): void {}

  handleRemoveFromCart(value: any) {
    //console.log(value);
    this.cartService.removeFromCart(value).subscribe(() => {
      this.removedFromCart = true;
      // this.loadCartItems();
      //console.log('test');
      this.reloadCurrentRoute();
      //console.log('test2');
    });
  }
  reloadCurrentRoute(): void {
    this._router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      // console.log('hii');
      this.cartItems = items;
      this.calCartTotal();
      // console.log('hii again');
      // console.log(items);
    });
  }
  calCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach((item) => {
      this.cartTotal += item.qty * item.price;
    });
  }
}
