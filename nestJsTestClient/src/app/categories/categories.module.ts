import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoriesService } from './categories.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule
  ],
  exports: [
    CategoriesComponent
  ],
  providers: [
    CategoriesService
  ]
})
export class CategoriesModule { }
