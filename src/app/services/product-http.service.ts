import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CreateProductDto, ProductModel, UpdateProductDto } from '../modules/product.modul';

@Injectable({
  providedIn: 'root'
})

export class ProductHttpService {
  readonly API_URL:string="https://api.escuelajs.co/api/v1/products";
  constructor(private httpClient: HttpClient) { }

    //*Consultar productos
  getAll():Observable<ProductModel[]> {
    const url=`${this.API_URL}`;
    return this.httpClient.get<ProductModel[]>(url);   
  }

   //*Consultar productos por ID
  getOne(id:ProductModel['id']):Observable<ProductModel> {
    const url =`${this.API_URL}/${id}`;
    return this.httpClient.get<ProductModel>(url);  
  }

   //*Crear Producto
  store(product:CreateProductDto): Observable<ProductModel> {
    return this.httpClient.post<ProductModel>(this.API_URL, product)
  }

  //*Actualizar Producto
  update(id:ProductModel['id'] , product:UpdateProductDto):Observable<ProductModel>{
    const url =`${this.API_URL}/${id}`;
    return this.httpClient.put<ProductModel>(url, product)
  }

  //*Eliminar Producto
  destroy(id: ProductModel['id']):Observable<ProductModel>{
    const url =`${this.API_URL}/${id}`;
    return this.httpClient.delete<ProductModel>(url)
  }
}