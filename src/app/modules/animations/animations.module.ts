import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AnimateAfterAppearDirective} from "@app/modules/animations/directives/animate-after-appear.directive";
import {IntersectionObserverService} from "@app/modules/animations/directives/intersection-observer.service";

@NgModule({
  declarations: [AnimateAfterAppearDirective],
  imports: [
    CommonModule,
    
  ],
  exports: [
    AnimateAfterAppearDirective
  ],
  providers: [
    IntersectionObserverService,
  ]
})
export class AnimationsModule { }
