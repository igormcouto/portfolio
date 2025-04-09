import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-portfolio',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './portfolio.component.html',
  styles: ``
})
export class PortfolioComponent {
  selectedGroup: string = 'all';
  items = [
    {
      imgSrc: 'assets/images/portfolio/01.jpg',
      altText: 'work-image',
      title: 'Mockup Collection',
      tag: 'Mockup',
      group: 'branding'
    },
    {
      imgSrc: 'assets/images/portfolio/02.jpg',
      altText: 'work-image',
      title: 'Mockup Collection',
      tag: 'Mockup',
      group: 'designing'
    },
    {
      imgSrc: 'assets/images/portfolio/03.jpg',
      altText: 'work-image',
      title: 'Mockup Collection',
      tag: 'Mockup',
      group: 'photography'
    },
    {
      imgSrc: 'assets/images/portfolio/04.jpg',
      altText: 'work-image',
      title: 'Mockup Collection',
      tag: 'Mockup',
      group: 'development'
    },
    {
      imgSrc: 'assets/images/portfolio/05.jpg',
      altText: 'work-image',
      title: 'Mockup Collection',
      tag: 'Mockup',
      group: 'branding'
    },
    {
      imgSrc: 'assets/images/portfolio/06.jpg',
      altText: 'work-image',
      title: 'Mockup Collection',
      tag: 'Mockup',
      group: 'designing'
    },
    {
      imgSrc: 'assets/images/portfolio/07.jpg',
      altText: 'work-image',
      title: 'Mockup Collection',
      tag: 'Mockup',
      group: 'photography'
    },
    {
      imgSrc: 'assets/images/portfolio/08.jpg',
      altText: 'work-image',
      title: 'Mockup Collection',
      tag: 'Mockup',
      group: 'development'
    },
    {
      imgSrc: 'assets/images/portfolio/09.jpg',
      altText: 'work-image',
      title: 'Mockup Collection',
      tag: 'Mockup',
      group: 'branding'
    }
  ];

  filteredItems: Array<any> = [];

  ngOnInit(): void {
    this.filteredItems = this.items;
  }

  filterGroup(group: string): void {
    this.selectedGroup = group;
    if (group === 'all') {
      this.filteredItems = this.items;
    } else {
      this.filteredItems = this.items.filter(item => item.group === group);
    }
  }
}
