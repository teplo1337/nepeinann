import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BaseComponent} from "@app/modules/core/components/base-component/base-component";

@Component({
  selector: 'app-gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryImageComponent extends BaseComponent {
  @Input() items: any[] = [];
}
