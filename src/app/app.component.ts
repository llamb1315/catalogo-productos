import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule
import { ProductCatalogComponent } from './views/product-catalog/product-catalog.component'; // Importa ProductCatalogComponent

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterModule, ProductCatalogComponent] // Importa módulos necesarios
})
export class AppComponent {
  title = 'Mi App Angular';
}
//aa
