import { Route } from '@angular/router'
import { Hero1Component } from './hero-1/hero-1.component'
import { Hero2Component } from './hero-2/hero-2.component'
import { Hero3Component } from './hero-3/hero-3.component'
import { Hero4Component } from './hero-4/hero-4.component'
import { Hero5Component } from './hero-5/hero-5.component'

export const VIEW_ROUTES: Route[] = [
  { path: 'index', component: Hero1Component },
  { path: 'index-2', component: Hero2Component },
  { path: 'index-3', component: Hero3Component },
  { path: 'index-4', component: Hero4Component },
  { path: 'index-5', component: Hero5Component },
]
