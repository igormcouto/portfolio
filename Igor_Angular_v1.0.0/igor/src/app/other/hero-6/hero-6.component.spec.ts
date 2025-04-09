import { ComponentFixture, TestBed } from '@angular/core/testing'

import { Hero6Component } from './hero-6.component'

describe('Hero6Component', () => {
  let component: Hero6Component
  let fixture: ComponentFixture<Hero6Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero6Component],
    }).compileComponents()

    fixture = TestBed.createComponent(Hero6Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
