import { CommonModule } from '@angular/common'
import { Component, HostListener, Input } from '@angular/core'
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to'
import { ScrollTrackerService } from '../../other/scroll/scroll.tracker.service'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ScrollToModule],
  templateUrl: './navbar.component.html',
  styles: ``,
  providers: [ScrollToService],
  styleUrls:['./navbar.component.scss']
})
export class NavbarComponent {
  activeLink: string = 'home' // The default active link
  isNavbarOpen = false
  isSticky = false
  @Input() navbarColor: boolean = false

  constructor(private scrollTracker: ScrollTrackerService) {}

  ngOnInit() {
    this.scrollTracker.activeSection$.subscribe((section : any) => {
      this.activeLink = section;
    });

    this.scrollTracker.activeSticky$.subscribe((isSticky: boolean) =>{
      this.isSticky = isSticky;
    })
  }
  
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen
  }
  
  setActiveLink(link: string): void {
    this.activeLink = link;
  }

  closeMenu() {
    this.isNavbarOpen = false;
  }

  @HostListener('window:resize', [])
  onResize() {
    if (window.innerWidth > 992.98) {
      this.isNavbarOpen = false;
    }
  }
}
