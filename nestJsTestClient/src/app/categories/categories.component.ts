import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryDto } from './categories.dto';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Output() selectionChanged = new EventEmitter<(number | undefined)[] | undefined>();

  public categories?: CategoryDto[];
  
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe({
      next: (x) => {
        this.categories = x;
      }
    });
  }

  public categorySelectionChanged() {
    let ids = this.categories?.filter((v, i) => {
      return v.selected;
    }).map((v, i) => {
      return v.id;
    });
    this.selectionChanged.emit(ids);
  }
}
