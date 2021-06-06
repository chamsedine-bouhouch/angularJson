import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  productId=0;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private productsService:ProductsService ) { 
    this.activatedRoute.params.subscribe(data=>{
      this.productId=data.id;
    })
  }

  ngOnInit(): void {
    this.productsService.deleteProduct(this.productId).subscribe(deletedData=>{
      console.table(deletedData);
  });  }

}
