import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'decowood',
    loadChildren: () => import( './decowood/decowood.module' )
                          .then( m => m.DecowoodModule )
  },
  { path: '**', redirectTo: 'decowood' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
