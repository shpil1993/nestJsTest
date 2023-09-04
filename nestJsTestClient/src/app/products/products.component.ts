import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { ProductDto } from './products.dto';
import { PageEvent } from '@angular/material/paginator';
import { Subject, Subscription, debounceTime, raceWith } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  private searchChanged: Subject<string> = new Subject<string>();
  private subscription?: Subscription;
  private categoryIds?: (number | undefined)[] | undefined;

  public length?: number;
  public pageSize = 5;
  public pageIndex = 0;
  public pageSizeOptions = [5, 10, 25];
  public showFirstLastButtons = true;
  public products?: ProductDto[];
  public search: string = '';
  public more?: number;
  public less?: number;

  constructor(private productsService: ProductsService) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.getProducts();
    this.subscription = this.searchChanged
    .pipe(debounceTime(500))
    .subscribe({
      next: () => {
        this.getProducts();
      }
    });
  }

  public handlePageEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getProducts();
  }

  public onSearchChange(searchValue: any): void {  
    this.search = searchValue;
    this.searchChanged.next(searchValue);
  }

  public onMoreChange(searchValue: any): void {  
    this.more = searchValue;
    this.searchChanged.next(searchValue);
  }

  public onLessChange(searchValue: any): void {  
    this.less = searchValue;
    this.searchChanged.next(searchValue);
  }

  public onCategorySelected(ids: (number | undefined)[] | undefined) {
    this.categoryIds = ids;
    this.getProducts();
  }

  private getProducts() {
    let skip = this.pageSize * this.pageIndex;
    this.productsService.getProducts({ 
      take: this.pageSize, 
      skip: skip, 
      search: this.search,
      categoryIds: this.categoryIds,
      more: this.more,
      less: this.less
    }).subscribe({
      next: (x) => {
        this.products = x[0];
        this.length = x[1];
      }
    });
  }
}
