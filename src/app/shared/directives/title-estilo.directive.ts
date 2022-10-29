import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitleEstilo]'
})
export class TitleEstiloDirective implements OnInit{

 

  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void{
    this.renderer.setStyle(this.elemento.nativeElement, 'font-size','20px')
  }
}
