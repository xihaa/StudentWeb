
/**
 * Created by lenovo on 2017/7/15.
 */
import { Injectable } from '@angular/core';

/*import { Cuoti } from './cuoti';*/
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class IdlistService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private timuUrl = 'http://192.168.0.101:8888/SSH/find?sub=';  //
  constructor(private http: Http) {
  };
  getIdlist(subject:string): Promise<Array<string>> {
    return this.http.get(this.timuUrl+subject)
      .toPromise()
      .then(response => response.json() as Array<string>)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
