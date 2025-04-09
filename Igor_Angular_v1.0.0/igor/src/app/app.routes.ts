import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PortfolioComponent } from './other/portfolio/portfolio.component';
import { BlogComponent } from './other/blog/blog.component';
import { Hero6Component } from './other/hero-6/hero-6.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full',
    },
    {
        path: '',
        component: LayoutComponent,
        loadChildren: () =>
            import('./views/views.route').then((mod) => mod.VIEW_ROUTES),
    },
    {
        path: 'portfolio', component: PortfolioComponent
    },
    {
        path: 'blog', component: BlogComponent
    },
    {
        path: 'index-6', component: Hero6Component
    }
];
