import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BaseComponent} from "@app/modules/core/components/base-component/base-component";

@Component({
  selector: 'app-mid-block',
  templateUrl: './mid-block.component.html',
  styleUrls: ['./mid-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MidBlockComponent extends BaseComponent {
  @Input() darken: boolean = true;

}
