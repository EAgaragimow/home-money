import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BillService {

  constructor(private http: HttpClient) {
  }

  getBill() {
    return this.http.get('http://localhost:3000/bill');
  }

  getCurrency() {
    return this.http.get(`http://data.fixer.io/api/latest?access_key=2a127cfc286983840f7b3da056baca60`);
  }
}
