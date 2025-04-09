import { ComponentFixture, TestBed } from '@angular/core/testing'

import { Hero5Component } from './hero-5.component'

describe('Hero5Component', () => {
  let component: Hero5Component
  let fixture: ComponentFixture<Hero5Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero5Component],
    }).compileComponents()

    fixture = TestBed.createComponent(Hero5Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
