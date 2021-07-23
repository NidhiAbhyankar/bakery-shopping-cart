import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  filteredList: Product[] = [];
  wishlist: number[] = [];
  fromValue: any;
  toValue: any;
  //item: any;

  constructor(
    private productService: ProductService,
    private wishlisService: WishlistService,
    private router: ActivatedRoute
  ) {
    this.fromValue = 1;
    this.toValue = 1000;
  }

  ngOnInit(): void {
    this.fromValue = this.router.snapshot.params['fromValue'];
    this.toValue = this.router.snapshot.params['toValue'];
    if (this.fromValue == undefined || this.toValue == undefined) {
      this.fromValue = 1;
      this.toValue = 1000;
    }

    //console.log(this.filteredList);

    this.loadProducts();

    this.loadWishlist();
  }
  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
      this.filteredProducts();
    });
  }

  loadWishlist() {
    this.wishlisService.getWishlist().subscribe((productIds) => {
      this.wishlist = productIds;
    });
  }
  filteredProducts() {
    for (let item of this.productList) {
      if (item.price >= this.fromValue && item.price <= this.toValue) {
        this.filteredList.push(item);
      }
    }
    //console.log(this.filteredList);
  }
}
