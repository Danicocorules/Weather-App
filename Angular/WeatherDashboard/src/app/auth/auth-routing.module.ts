import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreSetComponent } from './../auth/pre-set/pre-set.component'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'initial',
        component: PreSetComponent
      },
      {
        path: '**',
        redirectTo: 'initial'
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
export class AuthRoutingModule { }
