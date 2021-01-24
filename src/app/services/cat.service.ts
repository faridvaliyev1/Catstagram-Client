import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import { ICat } from '../models/cats';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private catPath=environment.apiUrl+"cats";
  constructor(private http:HttpClient,private authService:AuthService) { }

  create(data): Observable<ICat>{
    return this.http.post<ICat>(this.catPath,data)
  }

  getCats(): Observable<Array<ICat>>{
    return this.http.get<Array<ICat>>(this.catPath)
  }
}
