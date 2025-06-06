import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  imports: [],
  templateUrl: './work.component.html',
  styles: ``
})
export class WorkComponent {
  selectedGroup: string = 'all';
  items: Array<any> = [
    {
      imgSrc: 'assets/images/portfolio/egesp.png',
      altText: 'work-image',
      link: 'https://www4.fazenda.sp.gov.br/SistemaEgesp/inscricao-aberta',
      title: 'EGESP',
      tag: 'Escola do Governo',
      group: 'development'
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
