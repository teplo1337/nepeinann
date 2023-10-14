import {Injectable, isDevMode} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable()
export class TranslateService {
  private _translateObject = new BehaviorSubject<any>({
    blocks: []
  });

  blocks$ = this._translateObject.asObservable().pipe(map(r => r.blocks));
  private uri = isDevMode() ? '/assets/json/ru.json' : '/static/json/blocks.json';

  constructor(private http: HttpClient ) {
    this.http.get(this.uri)
      .subscribe(res => this._translateObject.next(res));
  }

  instantTranslate(key: string, id: string, obj = this._translateObject.getValue().blocks) {
    const arr = obj.filter((s: any) => s.child).reduce((a: any[], b: any) => [...a, ...b.child], []);
    const a = [...obj, ...arr]
      .find((b: any) =>  b.id === id);
    return a?.[key];
  }
}
