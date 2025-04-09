import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core'

@Directive({
  selector: '[appAccordionToggle]',
  standalone: true,
})
export class AccordionToggleDirective {
  @Input('appAccordionToggle') targetId!: string // Input to bind the target content ID

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('click') toggleAccordion() {
    const targetElement = document.querySelector(this.targetId) as HTMLElement

    if (targetElement) {
      const accordionGroup = targetElement.closest('.hs-accordion-group') // Find the group
      if (accordionGroup) {
        const allBodies = accordionGroup.querySelectorAll(
          '.block, .hidden'
        ) as NodeListOf<HTMLElement>
        const allButtons = accordionGroup.querySelectorAll(
          'button[aria-expanded]'
        ) as NodeListOf<HTMLButtonElement>

        // Close all other accordions
        allBodies.forEach((body) => {
          if (body !== targetElement) {
            this.renderer.addClass(body, 'hidden')
            this.renderer.removeClass(body, 'block')
          }
        })

        allButtons.forEach((button) => {
          if (button !== this.el.nativeElement) {
            button.setAttribute('aria-expanded', 'false')
            const icon = button.querySelector('[data-accordion-icon]')
            icon?.classList.remove('rotate-180')
          }
        })

        // Toggle the current accordion
        const isHidden = targetElement.classList.contains('hidden')
        if (isHidden) {
          this.renderer.removeClass(targetElement, 'hidden')
          this.renderer.addClass(targetElement, 'block')
          this.renderer.setAttribute(
            this.el.nativeElement,
            'aria-expanded',
            'true'
          )
          this.rotateIcon(true)
        } else {
          this.renderer.addClass(targetElement, 'hidden')
          this.renderer.removeClass(targetElement, 'block')
          this.renderer.setAttribute(
            this.el.nativeElement,
            'aria-expanded',
            'false'
          )
          this.rotateIcon(false)
        }
      }
    }
  }

  private rotateIcon(isExpanded: boolean) {
    const icon = this.el.nativeElement.querySelector('[data-accordion-icon]')
    if (icon) {
      const rotationClass = 'rotate-180'
      if (isExpanded) {
        this.renderer.addClass(icon, rotationClass)
      } else {
        this.renderer.removeClass(icon, rotationClass)
      }
    }
  }
}
