import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Category } from './Category';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  

  getData():Observable<Category[]>
  {   
    const tokenString = localStorage.getItem('token');
    const tokenObject = JSON.parse(tokenString || '{}');
    
    // Set the token in the request headers
    const headers = new HttpHeaders().set('Authorization', `Bearer ${tokenObject.token}`);
    return this.http.get<Category[]>('https://localhost:7182/api/Categories',{headers})
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`https://localhost:7182/api/Categories/${id}`);
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>('https://localhost:7182/api/Categories', category);
  }

  updateCategory(catid:number,category: Category): Observable<Category> {
    return this.http.put<Category>(`https://localhost:7182/api/Categories/${catid}`, category);
  }

  deleteCategory(categoryId: number): Observable<void> {
    return this.http.delete<void>(`https://localhost:7182/api/Categories/${categoryId}`);
  }

  

}
