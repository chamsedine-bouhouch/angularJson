import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ListAllProductsComponent } from './list-all-products/list-all-products.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    ListAllProductsComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    ViewProductComponent,
    ViewAllProductsByCategoryComponent,
    ProductListComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, FormsModule],
})
export class ProductsModule {}
