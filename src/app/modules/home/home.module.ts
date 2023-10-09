import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from "@angular/router";
import {NgxMaskDirective, provideEnvironmentNgxMask} from "ngx-mask";
import {ReactiveFormsModule} from "@angular/forms";
import {ApiService} from "@app/modules/home/services/api.service";
import {HttpClientModule} from "@angular/common/http";
import { MessageBlockComponent } from './components/message-block/message-block.component';
import {TranslateService} from "@app/modules/home/services/translate.service";
import {TranslatePipe} from "@app/modules/home/pipes/translate.pipe";
import { SmallBlockComponent } from './components/small-block/small-block.component';
import { MidBlockComponent } from './components/mid-block/mid-block.component';
import {AnimationsModule} from "@app/modules/animations/animations.module";
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryItemComponent } from './components/gallery/gallery-item/gallery-item/gallery-item.component';
import {CarouselModule} from "ngx-owl-carousel-o";

@NgModule({
  declarations: [
    HomeComponent,
    MessageBlockComponent,
    SmallBlockComponent,
    MidBlockComponent,
    GalleryComponent,
    GalleryItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: HomeComponent
    }]),
    NgxMaskDirective,
    ReactiveFormsModule,
    HttpClientModule,
    TranslatePipe,
    AnimationsModule,
    CarouselModule
  ],
  providers: [
    provideEnvironmentNgxMask(),
    ApiService,
    TranslateService
  ]
})
export class HomeModule { }
