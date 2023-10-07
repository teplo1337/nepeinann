import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BaseComponent} from "@app/modules/core/components/base-component/base-component";

@Component({
  selector: 'app-small-block',
  templateUrl: './small-block.component.html',
  styleUrls: ['./small-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmallBlockComponent extends BaseComponent {

}
