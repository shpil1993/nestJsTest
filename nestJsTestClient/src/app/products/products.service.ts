import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDto } from './products.dto';
import { Router, UrlSerializer } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient, private router: Router, private serializer: UrlSerializer) { }

  public getProducts(query: any) {
    let url = 'http://127.0.0.1:3000/products';
    const tree = this.router.createUrlTree([], { queryParams: query });
    return this.httpClient.get<[ProductDto[], number]>(url + this.serializer.serialize(tree));
  }
}
