import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from '../model/personne';

const API_PERSONNES =
  'https://immense-citadel-91115.herokuapp.com/api/personnes/';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private personnes: Personne[];
  constructor(private http: HttpClient) {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'teacher', '', 38, 2145),
      new Personne(
        2,
        'Bouzid',
        'Badreddine',
        'Analyste',
        'rotating_card_profile2.png',
        41,
        7524
      ),
      new Personne(
        3,
        'Bouzid',
        'Badreddine',
        'Analyste',
        '                ',
        41,
        7524
      ),
    ];
  }
  getFakePersonnes(): Personne[] {
    return this.personnes;
  }
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(API_PERSONNES);
  }

  fakeFindPersonneById(id: number): Personne {
    return this.personnes.find((personne) => personne.id === id);
  }
  findPersonneById(id: number): Observable<Personne> {
    return this.http.get<Personne>(API_PERSONNES + id);
  }
  deletePersonneById(id: number): Observable<any> {

    return this.http.delete<any>(API_PERSONNES + id);
  }

  deleteFakePersonne(personne: Personne): boolean {
    const index = this.personnes.indexOf(personne);
    if (index === -1) {
      return false;
    } else {
      this.personnes.splice(index, 1);
      return true;
    }
  }
}
