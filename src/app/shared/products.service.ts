import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}
  // All
  getAllProducts(): Observable<Product> {
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.get<Product>(productUrl);
  }
  // Create
  createProduct(productBody: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.post<Product>(productUrl, productBody);
  }
  // Show
  viewProduct(productId: number) {
    const productUrl = 'http://localhost:3000/products/' + productId;
    return this.httpClient.get<Product>(productUrl);
  }
  // Update
  updateProduct(productId: number, productBody: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/' + productId;
    return this.httpClient.put<Product>(productUrl, productBody);
  }
  // Delete
  deleteProduct(productId: number): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/' + productId;
    return this.httpClient.delete<Product>(productUrl);
  }
  // Search
  searchCategoryProduct(categoryId: number): Observable<Product> {
    const productUrl =
      'http://localhost:3000/products?categoryId=' + categoryId;
    return this.httpClient.get<Product>(productUrl);
  }
  // Categories
  getAllCategories(): Observable<Category> {
    const productUrl = 'http://localhost:3000/categories';
    return this.httpClient.get<Category>(productUrl);
  }
}
