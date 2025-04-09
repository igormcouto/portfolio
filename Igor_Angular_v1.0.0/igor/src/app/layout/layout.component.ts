import {
  Component,
  HostListener
} from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { AboutComponent } from "../components/about/about.component";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { ClientComponent } from "../components/client/client.component";
import { WorkComponent } from "../components/work/work.component";
import { ServiceComponent } from "../components/service/service.component";
import { TestimonialComponent } from "../components/testimonial/testimonial.component";
import { BlogComponent } from "../components/blog/blog.component";
import { ContactComponent } from "../components/contact/contact.component";
import { FooterComponent } from "../components/footer/footer.component";
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { ScrollDirective } from '../directive/scroll.directive';
import { ScrollTrackerService } from '../other/scroll/scroll.tracker.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    ScrollToModule,
    ScrollDirective,
    CommonModule,
    RouterModule,
    AboutComponent,
    NavbarComponent,
    ClientComponent,
    WorkComponent,
    ServiceComponent,
    TestimonialComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent
],
  templateUrl: './layout.component.html',
  styles: ``,
  providers: [ScrollToService],
})
export class LayoutComponent {

  constructor(private scrollTracker: ScrollTrackerService) {}

  @HostListener('window:scroll', [])

  onWindowScroll() {
    const sections = document.querySelectorAll('section');
    let scrollPosition = window.scrollY + 200; // Offset para ativar antes

    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) 
      this.scrollTracker.setActiveSticky(true);
    else
      this.scrollTracker.setActiveSticky(false);

    sections.forEach((section) => {      
      const top = section.offsetTop;
      const height = section.clientHeight;

      if (scrollPosition >= top && scrollPosition < top + height) {
        this.scrollTracker.setActiveSection(section.id);
      }
    });
  }

  topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  ngOnInit() {
    setTimeout(() => {
      this.scrollTracker.setActiveSection('home'); // Garante que Home seja ativado primeiro
      this.onWindowScroll(); // Força a verificação inicial
    }, 100); // Pequeno atraso para garantir que a página foi carregada
  }
}
