import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import {
  animate,
  AnimationBuilder,
  AnimationFactory,
  AnimationPlayer,
  style,
} from '@angular/animations';
import {IntersectionObserverService} from "@app/modules/animations/directives/intersection-observer.service";
import * as buildInAnimations from './fade';

@Directive({
  selector: '[animateAfterAppear]',
})
export class AnimateAfterAppearDirective implements OnInit {
  @Input() animateAfterAppear: 'fadeIn' | 'fadeInDown' | null = null;
  @Input() animationOptions: any; // custom your own animations

  player?: AnimationPlayer;

  constructor(
    private _observer: IntersectionObserverService,
    private el: ElementRef,
    private animationBuilder: AnimationBuilder
  ) {}

  ngOnInit() {
    let animation: AnimationFactory;

    if (
      !!this.animationOptions !== null &&
      this.animationOptions !== undefined
    ) {
      animation = this.animationBuilder.build(this.animationOptions);
    }
    if (
      !!this.animateAfterAppear &&
      !!buildInAnimations[this.animateAfterAppear]
    ) {
      animation = this.animationBuilder.build(
        buildInAnimations[this.animateAfterAppear]
      );
    } else {
      animation = this.animationBuilder.build([
        style({ opacity: 0, transform: 'translateX(-100px)' }),
        animate(
          '1200ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]);
    }

    if (this._observer.isSupported()) {
      this.player = animation.create(this.el.nativeElement);
      this.player.init();

      const callback = this.startAnimating.bind(this);
      this._observer.addTarget(this.el.nativeElement, callback);
    }
  }

  /**
   * Builds and triggers the animation
   * when it enters the viewport
   * @param {boolean} inViewport
   */
  startAnimating(inViewport?: boolean, element?: Element): void {
    if (inViewport) {
      this.player?.play();
    }
  }
}
