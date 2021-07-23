export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;

  constructor(
    id: number,
    name: string,
    description = '',
    price = 0,
    imageUrl = 'https://i.pinimg.com/originals/c5/5c/aa/c55caa0e09b4ae0086fd6bd075bef8fa.jpg'
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
