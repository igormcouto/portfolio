import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core'

@Directive({
  selector: '[appScroll]',
  standalone: true,
})
export class ScrollDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop
    if (scrollPosition > 500) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'inline-flex')
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none')
    }
  }
}
