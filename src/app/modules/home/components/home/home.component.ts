import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslateService} from "@app/modules/home/services/translate.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  blocks$ = this.translateService.blocks$;
  constructor(private translateService: TranslateService) {

  }
}
