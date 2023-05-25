import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/products';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent {
  product!: IProduct;
  productForm = this.formBuilder.group({
    name: '',
    price: 0,
    img: '',
  });

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.productService.getProduct(id).subscribe((data) => {
        this.product = data;

        this.productForm.patchValue({
          name: this.product.name,
          price: this.product.price,
          img: this.product.img,
        });
      });
    });
  }

  onHanldeEdit() {
    // console.log(this.product);
    // this.productService.updateProduct(this.product).subscribe((data) => {
    //   this.product = data;
    //   this.router.navigate(['/admin/product']);
    // })
    if (this.productForm.valid) {
      const product: IProduct = {
        id: this.product.id,
        name: this.productForm.value.name || '',
        price: this.productForm.value.price || 0,
        img: this.productForm.value.img || '',
      };

      this.productService.updateProduct(product).subscribe((data) => {
        this.product = data;
        this.router.navigate(['/admin/product']);
      });
    }
  }
}
