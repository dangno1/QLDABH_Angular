import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { IProduct } from 'src/app/interface/products';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent {
  product = {
    name: '',
    price: 0,
    img: '',
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  productForm = this.formBuilder.group({
    name: '',
    price: 0,
    img: '',
  });

  onHanldeAdd() {
    if (this.productForm.valid) {
      const product: IProduct = {
        name: this.productForm.value.name || '',
        price: this.productForm.value.price || 0,
        img: this.productForm.value.img || '',
      };
      this.productService.addProduct(product).subscribe((data) => {
        this.product = data;
        console.log(data);
        this.router.navigate(['/admin/product']);
      });
    }
  }
}
