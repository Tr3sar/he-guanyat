import { Component } from '@angular/core';
import { HeGuanyatPregunta } from '../interfaces/he-guanyat-pregunta.interface';

import * as preguntes from '../../../assets/he-guanyat-preguntes.json'

@Component({
  selector: 'app-he-guanyat',
  templateUrl: './he-guanyat.component.html',
  styleUrl: './he-guanyat.component.scss'
})
export class HeGuanyatComponent {
  preguntes: HeGuanyatPregunta[] = (preguntes as any).default as HeGuanyatPregunta[];
  currentIndex = 0;
  pageSize = 4; 
  solucionsVisibles = false;

  constructor() {
    this.preguntes.sort(() => 0.5 - Math.random());
  }

  getCurrentItems() {
    return this.preguntes.slice(this.currentIndex, this.currentIndex + this.pageSize);
  }

  loadNextItems() {
    if (this.currentIndex + this.pageSize < this.preguntes.length) {
      this.currentIndex += this.pageSize;
      this.solucionsVisibles = false;
    }
  }

  mostrarSolucions() {
    this.solucionsVisibles = true;
  }
}
