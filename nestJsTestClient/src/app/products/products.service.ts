import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { lastValueFrom } from 'rxjs';
import { ProductDto } from './products.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  public getProducts() {
    return this.httpClient.get<ProductDto[]>('http://127.0.0.1:3000/products');
  }
}
