import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  // private urlParams: any = {};
  private url = 'https://rickandmortyapi.com/api/character/';
  items: any;
  urlParams: any = {};

  constructor(private httpClient: HttpClient) {}

  getItems(urlParams: any = {}): Observable<any> {
    let filterUrl =
      this.url +
      `?page=${urlParams.page ? urlParams.page : ''}&name=${
        urlParams.search ? urlParams.search : ''
      }`;

    return this.httpClient.get(filterUrl);
  }

  getItemsByUrl(url: string): Observable<any> {
    return this.httpClient.get(url);
  }

  getCharacter(id: any): Observable<any> {
    let finalUrl = this.url + id;
    return this.httpClient.get(finalUrl);
  }

}
