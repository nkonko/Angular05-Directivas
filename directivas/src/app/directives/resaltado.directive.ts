import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private elRef: ElementRef, ) {
  }

  @Input('appResaltado') colour: string;

  @HostListener('mouseenter') mouseEnter()
  {
      this.resaltar(this.colour || 'yellow');
  }

  @HostListener('mouseleave') mouseLeave()
  {
    this.resaltar(this.colour || null);
  }

  private resaltar(colour: string): void{
    this.elRef.nativeElement.style.backgroundColor = colour ;
  }
}
