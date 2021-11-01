import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productId: string;

  product: Product = {} as Product;

  constructor(
    private activeRouter: ActivatedRoute,
    private productService: ProductService
  ) {
    this.productId = this.activeRouter.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getOneProduct(this.productId);
  }

  getOneProduct(id: string): void {
    //id auto string jika mengambil lewat param
    // const id = String(this.activeRouter.snapshot.paramMap.get("id"));
    this.productService
      .getProductById(id)
      .subscribe((option) => (this.product = option));
  }
}
