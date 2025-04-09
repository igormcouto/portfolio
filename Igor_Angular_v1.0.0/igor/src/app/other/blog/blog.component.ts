import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-blog',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './blog.component.html',
  styles: ``
})
export class BlogComponent {

}
