import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  categoriesList: Category |any;
   constructor( public productsService: ProductsService,
    private router:Router) { }

 ngOnInit(): void {
   
     this.productsService.getAllCategories().subscribe(categoriesData=>{
       this.categoriesList=categoriesData;
       console.table(this.categoriesList);

     }
       )
   }
   addNewProduct(form: { value: { name: any; quantity: any; categoryId: any; price: any; reference: any; image: any; description: any; }; }){
     console.log(form.value);
     let newProduct={
      name: form.value.name,
      quantity: form.value.quantity,
      categoryId: form.value.categoryId,
      price: form.value.price,
      reference: form.value.reference,
      image:form.value.image,
       description:form.value.description
     }
     console.log(newProduct);
     this.productsService.createProduct(newProduct).subscribe(data=>{
      console.log(data);

     })
      this.router.navigate(['/products']);


     
   }
 }


