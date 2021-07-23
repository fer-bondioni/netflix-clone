import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const homeModule = () =>
  import('./features/home/home.module').then((m) => m.HomeModule);

const routes: Routes = [
  { path: 'home', loadChildren: homeModule },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
