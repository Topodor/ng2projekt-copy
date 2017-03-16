import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {ORDERBY_PROVIDERS} from './orderedBy';
import { LowestPriceComponent } from './lowest-price/lowest-price.component';
import { HighestPriceComponent } from './highest-price/highest-price.component';
import { AvailableProductComponent } from './available-product/available-product.component';
import { MenuComponent } from './menu/menu.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SortProdBtnComponent } from './sort-prod-btn/sort-prod-btn.component';


const routes: Routes = [
  {path: '', redirectTo: '/all-products', pathMatch:'full'},
  {path: 'all-products', component: HomePageComponent},
  {path: 'pris-lowest', component: LowestPriceComponent},
  {path: 'pris-highest', component: HighestPriceComponent},
  {path: 'in-stock', component: AvailableProductComponent}

];

@NgModule({
  declarations: [
    AppComponent, 
    ORDERBY_PROVIDERS, 
    LowestPriceComponent,
    HighestPriceComponent,
    AvailableProductComponent,
    MenuComponent,
    HomePageComponent,
    SortProdBtnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
