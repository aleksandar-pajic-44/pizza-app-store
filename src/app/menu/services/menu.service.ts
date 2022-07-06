import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Menu } from '../model/menu.model';

@Injectable({ providedIn: 'root' })

export class MenuService {

  private menuItemUrl = 'https://run.mocky.io/v3/8189a948-cdf2-47a1-9698-f765d50f0f94';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
    
  getMenuItems() {
    return this.http.get<Menu[]>(this.menuItemUrl).pipe(
      // Sort array by date - descending order
      map(menuItemUrl => menuItemUrl.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())),
    );
  }
}