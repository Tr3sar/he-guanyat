import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeGuanyatComponent } from './he-guanyat/he-guanyat.component';

const routes: Routes = [
  {path: 'he-guanyat', component: HeGuanyatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JocsRoutingModule { }
