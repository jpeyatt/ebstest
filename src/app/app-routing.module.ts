import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
    ];
    
    @NgModule({
      // imports: [ RouterModule.forRoot(appRoutes, { useHash: true }) ],
      imports: [ RouterModule.forRoot(appRoutes) ],
      exports: [ RouterModule ]
    })
    export class AppRoutingModule { }