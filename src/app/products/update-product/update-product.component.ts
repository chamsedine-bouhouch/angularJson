import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  categoriesList: Category |any;
  productId=0;
productDetails: Product|any; 
  constructor( 
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router:Router) { 
  

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId=data.id;
    });
    this.productsService.getAllCategories().subscribe(categoriesData=>{
      this.categoriesList=categoriesData;
      console.table(this.categoriesList);
  });
  this.productsService.viewProduct(this.productId).subscribe(data =>{
    this.productDetails = data;
    console.table(this.productDetails);

        })
}
updateProduct(form: { value: { name: any; quantity: any; categoryId: any; price: any; reference: any; image: any; description: any; }; }){
  let updatedProduct={
    id:   this.productId,
    name: form.value.name,
    quantity: form.value.quantity,
    categoryId: form.value.categoryId,
    price: form.value.price,
    reference: form.value.reference,
    image:form.value.image,
    description:form.value.description
   }
  this.productsService.updateProduct(this.productId,updatedProduct).subscribe(updatedData=>{
    console.log(updatedData);
  });
  this.router.navigate(['/products']);

}
}


