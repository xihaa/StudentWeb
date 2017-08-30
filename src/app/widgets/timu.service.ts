
/**
 * Created by lenovo on 2017/7/15.
 */
import { Injectable } from '@angular/core';

import { Timu } from './timu';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TimuService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private timuUrl = 'api/timus';
  constructor(private http: Http) { };
  getTimus(): Promise<Timu> {
    return this.http.get(this.timuUrl)
      .toPromise()
      .then(response => response.json() as Timu)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
/**
 * Created by lenovo on 2017/7/17.
 */
