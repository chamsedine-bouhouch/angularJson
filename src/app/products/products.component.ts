import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { Product } from '../model/product';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   productsList: Product|any;
   categoriesList: Category|any;

    constructor( public productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe( data=>{
      this.productsList= data;
      console.table(this.productsList);
      this.productsService.getAllCategories().subscribe(categoriesData=>{
        this.categoriesList=categoriesData;
        console.table(this.categoriesList);

      }
        )
    })
  }

}
