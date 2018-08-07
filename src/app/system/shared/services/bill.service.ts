import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {BaseApi} from '../../../shared/core/base-api';
import {Bill} from '../models/bill-model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BillService extends BaseApi {

  constructor(public http: HttpClient) {
  	super(http);
  }

  getBill(): Observable<Bill> {
  	return this.get('bill');
  }

  getCurrency(): Observable<any> {
    return this.http.get(`http://data.fixer.io/api/latest?access_key=2a127cfc286983840f7b3da056baca60`);
  }
}
