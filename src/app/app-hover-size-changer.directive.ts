import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appHoverSizeChanger]',
  standalone: true
})
export class AppHoverSizeChangerDirective {

  @Output() grow = new EventEmitter<string>();
  @Output() reduce = new EventEmitter<string>();
  @Input() maxSize!: string;


  #initialSize: string = "48px";
  #currentSize: string = this.#initialSize;

  @HostBinding("style.font-size") get fontSize(): string {
    return this.#currentSize;
  }

  @HostListener('mouseenter') onHover(): void {
    this.#increaseCurrentSize();
    this.grow.emit(this.#currentSize);
  }

  @HostListener('mouseleave') onLeave(){
    this.#reduceCurrentSize();
    this.reduce.emit(this.#currentSize)
  }

  #increaseCurrentSize() {
    this.#currentSize = this.maxSize;
  }

  #reduceCurrentSize() {
    this.#currentSize = this.#initialSize;
  }

  @HostBinding('style.transition') get transition(): string {
    return '1s ease';
  }

}
