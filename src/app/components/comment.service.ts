/**
 * Created by lenovo on 2017/8/2.
 */
/**
 * Created by lenovo on 2017/8/1.
 */

/**
 * Created by lenovo on 2017/7/15.
 */
import { Injectable } from '@angular/core';

import { Comment } from './comment';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CommentService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private timuUrl = 'http://192.168.0.101:8888/SSH/StudentProblemComm?problem_id=';  //
  constructor(private http: Http) {
  };
  getComment(id:string): Promise<Comment[]> {
    return this.http.get(this.timuUrl+id)
      .toPromise()
      .then(response => response.json() as Comment[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
