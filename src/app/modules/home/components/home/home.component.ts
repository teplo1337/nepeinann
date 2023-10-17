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
  private blocks$ = this.translateService.blocks$;
  lightBlock$ = this.blocks$.pipe(map(res => res.filter((b: any) => !b.dark)));
  darkBlock$ = this.blocks$.pipe(map(res => res.filter((b: any) => b.dark)));

  bigBlock$ = this.translateService.blocks$.pipe(map(bs => bs.find((b: any) => b.type === 'bigBlock')));
  constructor(private translateService: TranslateService) {

  }
}
