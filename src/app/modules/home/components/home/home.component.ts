import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslateService} from "@app/modules/home/services/translate.service";
import {map} from "rxjs";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  blocks$ = this.translateService.blocks$;
  bigBlock$ = this.translateService.blocks$.pipe(map(bs => bs.find((b: any) => b.type === 'bigBlock')));
  constructor(private translateService: TranslateService) {

  }
}
