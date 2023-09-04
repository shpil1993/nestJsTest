import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryDto } from './categories.dto';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient) { }

  public getCategories() {
    return this.httpClient.get<CategoryDto[]>('http://127.0.0.1:3000/categories');
  }
}
