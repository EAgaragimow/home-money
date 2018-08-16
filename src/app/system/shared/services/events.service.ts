import {Injectable} from "@angular/core";
import {BaseApi} from "../../../shared/core/base-api";
import {HttpClient} from "@angular/common/http";
import {MELEvent} from "../models/event.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class EventsService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  addEvent(event: MELEvent): Observable<MELEvent> {
    return this.post('events', event);
  }
}
