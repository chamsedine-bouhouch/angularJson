import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router'
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { OrdersModule } from "./orders/orders.module";
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';


const routes: Routes=[
  {path:'', redirectTo: '/products', pathMatch:'full'}
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    OrdersModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
