import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './presentation/pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "hubs",
        loadComponent: () => import("../hubs/presentation/pages/hubs/hubs.component").then(c => c.HubsComponent)
      },
      {
        path: "experiences",
        loadComponent: () => import("../experiences/presentation/pages/experiences/experiences.component").then(c => c.ExperiencesComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
