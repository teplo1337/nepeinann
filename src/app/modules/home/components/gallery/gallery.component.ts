import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  @Input() items: any[] = [];
  @Input() type: 'block' | 'img' = 'block';

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
      1000:{
        items: 3
      }
    }
  }

}
