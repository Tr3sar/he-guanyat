import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeGuanyatComponent } from './jocs/he-guanyat/he-guanyat.component';

const routes: Routes = [
  {path:'', redirectTo: 'jocs/he-guanyat', pathMatch:'full'},
    {path: 'jocs', children: 
    [
        {path: 'he-guanyat', component: HeGuanyatComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
