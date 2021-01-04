import { Injectable } from '@angular/core';
import { Personne } from './../model/personne';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  embauchees: Personne[] = [];
  constructor() {}
  getEmbauchees(): Personne[] {
    return this.embauchees;
  }
  embaucher(personne: Personne): boolean {
    const index = this.embauchees.indexOf(personne);
    if (index === -1) {
      this.embauchees.push(personne);
      return true;
    }
    return false;
  }
}
