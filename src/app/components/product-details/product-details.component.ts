import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id: any;
  name!: String;
  description!: String;
  price!: number;
  imageUrl!: String;

  productList: any = [];
  constructor(
    private router: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.params['value'];
    //console.log(this.id);
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;

      for (let item in this.productList) {
        if (this.productList[item].id == this.id) {
          this.name = this.productList[item].name;
          this.description = this.productList[item].description;
          this.imageUrl = this.productList[item].imageUrl;
          this.price = this.productList[item].price;
          break;
        } else {
          continue;
        }
      }
    });
  }
}
