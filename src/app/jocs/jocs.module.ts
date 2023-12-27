import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeGuanyatComponent } from './he-guanyat/he-guanyat.component';
import { JocsRoutingModule } from './jocs-routing.module';



@NgModule({
  declarations: [
    HeGuanyatComponent
  ],
  imports: [
    CommonModule,
    JocsRoutingModule
  ]
})
export class JocsModule { }
