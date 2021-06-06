import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/products.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productId=0;
  productDetails: Product | any;

  constructor( private activatedRoute: ActivatedRoute,  private productsService: ProductsService) { 

   
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId=data.id;
      
    });
    this.productsService.viewProduct(this.productId).subscribe(data =>{
      this.productDetails = data;
      console.table(this.productDetails);

          })
  }

}
