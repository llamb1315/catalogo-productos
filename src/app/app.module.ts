import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; // Importa RouterModule
import { ProductCatalogComponent } from './views/product-catalog/product-catalog.component';
import { ProductController } from './controllers/product.controller';

const appRoutes: Routes = [
  { path: '', component: ProductCatalogComponent } // Configura la ruta predeterminada
];

@NgModule({
  declarations: [
     // Elimina AppComponent de aquí :o
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) // Configura RouterModule
  ],
  providers: [ProductController]
})
export class AppModule { }
