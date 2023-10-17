import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent {

  @Input() items: any[] = [];
  @Input() type: 'block' | 'img' = 'block';
  @Input() maxPhoto = 3;
  @Input() height: string | null = null

  config = {
    center: true,
    loop: true,
    margin: 30,
    stagePadding: 0,
    nav: false,
    dots: true,
    navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
    responsive:{
      0:{
        items: 1
      },
      600:{
        items: 1
      },
      1060:{
        items: this.maxPhoto
      }
    }
  }

  ngOnInit(): void {
    this.config.responsive["1060"].items = this.maxPhoto;
  }

}
