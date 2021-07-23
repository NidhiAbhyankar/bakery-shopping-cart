import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { productsUrl } from '../config/api';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // products: Product[] = [
  //   new Product(
  //     1,
  //     'Puff Pastry',
  //     'This is product description 1',
  //     120,
  //     'https://www.pngfind.com/pngs/m/283-2835813_transparent-bakery-puff-pastry-breakfast-cake-claw-bakery.png'
  //   ),
  //   new Product(
  //     2,
  //     'Truffle Chocolate Cake',
  //     'This is product description 2',
  //     180,
  //     'https://e7.pngegg.com/pngimages/647/539/png-clipart-chocolate-cake-chocolate-truffle-chocolate-cake-black-forest-gateau-birthday-cake-bakery-delicious-cakes-food-cake-decorating.png'
  //   ),
  //   new Product(
  //     3,
  //     'Cookie Biscuit',
  //     'This is product description 3',
  //     220,
  //     'https://img.favpng.com/2/10/2/bakery-cookie-biscuit-baking-cake-png-favpng-vSw0XES9QqaZi18a4h8AyT38x.jpg'
  //   ),
  //   new Product(
  //     4,
  //     'Chocolate Cookie',
  //     'This is product description 4',
  //     100,
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgEipngvIE0NZAsvhDPZcamKjXC2g_fkBNw&usqp=CAU'
  //   ),
  //   new Product(
  //     5,
  //     'Double Choco Cake ',
  //     'This is product description 5',
  //     150,
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDGoVhfPcPzjXlzsWELdak3i3wWmbZQMkUMg&usqp=CAU'
  //   ),
  //   new Product(
  //     6,
  //     'Chocolate Cake',
  //     'This is product description 6',
  //     200,
  //     'https://freepikpsd.com/media/2019/10/bakery-cake-png-2-Images-PNG-Transparent.png'
  //   ),
  // ];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(productsUrl);
  }
}
