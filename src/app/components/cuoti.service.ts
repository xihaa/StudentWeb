
/**
 * Created by lenovo on 2017/7/15.
 */
import { Injectable } from '@angular/core';

import { Cuoti } from './cuoti';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CuotiService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private timuUrl = 'http://192.168.0.101:8888/SSH/StudentProblemFindpro?problem_id=';  //
  constructor(private http: Http) {
  };
  getCuoti(id:string): Promise<Cuoti> {
    return this.http.get(this.timuUrl+ id )
      .toPromise()
      .then(response => response.json() as Cuoti)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
