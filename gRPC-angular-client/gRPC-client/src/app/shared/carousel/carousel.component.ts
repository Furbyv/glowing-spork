import {
  animate,
  AnimationBuilder,
  AnimationFactory,
  AnimationPlayer,
  style
} from '@angular/animations';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { CarouselItemDirective } from './carousel-item.directive';

//https://netbasal.com/building-a-simple-carousel-component-with-angular-3a94092b7080

@Directive({
  selector: '.carousel-item'
})
export class CarouselItemElement {}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit, OnChanges {
  @ContentChildren(CarouselItemDirective, { descendants: true })
  items!: QueryList<CarouselItemDirective>;
  @ViewChildren(CarouselItemElement, { read: ElementRef })
  private itemsElements!: QueryList<ElementRef>;
  @ViewChild('carousel') private carousel!: ElementRef;
  @Input() timing = '250ms ease-in';
  @Input() showControls = true;
  private player!: AnimationPlayer;
  private itemWidth: number = 0;
  currentSlide: number = 0;
  carouselWrapperStyle = {};

  next() {
    if (this.currentSlide + 1 === this.items.length) return;
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  private buildAnimation(offset: number) {
    return this.builder.build([
      animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
    ]);
  }

  prev() {
    if (this.currentSlide === 0) return;

    this.currentSlide =
      (this.currentSlide - 1 + this.items.length) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;

    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  constructor(private builder: AnimationBuilder) {}

  ngAfterViewInit() {
    this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
    this.carouselWrapperStyle = {
      width: `${this.itemWidth}px`
    };
  }

  ngOnChanges() {
    this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
    this.carouselWrapperStyle = {
      width: `${this.itemWidth}px`
    };
  }
}
