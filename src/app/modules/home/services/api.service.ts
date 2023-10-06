import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMessagePayload} from "@app/modules/home/interfaces/standard-responce.interface";
import {IStandardResponse} from "@app/modules/home/interfaces/message-payload.interface";

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  postMessage(body: IMessagePayload): Observable<IStandardResponse> {
    return this.http.post<IStandardResponse>('/api/v1/message', body);
  }
}
