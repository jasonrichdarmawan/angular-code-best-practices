import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './common/guards/logged-in/logged-in.guard';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import("./features/home/presentation/pages/home/home.component").then(c => c.HomeComponent)
  },
  {
    path: 'dashboard',
    canLoad: [LoggedInGuard],
    loadChildren: () => import("./features/dashboard/dashboard.module").then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
