import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InitialComponent } from './../dashboard/pages/initial/initial.component';

const routes: Routes = [
  { path: '',
    children: [
      {
        path: 'home', component: InitialComponent
      },
      {
        path: '**', component: InitialComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
