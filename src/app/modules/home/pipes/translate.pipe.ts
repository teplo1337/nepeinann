import {ChangeDetectorRef, ElementRef, Pipe, PipeTransform} from "@angular/core";
import {TranslateService} from "@app/modules/home/services/translate.service";
import {Observable, tap} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor(private translateService: TranslateService, cdr: ChangeDetectorRef) {
    this.translateService.blocks$
      .pipe(tap(_ => cdr.markForCheck()), takeUntilDestroyed())
      .subscribe();
  }

  transform(value: any, ...arr: any[]): Observable<string> {
    const obj = arr?.[1];
    let result = this.translateService.instantTranslate(value, arr[0]);
    if (obj) {
      Object.keys(obj)
        .forEach(key =>
          result = result.replaceAll(key, obj[key])
        )
    }
    return result;
  }
}
