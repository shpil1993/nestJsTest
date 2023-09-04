import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { CategoriesModule } from '../categories/categories.module';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatPaginatorModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSidenavModule,
    MatGridListModule,
    CategoriesModule
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }
