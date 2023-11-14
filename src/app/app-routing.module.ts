import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LpComponent } from './pages/lp/lp.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/lp', pathMatch: 'full' },
  { path: 'lp', component: LpComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
