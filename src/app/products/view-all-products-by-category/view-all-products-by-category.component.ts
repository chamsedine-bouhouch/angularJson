import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.css']
})
export class ViewAllProductsByCategoryComponent implements OnInit {
searchCategory=0;
productListCategory:Product|any;
  constructor( 
    private activatedRoute:ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.searchCategory=data.id;
      // console.table(this.searchCategory);

    });
    this.productsService.searchCategoryProduct(this.searchCategory).subscribe(categoryData=>
     { this.productListCategory=categoryData;
      console.table(this.productListCategory);
    })
  }

}
