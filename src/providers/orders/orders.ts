import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the OrdersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrdersProvider {
  url: string;

  constructor(public http: HttpClient) {
    this.url = `http://dataservice.accuweather.com/forecasts/v1/daily/1day`;
  }

}
