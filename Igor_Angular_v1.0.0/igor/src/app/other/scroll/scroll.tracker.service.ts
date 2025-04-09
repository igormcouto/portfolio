import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollTrackerService {
  private activeStickySource = new BehaviorSubject<boolean>(false);
  private activeSectionSource = new BehaviorSubject<string>('home');

  activeSection$ = this.activeSectionSource.asObservable();
  activeSticky$ = this.activeStickySource.asObservable();

  setActiveSection(section: string) {
    this.activeSectionSource.next(section);
  }

  setActiveSticky(isSticky: boolean){
    this.activeStickySource.next(isSticky);
  }
}
