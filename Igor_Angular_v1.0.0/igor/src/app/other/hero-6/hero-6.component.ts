import { Component } from '@angular/core'
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { BlogComponent } from "../../components/blog/blog.component";
import { TestimonialComponent } from "../../components/testimonial/testimonial.component";
import { ServiceComponent } from "../../components/service/service.component";
import { WorkComponent } from "../../components/work/work.component";
import { ClientComponent } from "../../components/client/client.component";
import { AboutComponent } from "../../components/about/about.component";
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { ScrollDirective } from '../../directive/scroll.directive';

@Component({
  selector: 'app-hero-6',
  standalone: true,
  imports: [NavbarComponent,
        ScrollToModule,
        ScrollDirective, FooterComponent, ContactComponent, BlogComponent, TestimonialComponent, ServiceComponent, WorkComponent, ClientComponent, AboutComponent],
  templateUrl: './hero-6.component.html',
  styles: ``,
  providers: [ScrollToService],

})
export class Hero6Component {
  topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
}
